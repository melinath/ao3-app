import {
	DrawerNavigator,
} from 'react-navigation'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

import routes from './routes'
import type { State, Action } from '../types'
import type { NavigationAction } from 'react-navigation'


export const AppNavigator = DrawerNavigator(routes)


const initialState = AppNavigator.router.getStateForAction({
	routeName: 'HomeStack',
	type: 'Navigation/NAVIGATE',
})

export const navReducer = (state: ?State = initialState, action: NavigationAction) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}


export const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
)
export const addListener = createReduxBoundAddListener("root")
