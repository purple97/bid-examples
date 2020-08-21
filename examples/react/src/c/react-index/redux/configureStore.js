import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const finalCreateStore = compose(applyMiddleware(thunk))(createStore);

module.exports = initialState => finalCreateStore(rootReducer, initialState);
