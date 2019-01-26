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
      searchPhrase: '',
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

  render () {
    return (
      <Layout>
        <Segment
          textAlign="center"
          style={{
            minHeight: '80vh', paddingTop: '50px'
          }}
          vertical
        >
          <Container>
            <Header
              content="DevCollege card search!"
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
                Submit
                <Icon
                  name="right arrow"
                />
              </Button>
            </Form>
          </Container>
        </Segment>
      </Layout>
    )
  }
}

