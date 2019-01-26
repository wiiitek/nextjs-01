import React from 'react';

import { connect } from 'react-redux';

import {
  Card,
  Image,
  Icon,
  Container
} from 'semantic-ui-react';

import Link from 'next/link';

import {
  fetchSingleCard,
  fetchRandomCard
} from '../app/actions/cards';

import Layout from '../app/Layout';

class SingleCard extends React.Component {

  static async getInitialProps ({ store, query }) {
    const cardId = query.id;

    if (cardId === 'random') {
      await store.dispatch(fetchRandomCard());
    } else {
      await store.dispatch(fetchSingleCard(cardId));
    }

    return {};
  }

  render () {
    const card = this.props.data;
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
              <Link
                href={{ pathname: '/singleCard', query: { id: card.id } }}>
                <a>
                  <Icon
                    name="linkify"
                    className="right"
                  />
                </a>
              </Link>
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

// mapper to get only part of the state for our component
const mapStateToProps = (state) => {
  return ({
    data: state.cards.details,
  })
};


// connecting our component to redux...
// connect() returns a function, and then we execute it again
// so it is like:
// const fun = connect(mapStateToProps);
// export default fun(SingleCard)
export default connect(mapStateToProps)(SingleCard);

