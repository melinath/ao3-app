import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import type { NavigationScreenProp } from 'react-navigation'

import styles from '../styles'
import type { NavigationState } from '../types'

type Props = {
	navigation: NavigationScreenProp<NavigationState>,
}

export default class Home extends Component<Props> {
	static navigationOptions = {
		title: 'AO3 Unofficial',
		drawerLabel: 'Home',
	}

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
