const ITEMS_REQUEST = 'ITEMS_REQUEST';
const ITEMS_REQUEST_SUCCESS = 'ITEMS_REQUEST_SUCCESS' ;

export function itemsRequestSuccess(bool) {
  return {
    type: ITEMS_REQUEST_SUCCESS,
    isLoading: bool
  }
}

export const itemsRequest = (bool, startI, endI) => {
  let payload = {
    isLoading: bool,
    startIndex: startI,
    endIndex: endI
  }

  return {
    type: ITEMS_REQUEST,
    payload
  }
}