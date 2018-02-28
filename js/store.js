import {
	applyMiddleware,
	combineReducers,
	createStore,
} from "redux"
import thunk from "redux-thunk"

import { navMiddleware, navReducer } from './navigation'
import { worksReducer } from './works/reducers'

const RootReducer = combineReducers({
	nav: navReducer,
	works: worksReducer,
})

const store = createStore(
	RootReducer,
	applyMiddleware(
		thunk,
		navMiddleware,
	),
)

export default store
