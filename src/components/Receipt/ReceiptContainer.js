import { connect } from 'react-redux';

import {
  getReceiptItems,
  getTotal,
  getTax,
  getSubTotal,
  isAppLoading
} from '../../state/selectors';
import Receipt from './Receipt';

const mapStateToProps = state => ({
  isLoading: isAppLoading(state),
  orderId: state.receipt.orderId,
  items: getReceiptItems(state),
  subTotalAmount: getSubTotal(state),
  taxAmount: getTax(state),
  totalAmount: getTotal(state)
});

export default connect(
  mapStateToProps
)(Receipt);
