import reducer from './reducer';

test('reducers', () => {
  let state;
  state = reducer({}, {type:'ACYNC_FETCH_RECEIPT_DATA_REQUEST', orderId:''});
  expect(state).toEqual({});
});