import React from 'react';
import Counter from './src/COMPONENTS/COMPONENTS/counter';
import { Provider }  from 'react-redux'
import store from './src/COMPONENTS/REDUX/STORE/store'

const App = () => {  
  return (
  <Provider store={store}>    
    <Counter />
    </Provider>
    );
};
export default App;
