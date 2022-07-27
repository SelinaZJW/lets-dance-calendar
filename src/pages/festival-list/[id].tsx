import {getDirectusClient} from '../../lib/directus';
import React from 'react';
import {Main} from '../../layouts';

const FestivalPage: React.FC = (props): JSX.Element => (
  <Main>
    <pre>
      {JSON.stringify(props, null, 2)}
    </pre>
  </Main>
);

export const getStaticProps = async ({params}) => {
  const directus = await getDirectusClient();

  const {id} = params;

  const data = await directus.items('Festivals').readOne(
    id, {
      fields: ['*', 'styles.Styles_id.*', 'region.*', 'organiser.*', 'specific_location.*']
    }
  );

  return {
    props: {
      data
    },
  };
};

//SSG: Static Site Generation 
//recompling possible/legal pages at building stage, so it's not interacting with Directus in real time
export async function getStaticPaths() {
  const directus = await getDirectusClient();

  const { data } = await directus.items('Festivals').readByQuery({
    fields: 'id',
    limit: -1,
  });

  return {
    paths: data.map((item) => {
      return {
        params: { id: item['id'].toString() },
      };
    }),
    fallback: false,
  };
}

export default FestivalPage;