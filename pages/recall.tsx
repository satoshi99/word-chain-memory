import React, { ChangeEvent, useState } from 'react';
import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { WordCounter } from '../components/WordCounter';
import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  gameStep,
  numberOfWords,
  recallWordList,
  wordChainList,
  totalMistakeNum,
  chainListLength
} from '../lib/recoil-atoms';
import { FinishModal } from '../components/FinishModal';
import { ResetAndBackTop } from '../components/ResetAndBackTop';

const PlayRecallPage: NextPage = () => {
  const [mistakes, setMistakes] = useState(0);
  const [totalMistakes, setTotalMistakes] = useRecoilState(totalMistakeNum);
  const [inputValue, setInputValue] = useState('');

  const chainList = useRecoilValue(wordChainList);
  const chainLength = useRecoilValue(chainListLength);
  const [lastIdx, setLastIdx] = useState(chainLength - 1);
  const [lastWord, setLastWord] = useState(chainList[lastIdx]);

  const [step, setStep] = useRecoilState(gameStep);
  const numWords = useRecoilValue(numberOfWords);
  const [recallList, setRecallList] = useRecoilState(recallWordList);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const correctWord = chainList[lastIdx - 1];

  if (!recallList.length) {
    setRecallList([...recallList, lastWord]);
  }

  const gameOver = () => {
    if (recallList.length + 1 === chainLength) {
      setStep({ value: 'result' });
      onOpen();
    }
  };

  const onClick = () => {
    if (inputValue === correctWord) {
      setRecallList([...recallList, inputValue]);
      setLastWord(inputValue);
      setLastIdx(lastIdx - 1);
      setInputValue('');
      setTotalMistakes(totalMistakes + mistakes);
      setMistakes(0);
      gameOver();
    } else {
      setMistakes(mistakes + 1);
      if (mistakes === 4) {
        setRecallList([...recallList, 'incorrect']);
        setLastWord(correctWord);
        setLastIdx(lastIdx - 1);
        setInputValue('');
        setTotalMistakes(totalMistakes + mistakes);
        setMistakes(0);
        gameOver();
      }
    }
  };

  return (
    <Layout title="Memory">
      <WordCounter value={recallList.length} max={numWords} />
      <Flex direction="column" align="center" pt="32">
        <Text>
          Enter the word chained to the word below.
          <br />
          The last letter is of course the first letter of the word below.
        </Text>
        <Heading
          fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }}
          mt="5"
          mb="10"
          w="100vw"
        >
          {lastWord}
        </Heading>
        <Flex direction="column" gap="2" w={{ base: 'sm', md: 'lg' }}>
          <Input type="text" value={inputValue} onChange={onChange} size="lg" />
          <Button
            size="lg"
            colorScheme="teal"
            fontSize="2xl"
            onClick={step.value === 'recall' ? onClick : onOpen}
          >
            {step.value === 'recall' ? 'Answer' : 'Result'}
          </Button>
        </Flex>
        <FinishModal isOpen={isOpen} onClose={onClose} />
      </Flex>
      <ResetAndBackTop />
    </Layout>
  );
};

export default PlayRecallPage;
