import { extractWorkPreviews } from './utils'
import type { State } from '../types'


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
