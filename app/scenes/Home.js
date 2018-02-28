import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

import styles from '../styles'

export default class Home extends React.Component {
	static navigationOptions = {
		title: 'AO3 Unofficial',
		drawerLabel: 'Home',
	}

	render() {
		return (
			<View style={styles.scene}>
				<Text>Homepage</Text>
				<Button
					onPress={() => this.props.navigation.navigate('WorkDetail')}
					title="View work"
				/>
			</View>
		)
	}
}
