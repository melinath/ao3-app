import React, { PureComponent } from 'react'
import { FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { NavigationScreenProp, NavigationStateRoute } from 'react-navigation'

import WorkPreview from '../components/WorkPreview'
import styles from '../../styles'
import { loadRecentWorks } from '../actions'
import type { WorkPreview as WorkPreviewType } from '../../types'


type Props = {
	works: Array<WorkPreviewType>,
	navigation: NavigationScreenProp<NavigationStateRoute>,
  onRefresh?: () => void,
}


export default class WorksList extends PureComponent<Props> {
	constructor(props: Props) {
		super(props);

		(this:any).renderEmpty = this.renderEmpty.bind(this);
		(this:any).renderItem = this.renderItem.bind(this);
	}

	renderEmpty() {
		if (this.props.isLoading) return null
		if (!this.props.works) return null
		return (
			<Text style={[styles.paragraph, {paddingTop: 10}]}>
				No works found
			</Text>
		)
	}

	renderItem({ item }: { item: WorkPreviewType }) {
		return <WorkPreview item={item} navigation={this.props.navigation} />
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<FlatList
					data={this.props.works}
					ListEmptyComponent={this.renderEmpty}
					onRefresh={this.props.onRefresh}
					renderItem={this.renderItem}
					refreshing={this.props.isLoading || false}
				/>
			</View>
		)
	}
}
