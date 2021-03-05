import { fetchData } from 'api';
import { GetStaticProps } from 'next';
import React from 'react';

import Layout from '../components/Layout';
import { DATA } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchData();

  return {
    props: {
      data,
    },
    revalidate: 100,
  };
};

type Props = {
  data: DATA;
};

const About: React.VFC<Props> = ({ data }) => <Layout isGeneralPage data={data} />;

export default About;
