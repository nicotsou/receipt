import React from 'react';

export default function Receipt(props) {
  return (
    <section>
      <h1>Your Order</h1>
      <p>You have ordered the following items:</p>
      
      <ul>
        <li>
          <div>Banana</div>
          <div>2.00</div>
        </li>
        <li>
          <div>Tomato</div>
          <div>1.00</div>
        </li>
        <li>
          <div>Papaya</div>
          <div>3.40</div>
        </li>
      </ul>

      <ul>
        <li>
          <span>Sub Total: </span>
          <span>6.40</span>
        </li>
        <li>
          <span>Discount: </span>
          <span>-0.00</span>
        </li>
        <li>
          <span>Tax Amount: </span>
          <span>1.40</span>
        </li>
        <li>
          <span>Total: </span>
          <span>7.80</span>
        </li>
      </ul>
    </section>
  );
}