import axios from 'axios'

const cartItems=[
    {
      "name": "Toilet Roll",
      "SKU": 1298443,
      "qty":0,
      "price": 1.3,
      "currency": "£",
      "metadata": {
        "category": "toiletries"
      }
    },
    {
      "name": "Pasta",
      "SKU": 283791,
      "qty":0,
      "price": 0.58,
      "currency": "£",
      "metadata": {
        "category": "food"
      }
    },
    {
      "name": "Eggs",
      "SKU": 828823,
      "qty":0,
      "price": 0.21,
      "currency": "£",
      "metadata": {
        "category": "food"
      }
    }
  ]

// export const fetchCountries = () => {
//   return (dispatch) => {
//     dispatch(fetchCountriesRequest())
//     axios
//       .get('https://jsonplaceholder.typicode.com/todos')
//       .then(response => {
//         const countries = response.data
//           dispatch(fetchCountriesSuccess(countries))
//       })
//       .catch(error => {
//         dispatch(fetchCountriesFailure(error.message))
//       })
//   }
// }


export const fetchData = () => {
    return (dispatch) => {
      dispatch(fetchDataRequest())
          setTimeout(() => {  // to emulate some network delay
            dispatch(fetchDataSuccess(cartItems))
          }, 2000)
    
    }
  }

  export const fetchDataRequest = () => {
    return {
      type: 'FETCH_DATA_REQUEST'
    }
  }

  export const fetchDataSuccess = data => {
    return {
      type: 'FETCH_DATA_SUCCESS',
      payload: data
    }
  }

  export const setCount = (data) => {
    return (dispatch) => {
      console.log(data,"data count");

      dispatch(setDataCountRequest());
      dispatch(setDataCountSuccess(data))
    
    }
  }

  export const setDataCountRequest = (data) => {
    console.log(data,"actions");
    return {
      type: 'SET_DATA_COUNT_REQUEST'
    }
  }

  export const setDataCountSuccess = data => {
    return {
      type: 'SET_DATA_COUNT_SUCCESS',
      payload: data
    }
  }

  export const removeItem = (data) => {
    return (dispatch) => {
      console.log(data,"data count");

      dispatch(removeItemRequest());
      dispatch(removeItemSuccess(data))
    
    }
  }

  export const removeItemRequest = (data) => {
    console.log(data,"actions");
    return {
      type: 'REMOVE_DATA_REQUEST'
    }
  }

  export const removeItemSuccess = data => {
    return {
      type: 'REMOVE_DATA_SUCCESS',
      payload: data
    }
  }


  export const clearQty = () => {
    return (dispatch) => {

      dispatch(clearQtyRequest());
      dispatch(clearQtySuccess())
    
    }
  }

  export const clearQtyRequest = () => {
    return {
      type: 'CLEAR_COUNT_REQUEST'
    }
  }

  export const clearQtySuccess = () => {
    return {
      type: 'CLEAR_COUNT_SUCCESS'
    }
  }

