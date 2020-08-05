import { reducer } from './reducers';
import { createStore } from 'redux';
import { actions } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, {}, composeWithDevTools());

// TODO: try doing some store.dispatch() calls here
// HINT: remember to use the functions inside "actions" object

store.dispatch(actions.addTodo('hello'));

let action = actions.addTodo('world');
store.dispatch(action);

store.dispatch(actions.remove(action.id));

console.log(store.getState());
