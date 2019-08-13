import { createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);
console.log('IN STORE', store.getState())

export default store