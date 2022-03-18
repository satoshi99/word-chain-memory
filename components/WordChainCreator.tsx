import {
  Button,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
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
import { numberOfWords, wordChainList } from '../lib/recoil-atoms';

export const WordChainCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const [lastWord, setLastWord] = useState('');
  const [wordList, setWordList] = useRecoilState(wordChainList);
  const numWords = useRecoilValue(numberOfWords);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const addWord = () => {
    setWordList([...wordList, inputValue]);
    setLastWord(inputValue);
    setInputValue('');
    if (wordList.length + 1 === numWords) {
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
        <Button size="lg" colorScheme="teal" onClick={addWord} fontSize="2xl">
          Answer
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalContent>
            <ModalHeader>Finish Game</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>finish game and then next step</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" onClick={modalOnClick}>
                Next
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
