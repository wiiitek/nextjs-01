import React from 'react';

import fetch from 'node-fetch';

import {
  Table, TableBody, TableRow
} from 'semantic-ui-react';

import Layout from '../app/Layout';

export default class Search extends React.Component {

  // must be a static method because will be used before constructor
  // async function is a wrapper around promises
  //static async getInitialProps (ctx) {
  static async getInitialProps ({ query }) {
    const searchPhrase = query.q;
    const res = await fetch(`https://api.scryfall.com/cards/search?q=${searchPhrase}`);
    const statusCode = res.status;
    const { data } = await res.json();
    return { data, statusCode };
  }

  render () {
    const rows = this.props.statusCode === 200 ?
      this.props.data.map(card => (
        // key helps react to update only the single item when it changes
        <Table.Row key={card.id}>
          <Table.Cell>{card.name}</Table.Cell>
          <Table.Cell>{card.set_name}</Table.Cell>
          <Table.Cell>{card.mana_cost}</Table.Cell>
          <Table.Cell>{card.eur ? `${card.eur} €` : 'N/A'}</Table.Cell>
        </Table.Row>
      ))
      : [];

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
