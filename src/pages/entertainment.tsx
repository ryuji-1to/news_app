import { fetchData } from 'api';
import { GetStaticProps } from 'next';
import React from 'react';
import { DATA } from 'types';

import Layout from '../components/Layout';

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchData('entertainment');

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

const Sports: React.FC<Props> = ({ data }) => <Layout isEntertainmentPage data={data} />;

export default Sports;
