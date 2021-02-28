import { fetchData } from 'api';
import { GetStaticProps } from 'next';
import React from 'react';

import Layout from '../components/Layout';
import NewsFeed from '../components/NewsFeed';
import { Data } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchData();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

type Props = {
  data: Data;
};

const About: React.VFC<Props> = ({ data }) => (
  <Layout isGeneralPage>
    <NewsFeed data={data} />
  </Layout>
);

export default About;
