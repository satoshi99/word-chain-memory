import { Button, Flex, Input, useDisclosure } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  gameStep,
  numberOfWords,
  wordChainList,
  chainListLength
} from '../lib/recoil-atoms';
import { FinishModal } from './FinishModal';

export const WordChainCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const [wordList, setWordList] = useRecoilState(wordChainList);
  const [step, setStep] = useRecoilState(gameStep);
  const totalNumInList = useRecoilValue(chainListLength);
  const numWords = useRecoilValue(numberOfWords);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addWord = () => {
    setWordList([...wordList, inputValue]);
    setInputValue('');
    if (totalNumInList + 1 === numWords) {
      setStep({ value: 'recall' });
      onOpen();
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Flex
        direction="column"
        gap="2"
        w={{ base: 'sm', md: 'lg' }}
        px={{ base: '10', md: '0' }}
      >
        <Input type="text" value={inputValue} onChange={onChange} size="lg" />
        <Button
          size="lg"
          colorScheme="teal"
          onClick={step.value === 'chain' ? addWord : onOpen}
          fontSize="2xl"
        >
          {step.value === 'chain' ? 'Answer' : 'Next Game'}
        </Button>
      </Flex>
      <FinishModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
