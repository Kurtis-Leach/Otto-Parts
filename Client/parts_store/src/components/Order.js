import React, { Component } from 'react';
import { Segment, Header, Grid} from 'semantic-ui-react'
import OrderedItem from './OrderedItem';

export default class Order extends Component {

  style = {
    borderStyle: 'double',
    borderWidth: '5px',
    padding: '20px',
    width: '60%',
    height: '100%'
  }

  render() {
    // products = this.props.order.products
    return (
      <Segment basic style={this.style} padded='very'>

        <Grid>
          <Grid.Row>
            <Header>{'Order# ' + this.props.order.id}</Header>
          </Grid.Row>
          <Grid.Row>
            {this.props.order.products.map((part) =>
              <Grid.Column width={8}>
                <OrderedItem part={part} />
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
