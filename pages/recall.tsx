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
  recallListLength
} from '../lib/recoil-atoms';
import { FinishModal } from '../components/FinishModal';
import { ResetAndBackTop } from '../components/ResetAndBackTop';

const PlayRecallPage: NextPage = () => {
  const [missCount, setMissCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const chainList = useRecoilValue(wordChainList);
  const [lastIdx, setLastIdx] = useState(chainList.length - 1);
  const [lastWord, setLastWord] = useState(chainList[lastIdx]);

  const [step, setStep] = useRecoilState(gameStep);
  const numWords = useRecoilValue(numberOfWords);
  const recallLength = useRecoilValue(recallListLength);
  const [recallList, setRecallList] = useRecoilState(recallWordList);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const correctWord = chainList[lastIdx - 1];

  const onClick = () => {
    if (inputValue === correctWord) {
      setRecallList([...recallList, inputValue]);
      setLastWord(inputValue);
      setLastIdx(lastIdx - 1);
      setInputValue('');
      setMissCount(0);
    } else {
      setMissCount(missCount + 1);
      if (missCount === 4) {
        setRecallList([...recallList, 'miss']);
        setLastWord(correctWord);
        setLastIdx(lastIdx - 1);
        setInputValue('');
        setMissCount(0);
      }
    }

    if (lastIdx === 1) {
      setStep({ value: 'result' });
      onOpen();
    }
  };

  return (
    <Layout title="Memory">
      <WordCounter value={recallLength + 1} max={numWords} />
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
        <ResetAndBackTop />
      </Flex>
    </Layout>
  );
};

export default PlayRecallPage;
