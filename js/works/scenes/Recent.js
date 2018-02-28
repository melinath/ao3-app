import React, { PureComponent } from 'react'
import { FlatList, Button, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import WorkPreview from '../components/WorkPreview'
import styles from '../../styles'
import { loadRecentWorks } from '../actions'


const mapStateToProps = (state) => {
	return state.works.recent || {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({
			loadRecentWorks,
		}, dispatch)
	}
}


class Recent extends PureComponent {
	static navigationOptions = {
		title: 'Recent works',
	}


	constructor(props) {
		super(props)

		this.fetchRecent = this.fetchRecent.bind(this)
		this.renderEmpty = this.renderEmpty.bind(this)
		this.renderItem = this.renderItem.bind(this)
	}

	fetchRecent() {
		this.props.actions.loadRecentWorks()
	}

	componentDidMount() {
		this.fetchRecent()
	}

	renderEmpty() {
		if (this.props.isLoading) return null
		return (
			<Text style={[styles.paragraph, {paddingTop: 10}]}>
				No works found
			</Text>
		)
	}

	renderItem({ item }) {
		return <WorkPreview item={item} navigation={this.props.navigation} />
	}

	render() {
		return (
			<View style={styles.scenes}>
				<FlatList
					data={this.props.works}
					ListEmptyComponent={this.renderEmpty}
					onRefresh={this.fetchRecent}
					renderItem={this.renderItem}
					refreshing={this.props.isLoading || false}
				/>
			</View>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Recent)
