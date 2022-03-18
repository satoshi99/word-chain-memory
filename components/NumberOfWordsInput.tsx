import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { numberOfWords } from '../lib/recoil-atoms';

export const NumberOfWordsInput = () => {
  const router = useRouter();
  const [numWords, setNumWords] = useRecoilState(numberOfWords);
  const onClick = () => {
    router.push('word-chain');
  };
  const onChange = (valueString: string) => {
    setNumWords(Number(valueString));
  };
  return (
    <Flex direction="column" w="md" mt={{ base: 0, md: '5' }} p="10">
      {console.log('rendered Child')}
      <FormControl>
        <FormLabel>Please input the number of words to chain</FormLabel>
        <NumberInput value={numWords} onChange={onChange} min={2}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <Button
        type="button"
        w="full"
        mt="5"
        colorScheme="teal"
        onClick={onClick}
        disabled={!(numWords > 1)}
        fontSize="2xl"
      >
        Play
      </Button>
    </Flex>
  );
};