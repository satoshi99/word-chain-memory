import React from 'react';
import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { WordChainCreator } from '../components/WordChainCreator';
import { Stack } from '@chakra-ui/react';
import { WordCounter } from '../components/WordCounter';
import { useRecoilValue } from 'recoil';

const PlayWordChainPage: NextPage = () => {
  return (
    <Layout title="Word Chain Game">
      <Stack direction="column" align="center" justify="center">
        <WordCounter />
        <WordChainCreator />
      </Stack>
    </Layout>
  );
};

export default PlayWordChainPage;
