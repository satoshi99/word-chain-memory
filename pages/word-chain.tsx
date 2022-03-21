import React from 'react';
import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { WordChainCreator } from '../components/WordChainCreator';
import { Stack } from '@chakra-ui/react';
import { WordCounter } from '../components/WordCounter';
import { ResetAndBackTop } from '../components/ResetAndBackTop';
import { useRecoilValue } from 'recoil';
import { numberOfWords, chainListLength } from '../lib/recoil-atoms';

const PlayWordChainPage: NextPage = () => {
  const numWords = useRecoilValue(numberOfWords);
  const totalNumInList = useRecoilValue(chainListLength);

  return (
    <Layout title="Word Chain Game">
      <Stack direction="column" align="center" justify="center">
        <WordCounter value={totalNumInList} max={numWords} />
        <WordChainCreator />
        <ResetAndBackTop />
      </Stack>
    </Layout>
  );
};

export default PlayWordChainPage;
