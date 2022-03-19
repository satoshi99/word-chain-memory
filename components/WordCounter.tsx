import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text
} from '@chakra-ui/react';

type Props = {
  value: number;
  max: number;
};

export const WordCounter = ({ value, max }: Props) => {
  return (
    <Flex direction="column" position="absolute" top="5" left="5">
      <CircularProgress max={max} value={value} size="24" color="teal.300" />
      <CircularProgressLabel fontSize="2xl">
        <Text fontSize="4xl" color="teal.300">
          {value}
        </Text>
      </CircularProgressLabel>
    </Flex>
  );
};
