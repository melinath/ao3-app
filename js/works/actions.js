import qs from 'qs'

import { extractWorkPreviews } from './utils'
import type { State, SearchParams } from '../types'


export function loadRecentWorks() {
  return async (dispatch: Dispatch, getState: () => State) => {
    const recent = getState().works.recent
    // Take no action if already loading.
    if (recent && recent.isLoading) {
      return
    }
    dispatch({
      type: 'LOADING_RECENT_WORKS',
    })
		const response = await fetch('https://archiveofourown.org/works')
		const responseText = await response.text()
    const works = extractWorkPreviews(responseText)

		dispatch({
      type: 'LOADED_RECENT_WORKS',
			works,
		})
  }
}


export function loadSearchWorks(searchParams: SearchParams) {
  return async (dispatch: Dispatch, getState: () => State) => {
    const search = getState().works.search
    // Take no action if already loading.
    if (search && search.isLoading) {
      return
    }
    dispatch({
      type: 'LOADING_SEARCH_WORKS',
    })
    let url = 'https://archiveofourown.org/works/search?utf8=✓&commit=Search&'
    url += qs.stringify({work_search: searchParams})
		const response = await fetch(url)
		const responseText = await response.text()
    const works = extractWorkPreviews(responseText)

		dispatch({
      type: 'LOADED_SEARCH_WORKS',
			works,
		})
  }
}


export function clearSearchWorks() {
  return {type: 'CLEAR_SEARCH_WORKS'}
}
