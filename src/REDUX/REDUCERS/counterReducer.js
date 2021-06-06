const INITIAL_STATE = {
          number: 0,
      }
      
      export default (state = INITIAL_STATE, action) => {
          switch (action.type) {
              case 'INCREASE' :
                  return ({
                      ...state,
                      number: state.number + 1 //action.payload
                  })

                  case 'DECREASE' :
                  return ({
                      ...state,
                      number: state.number - 1 //action.payload
                  })
                  
                  default:
                  return state;
          }
      
      }