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

