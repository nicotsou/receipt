import React from 'react';
import { bool, arrayOf, number, shape, string } from 'prop-types';
import map from 'lodash/map';

import './Receipt.css';

const renderLoading = () => {
  return <p>Loading Order...</p>;
}

const renderOrderList = (props) => {
  const items = map(props.items, item => {
    return (
      <li className="Receipt-list-item" key={item.id}>
        <div className="Receipt-list-title">{item.quantity}x {item.name}</div>
        <div className="Receipt-list-price">${item.price}</div>
      </li>
    );
  });

  return (
    <ul className="Receipt-list">
      {items}
    </ul>
  );
}


const renderOrder = (props) => {
  return (
    <div>
      <p>Your order with #{props.orderId} contains the following items:</p>
      {renderOrderList(props)}
      <ul className="Receipt-list">
        <li className="Receipt-list-item">
          <span className="Receipt-list-title">Sub Total: </span>
          <span className="Receipt-list-price">$ {props.subTotalAmount}</span>
        </li>
        <li className="Receipt-list-item">
          <span className="Receipt-list-title">Tax Amount: </span>
          <span className="Receipt-list-price">$ {props.taxAmount}</span>
        </li>
        <li className="Receipt-list-item">
          <span className="Receipt-list-title">Total: </span>
          <span className="Receipt-list-price">$ {props.totalAmount}</span>
        </li>
      </ul>

      <div className="Receipt-footer">^_^</div>
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