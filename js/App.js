import {
  DrawerNavigator,
  StackNavigator,
} from 'react-navigation'

import WorkDetail from './scenes/WorkDetail'
import Home from './scenes/Home'
import Recent from './scenes/Recent'

const HomeStack = StackNavigator(
	{
		Home: { screen: Home },
		Recent: { screen: Recent },
		WorkDetail: { screen: WorkDetail },
	},
)

const RecentStack = StackNavigator(
	{
		Recent: { screen: Recent },
		WorkDetail: { screen: WorkDetail },
	},
	{
		initialRouteName: 'Recent',
	},
)


const Drawer = DrawerNavigator(
	{
		HomeStack: { screen: HomeStack },
		RecentStack: { screen: RecentStack },
	},
	{
		initialRouteName: 'HomeStack',
	},
)
Drawer.navigationOptions = {
	title: 'AO3 Unofficial',
}


const App = Drawer

export default App
