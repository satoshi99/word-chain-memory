import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { ResetAndBackTop } from '../components/ResetAndBackTop';

const ResultPage: NextPage = () => {
  return (
    <Layout title="Result">
      <ResetAndBackTop />
    </Layout>
  );
};

export default ResultPage;
