import React from 'react';

import { connect } from 'react-redux';

import Link from 'next/link';

import {
  Table,
  TableBody,
  TableRow
} from 'semantic-ui-react';

import { fetchSearch } from '../app/actions/cards';

import Layout from '../app/Layout';

class Search extends React.Component {

  // must be a static method because will be used before constructor
  // async function is a wrapper around promises
  //static async getInitialProps (ctx) {
  static async getInitialProps ({ store, query }) {
    const searchPhrase = query.q;
    // we are using Thunk to pass function instead of action
    // this is done so that we wait until the data are retrieved
    await store.dispatch(fetchSearch(searchPhrase));
    return {};
  }

  render () {
    const rows = this.props.data.map(card => (
      // key helps react to update only the single item when it changes
      <Table.Row key={card.id}>
        <Table.Cell>
          <Link
            href={{ pathname: '/singleCard', query: { id: card.id } }}>
            <a>{card.name}</a>
          </Link>
        </Table.Cell>
        <Table.Cell>{card.set_name}</Table.Cell>
        <Table.Cell>{card.mana_cost}</Table.Cell>
        <Table.Cell>{card.eur ? `${card.eur} €` : 'N/A'}</Table.Cell>
      </Table.Row>
    ));

    return (
      <Layout>
        <Table
          celled
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Set</Table.HeaderCell>
              <Table.HeaderCell>Mana</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows}
          </Table.Body>
        </Table>
      </Layout>
    )
  }
}

// mapper to get only part of the state for our component
const mapStateToProps = (state) => {
  return ({
    data: state.cards.results,
  })
};

// connecting our component to redux...
// connect() returns a function, and then we execute it again
// so it is like:
// const fun = connect(mapStateToProps);
// export default fun(Search)
export default connect(mapStateToProps)(Search);
