import React from 'react';

import fetch from 'node-fetch';

import {
  Card,
  Image,
  Icon,
  Container
} from 'semantic-ui-react';

import Layout from '../app/Layout';

export default class SingleCard extends React.Component {

  static async getInitialProps ({ query }) {
    const cardId = query.id;
    const res = await fetch(`https://api.scryfall.com/cards/${cardId}`);
    const statusCode = res.status;
    const data = await res.json();
    return { data, statusCode };
  }

  render () {
    const card = this.props.statusCode === 200 ?
      this.props.data
      : {};
    return (
      <Layout>
        <Card
          style={{
            margin: '0 auto',
          }}
        >
          <Image
            src={card.image_uris.art_crop}
          />
          <Card.Content>
            <Card.Header>
              {card.name}
            </Card.Header>
            <Card.Meta>
              <Icon
                name="theme"
              />
              {card.mana_cost}
            </Card.Meta>
            <Card.Description>
              {
                card.oracle_text.split('\n')
                  .map((line, index) => (
                    <p key={index}>{line}</p>
                  ))
              }
            </Card.Description>
          </Card.Content>
          <Card.Content
            extra
          >
            {card.set_name}
          </Card.Content>
        </Card>
      </Layout>
    );
  }
}
