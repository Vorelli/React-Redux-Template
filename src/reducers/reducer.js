const initialState = {
  isLoading: false,
  items: []
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ITEMS_REQUEST':
      return Object.assign({}, state, {
        isLoading: action.payload.isLoading
      });
    case 'ITEMS_REQUEST_SUCCESS':
      return Object.assign({}, state, {
        items: state.items.concat(action.items),
        isLoading: action.isLoading
      });
    default:
      return state;
  }
}