import {
  Box,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { NumberOfWordsInput } from '../components/NumberOfWordsInput';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      {console.log('rendered App')}
      <Flex direction="column" mt={{ base: '0', md: '10' }} align="center">
        <Heading fontSize="4xl" color="teal.300">
          Word Chain Memory
        </Heading>
        <Text fontSize={{ base: 'xl', md: '2xl' }} my="5">
          Memory training with the word chain game
        </Text>
        <Box mx="auto" p="5" bgColor="whiteAlpha.200">
          <OrderedList textAlign="left" spacing={1} fontSize="xl">
            <ListItem>
              Select number of words to play the taking-the-end.
            </ListItem>
            <ListItem>
              Play the taking-the-end by oneself for selected number of words.
            </ListItem>
            <ListItem>
              Select number of words to play the taking-the-end.
            </ListItem>
            <ListItem>
              Select number of words to play the taking-the-end.
            </ListItem>
          </OrderedList>
        </Box>
        <NumberOfWordsInput />
      </Flex>
    </Layout>
  );
};

export default Home;
