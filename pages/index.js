import React from 'react';

import Layout from '../app/Layout';
import {
  Segment,
  Container,
  Header,
  Form,
  Button,
  Icon
} from 'semantic-ui-react';

export default class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      searchPhrase: 'test',
    }

    // another way of binding context
    // compare different way of declaring methods, i.e.: getName = () = {}...
    // which is called "fat arrow" declaration
    this.handleSearchPhraseChange = this.handleSearchPhraseChange.bind(this);
  }

  handleSearchPhraseChange (event) {
    this.setState({
      searchPhrase: event.target.value,
    })
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
              <Button>
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

