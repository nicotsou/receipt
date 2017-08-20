import { connect } from 'react-redux';

import {
  getReceiptItems,
  getTotal,
  getSubTotal,
  isAppLoading,
} from '../../state/selectors';
import Receipt from './Receipt';

const mapStateToProps = state => ({
  isLoading: isAppLoading(state),
  items: getReceiptItems(state),
  subTotalAmount: getSubTotal(state),
  totalAmount: getTotal(state)
});

export default connect(
  mapStateToProps
)(Receipt);
