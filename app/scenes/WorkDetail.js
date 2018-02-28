import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from '../styles'

export default class WorkDetail extends React.Component {
	static navigationOptions = {
		title: 'Work detail',
	}

	render() {
		return (
			<View style={styles.scene}>
				<Text>Work detail page</Text>
			</View>
		)
	}
}
