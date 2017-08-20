import React from 'react';
import { shallow } from 'enzyme';

import Receipt from './Receipt';

it('should display a loading indicator by default', () => {
  const wrapper = shallow(
    <Receipt />
  );
  expect(wrapper).toMatchSnapshot();
});

it('should display a receipt', () => {
  const wrapper = shallow(
    <Receipt
      isLoading={false}
      items={[
        {
          id: 'apple',
          name: 'Apple',
          price: 0.50,
          quantity: 2
        },
        {
          id: 'orange',
          name: 'Orange',
          price: 0.90,
          quantity: 3
        },
        {
          id: 'bananna',
          name: 'Bananna',
          price: 0.60,
          quantity: 4
        },
        {
          id: 'papaya',
          name: 'Papaya',
          price: 2.5,
          quantity: 7,
          discount: {
            amount: 1,
            minItems: 3
          }
        }
      ]}
      orderId="#123"
      subTotalAmount={4.5}
      taxAmount={0.37}
      totalAmount={4.87}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
