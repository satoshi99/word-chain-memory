import React from 'react';
import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { WordChainCreator } from '../components/WordChainCreator';
import { Stack } from '@chakra-ui/react';
import { WordCounter } from '../components/WordCounter';
import { ResetAndBackTop } from '../components/ResetAndBackTop';
import { useRecoilValue } from 'recoil';
import { numberOfWords, chainListLength } from '../lib/recoil-atoms';
import { ChainNav } from '../components/ChainNav';

const PlayWordChainPage: NextPage = () => {
  const numWords = useRecoilValue(numberOfWords);
  const chainLength = useRecoilValue(chainListLength);

  return (
    <Layout title="Word Chain Game">
      {console.log('rendered word-chain page')}
      <Stack direction="column" align="center" justify="center">
        <WordCounter value={chainLength} max={numWords} />
        <ChainNav />
        <WordChainCreator />
      </Stack>
      <ResetAndBackTop />
    </Layout>
  );
};

export default PlayWordChainPage;
