import {
  Button,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { gameStep, numberOfWords, wordChainList } from '../lib/recoil-atoms';

export const WordChainCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const [lastWord, setLastWord] = useState('');
  const [wordList, setWordList] = useRecoilState(wordChainList);
  const numWords = useRecoilValue(numberOfWords);
  const [step, setStep] = useRecoilState(gameStep);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const addWord = () => {
    setWordList([...wordList, inputValue]);
    setLastWord(inputValue);
    setInputValue('');
    if (wordList.length + 1 === numWords) {
      setStep({ value: 'backward' });
      onOpen();
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const modalOnClick = () => {
    router.push('memory');
  };

  return (
    <Flex direction="column" align="center">
      <Heading
        fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }}
        mt="36"
        mb="10"
        w="100vw"
      >
        {lastWord ? lastWord : 'chain'}
      </Heading>
      <Flex direction="column" gap="2" w={{ base: 'sm', md: 'lg' }}>
        <Input type="text" value={inputValue} onChange={onChange} size="lg" />
        <Button
          size="lg"
          colorScheme="teal"
          onClick={step.value === 'forward' ? addWord : onOpen}
          fontSize="2xl"
        >
          {step.value === 'forward' ? 'Answer' : 'Next Game'}
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalContent>
            <ModalHeader fontSize="3xl">Finish Word-Chain Game</ModalHeader>
            <ModalBody>
              <Text>
                Next is the memory step. <br />
                How many words do you remember them ?<br />
                But you have to pick them up order by backward
                <br />
                Let&apos;s push the button to go to memory step
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="gray" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="teal" onClick={modalOnClick}>
                Next
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
