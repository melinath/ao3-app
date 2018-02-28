import {
	DrawerNavigator,
	StackNavigator,
} from 'react-navigation'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'


import * as routes from './routes'


export const AppNavigator = DrawerNavigator(
	{
		HomeStack: { screen: StackNavigator(routes.home, { initialRouteName: 'Home' }) },
		RecentStack: { screen: StackNavigator(routes.recent, { initialRouteName: 'Recent' }) },
	}
)


const initialState = AppNavigator.router.getStateForAction({
	routeName: 'HomeStack',
	type: 'Navigation/NAVIGATE',
})

export const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}


export const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
)
export const addListener = createReduxBoundAddListener("root")
