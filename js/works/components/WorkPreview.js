import React, { PureComponent } from 'react'
import { TouchableHighlight, View, Text } from 'react-native'

import styles from '../../styles'


export default class WorkPreview extends PureComponent {
	constructor(props) {
		super(props)

		this.onPress = this.onPress.bind(this)
	}

	onPress() {
		this.props.navigation.navigate('WorkDetail', {item: this.props.item})
	}

	render() {
		const {
			title,
			author,
		} = this.props.item

		return (
			<TouchableHighlight
				onPress={this.onPress}
				style={styles.listItem}
				underlayColor="#007AFF"
			>
				<View>
					<Text style={styles.listItemHeader}>{title}</Text>
					<Text style={styles.listItemSubHeader}>{author}</Text>
				</View>
			</TouchableHighlight>
		)
	}
}
