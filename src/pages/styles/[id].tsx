import {getDirectusClient} from '../../lib/directus';
import React from 'react';
import {Main} from '../../layouts';

const StylePage: React.FC = (props): JSX.Element => (
  <Main>
    <pre>
      {JSON.stringify(props, null, 2)}
    </pre>
  </Main>
);

export const getStaticProps = async ({params}) => {
  const directus = await getDirectusClient();

  const {id} = params;

  const data = await directus.items('Styles').readOne(
    id
  );

  const {data: festivals} = await directus.items('Festivals').readByQuery({
    fields: ['*', 'styles.Styles_id.*', 'region.*', 'organiser.*'],
    limit: -1,
    filter: {
      'styles': {
          '_some': {
            'Styles_id': {
              'id': {
                '_eq': id
              }
            }
        }
      }
    }
  })

  return {
    props: {
      style: data,
      festivals
    },
  };
};

export async function getStaticPaths() {
  const directus = await getDirectusClient();

  const { data } = await directus.items('Styles').readByQuery({
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

export default StylePage;