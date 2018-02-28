import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'


export default class WorkPreview extends Component {
	render() {
		const {
			title,
			author,
		} = this.props.item

		return (
			<View style={styles.listItem}>
				<Text style={styles.listItemHeader}>{title}</Text>
				<Text style={styles.listItemSubHeader}>{author}</Text>
			</View>
		)
	}
}
