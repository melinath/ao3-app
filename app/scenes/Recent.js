import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

import styles from '../styles'

export default class Recent extends Component {
	static navigationOptions = {
		title: 'Recent works',
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text>Recent works</Text><Button
					onPress={() => this.props.navigation.navigate('Recent')}
					title="Recent works... again"
				/>
			</View>
		)
	}
}
