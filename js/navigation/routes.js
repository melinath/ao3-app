import {
	StackNavigator,
} from 'react-navigation'

import Home from '../scenes/Home'
import Recent from '../works/scenes/Recent'
import WorkDetail from '../works/scenes/WorkDetail'
import SymbolModal from '../works/scenes/SymbolModal'


const routes = {
	HomeStack: {
		screen: StackNavigator(
			{
				NestedHomeStack: {
					screen: StackNavigator(
						{
							Home: { screen: Home },
							Recent: { screen: Recent },
							WorkDetail: { screen: WorkDetail },
						},
						{
							initialRouteName: 'Home'
						},
					),
				},
				SymbolModal: { screen: SymbolModal },
			},
			{
				mode: 'modal',
				headerMode: 'none',
			}
		),
	},
	RecentStack: {
		screen: StackNavigator(
			{
				NestedHomeStack: {
					screen: StackNavigator(
						{
							Recent: { screen: Recent },
							WorkDetail: { screen: WorkDetail },
						},
						{
							initialRouteName: 'Recent'
						},
					),
				},
				SymbolModal: { screen: SymbolModal },
			},
			{
				mode: 'modal',
				headerMode: 'none',
			}
		),
	},
}

export default routes
