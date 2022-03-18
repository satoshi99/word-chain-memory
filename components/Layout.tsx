import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React, { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title} | Word Chain Memory</title>
      </Head>
      <main>
        <Box
          p="10"
          bgColor="teal.900"
          textAlign="center"
          minH="100vh"
          color="white"
        >
          {children}
        </Box>
      </main>
    </>
  );
};
