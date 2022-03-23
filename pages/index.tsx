import {
  Box,
  Flex,
  Heading,
  Icon,
  ListItem,
  OrderedList,
  Text
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { NumberOfWordsInput } from '../components/NumberOfWordsInput';
import { GiBrain } from 'react-icons/gi';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Flex
        direction="column"
        w="full"
        mt={{ base: '0', md: '5' }}
        align="center"
      >
        <Icon as={GiBrain} mb="5" fontSize="5xl" color="teal.300" />
        <Heading fontSize="3xl" color="teal.300" fontFamily="times">
          Word Chain Memory
        </Heading>
        <Text fontSize={{ base: 'sm', md: '2xl' }} my="5">
          Memory training with the word-chain game
        </Text>
        <Box p="5" bgColor="whiteAlpha.200">
          <OrderedList textAlign="left" spacing={1} fontSize="xl">
            <ListItem>
              Select number of words to play the word-chain game.
            </ListItem>
            <ListItem>
              Play the word-chain game by oneself for selected number of words.
            </ListItem>
            <ListItem>
              Then try to recall the words you have chained in reverse order.{' '}
            </ListItem>
          </OrderedList>
        </Box>
        <NumberOfWordsInput />
      </Flex>
    </Layout>
  );
};

export default Home;
