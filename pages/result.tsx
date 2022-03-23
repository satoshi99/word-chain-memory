import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { Layout } from '../components/Layout';
import { ResetAndBackTop } from '../components/ResetAndBackTop';
import {
  chainListLength,
  gameResultStats,
  recallWordList,
  totalMistakeNum,
  wordChainList
} from '../lib/recoil-atoms';
import { FiArrowRight } from 'react-icons/fi';

const ResultPage: NextPage = () => {
  const chainList = useRecoilValue(wordChainList);
  const recallList = useRecoilValue(recallWordList);
  const chainLength = useRecoilValue(chainListLength);
  const { correctNum } = useRecoilValue(gameResultStats);
  const totalMistakes = useRecoilValue(totalMistakeNum);
  const maxMistakes = chainLength * 5;
  const recallListRevserse = [...recallList].reverse();

  return (
    <Layout title="Result">
      <Flex direction="column" align="center">
        <Heading>RESULTS</Heading>
        <Flex direction="column" mt="10">
          <Flex direction={{ base: 'column', md: 'row' }} align="center">
            <Text mr="10" fontSize="3xl">
              Correct
            </Text>
            <Text fontSize="5xl" color="teal.300">
              {correctNum} / {chainLength} words
            </Text>
          </Flex>
          <Flex direction={{ base: 'column', md: 'row' }} align="center" mt="5">
            <Text mr="10" fontSize="3xl">
              Mistakes
            </Text>
            <Text fontSize="5xl" color="red.300">
              {totalMistakes} / {maxMistakes} times
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction="row"
          gap="3"
          w={{ base: 'full', md: 'xl' }}
          wrap="wrap"
          mt="10"
        >
          {recallListRevserse.map((v, i) => (
            <Flex direction="row" key={i} align="center" gap="3">
              <Text
                fontSize="2xl"
                color={v === 'incorrect' ? 'red.300' : 'teal.300'}
              >
                {v === 'incorrect' ? chainList[i] : v}
              </Text>
              {i !== chainLength - 1 ? (
                <Icon as={FiArrowRight} w={5} h={5} />
              ) : null}
            </Flex>
          ))}
        </Flex>
        <ResetAndBackTop />
      </Flex>
    </Layout>
  );
};

export default ResultPage;
