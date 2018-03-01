import React, { PureComponent } from 'react'
import { TouchableHighlight, View, Text } from 'react-native'

import styles from '../../styles'
import type { NavigationState, WorkPreview as WorkPreviewType } from '../../types'

type Props = {
	item: WorkPreviewType,
	navigation: NavigationState,
}


export default class WorkPreview extends PureComponent<Props> {
	constructor(props: Props) {
		super(props);

		(this:any).onPress = this.onPress.bind(this);
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
					<Text>{author}</Text>
				</View>
			</TouchableHighlight>
		)
	}
}
