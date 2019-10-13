import React, { Component } from 'react';
import { Segment, Header, Grid} from 'semantic-ui-react'
import OrderedItem from './OrderedItem';

const Order = (props) => {

  const style = {
    borderStyle: 'double',
    borderWidth: '5px',
    padding: '20px',
    width: '60%',
    height: '100%'
  }

    return (
      <Segment basic style={style} padded='very'>

        <Grid>
          <Grid.Row>
            <Header>{'Order# ' + props.order.id}</Header>
          </Grid.Row>
          <Grid.Row>
            {props.order.products.map((part) =>
              <Grid.Column width={8}>
                <OrderedItem part={part} />
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </Segment>
    );
}

export default Order
