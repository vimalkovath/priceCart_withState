const initialState = {
  loading: false,
  countries: [],
  data: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  console.log(action,"action")
  switch (action.type) {
   
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      }

      case 'CLEAR_COUNT_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'CLEAR_COUNT_SUCCESS':
     return{
       ...state,
       data : (state.data.map((item, index) => {
         console.log(item.SKU,"item.SKU");
                  return {
                    ...item,  // copy the existing item
                    qty: 0  // replace the email addr
                  }
              })),
              loading:false
    }

    case 'SET_DATA_COUNT_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'SET_DATA_COUNT_SUCCESS':
     return{
       ...state,
       data : (state.data.map((item, index) => {
         console.log(item.SKU,"item.SKU");
                if (item.SKU === action.payload.SKU) {
                  return {
                    ...item,  // copy the existing item
                    qty: action.payload.qty  // replace the email addr
                  }
                }
                return item;
              })),

              loading:false
    }
    
    case 'REMOVE_DATA_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'REMOVE_DATA_SUCCESS':
     return{
       ...state,
       data : (state.data.filter((item, index) => {
         console.log(item.SKU,"item.SKU");
                if (item.SKU != action.payload.SKU) {
                  return {
                    ...item
                  }
                }
                // return item;
              })),

              loading:false
    }
   
    case 'FETCH_DATA_FAILURE':
      return {
        loading: false,
        countries: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer