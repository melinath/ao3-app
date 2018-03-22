import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import type { NavigationScreenProp, NavigationStateRoute } from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from '../styles'

type Props = {
	navigation: NavigationScreenProp<NavigationStateRoute>,
}

export default class Home extends Component<Props> {
	static navigationOptions = ({ navigation }: Props) => ({
		title: 'AO3 Unofficial App',
		headerLeft: (
			<Icon.Button
				backgroundColor="#ffffff"
				color="#000000"
				name="menu"
				onPress={() => navigation.navigate('DrawerOpen')}
				size={30}
			/>
		),
		headerRight: (
			<Icon.Button
				backgroundColor="#ffffff"
				color="#000000"
				name="search"
				onPress={() => navigation.navigate('SearchStack')}
				size={30}
			/>
		),
		drawerLabel: 'Home',
	})

	render() {
		return (
			<View style={styles.scene}>
				<Text style={styles.jumbotron}>Welcome to the AO3 Unofficial app! Happy trails!</Text>
				<Button
					onPress={() => this.props.navigation.navigate('Recent')}
					title='View recent works'
				/>
			</View>
		)
	}
}
