import React from 'react';

import Router from 'next/router';

import {
  Segment,
  Container,
  Header,
  Form,
  Button,
  Icon
} from 'semantic-ui-react';

import Layout from '../app/Layout';

export default class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      searchPhrase: 'elf',
    }

    // another way of binding context
    // compare different way of declaring methods, i.e.: getName = () = {}...
    // which is called "fat arrow" declaration
    this.handleSearchPhraseChange = this.handleSearchPhraseChange.bind(this);
    // we bind this because e use state in redirect
    this.redirectToSearchPage = this.redirectToSearchPage.bind(this);
  }

  handleSearchPhraseChange (event) {
    this.setState({
      searchPhrase: event.target.value,
    })
  }

  redirectToSearchPage () {
    Router.push({
      pathname: '/search',
      query: { q: this.state.searchPhrase }
    });
  }

  redirectToRandomCard () {
    Router.push({
      pathname: '/singleCard',
      query: { id: 'random' }
    });
  }

  render () {
    return (
      <Layout>
        <Segment
          textAlign="center"
          style={{
            padding: '50px'
          }}
          vertical
        >
          <Container>
            <Header
              content="DevCollege card search!"
              icon="eye"
            >
            </Header>
            <Form>
              <Form.Field>
                <label>Search for Cards</label>
                <input
                  type="text"
                  placeholder="Type search phrase"
                  value={this.state.searchPhrase}
                  onChange={this.handleSearchPhraseChange}
                />
              </Form.Field>
              <Button
                onClick={this.redirectToSearchPage}
              >
                Search
                <Icon
                  name="arrow right"
                  className="right"
                />
              </Button>
              <Button
                onClick={this.redirectToRandomCard}
              >
                Random
                <Icon
                  name="random"
                  className="right"
                />
              </Button>
            </Form>
          </Container>
        </Segment>
      </Layout>
    )
  }
}

