import React from 'react';
import { bool, arrayOf, number, shape, string } from 'prop-types';
import map from 'lodash/map';

const renderLoading = () => {
  return <p>Loading Order...</p>;
}

const renderOrderList = (props) => {
  const items = map(props.items, item => {
    return (
      <li key={item.id}>
        <div>{item.quantity}x {item.name}</div>
        <div>{item.price}</div>
      </li>
    );
  });

  return (
    <ul>
      {items}
    </ul>
  );
}


const renderOrder = (props) => {
  return (
    <div>
      <p>Your order with #{props.orderId} contains the following items:</p>
      
      <ul>
        {renderOrderList(props)}
      </ul>

      <ul>
        <li>
          <span>Sub Total: </span>
          <span>{props.subTotalAmount}</span>
        </li>
        <li>
          <span>Tax Amount: </span>
          <span>{props.taxAmount}</span>
        </li>
        <li>
          <span>Total: </span>
          <span>{props.totalAmount}</span>
        </li>
      </ul>
    </div>
  );
}

export default function Receipt(props) {
  return (
    <section>
      <h1>Your Order</h1>
      {props.isLoading ? renderLoading(props) : renderOrder(props)}
    </section>
  );
}

Receipt.propTypes = {
  /**
   * We should display a loading indicator while the receipt is loading
   * @TODO Must go to an parent component, receipt should be clean
   */
  isLoading: bool,
  /**
   * A collection of order items to display
   */
  items: arrayOf(shape({
    id: string,
    name: string,
    price: number,
    quantity: number,
    discount: shape({
      amount: number,
      minItems: number
    }),
    subTotalAmount: number
  }))
};

Receipt.getDefaultProps = {
  isLoading: true
};