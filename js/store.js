import {
	applyMiddleware,
	combineReducers,
	createStore,
} from "redux"
import thunk from "redux-thunk"

import { navMiddleware, navReducer } from './navigation'

const RootReducer = combineReducers({
	nav: navReducer,
})

const store = createStore(
	RootReducer,
	applyMiddleware(
		thunk,
		navMiddleware,
	),
)

export default store
