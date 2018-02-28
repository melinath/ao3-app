import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from '../styles'

export default class WorkDetail extends React.Component {
	static navigationOptions = ({ navigation }) => {
		const { params } = navigation.state

		return {
			title: params ? params.item.title : 'Work detail',
		}
	}

	render() {
		const { item } = this.props.navigation.state.params
		return (
			<View style={[styles.scene, styles.listItem]}>
				<Text style={styles.listItemHeader}>{item.title}</Text>
				<Text style={styles.listItemSubHeader}>{item.author}</Text>
			</View>
		)
	}
}
