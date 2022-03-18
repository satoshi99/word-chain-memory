import React from 'react';
import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { WordChainGame } from '../components/WordChainGame';

const PlayWordChainPage: NextPage = () => {
  return (
    <Layout title="Word Chain Game">
      <WordChainGame />
    </Layout>
  );
};

export default PlayWordChainPage;
