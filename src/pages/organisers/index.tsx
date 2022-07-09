import {getDirectusClient} from '../../lib/directus';
import React from 'react';
import {Main} from '../../layouts';

const OrganiserListPage: React.FC = (props): JSX.Element => (
  <Main>
    <pre>
      {JSON.stringify(props, null, 2)}
    </pre>
  </Main>
);

export const getStaticProps = async () => {
  // const {category} = params;
  // console.log(`categroy: ${category}`);
  const directus = await getDirectusClient();

  const {data} = await directus.items('Organisers').readByQuery({
    fields: ['*'],
    limit: -1,
  });

  return {
    props: {
      data
    },
  };
};

export default OrganiserListPage;