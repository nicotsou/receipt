import reducer from './reducer';

test('reducers', () => {
  let state;
  state = reducer({}, {type:'ACYNC_FETCH_FRUITS_REQUEST', orderId:''});
  expect(state).toEqual({});
});