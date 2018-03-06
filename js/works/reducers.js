import type { WorksState, Action } from '../types'

const initialState = {}

export const worksReducer = (state: ?WorksState = initialState, action: Action) => {
  const newState = {
    ...state,
  }
  if (action.type === 'LOADING_RECENT_WORKS') {
    newState.recent = {
      isLoading: true,
    }
  } else if (action.type === 'LOADED_RECENT_WORKS') {
    newState.recent = {
      isLoading: false,
      works: action.works,
    }
  } else if (action.type === 'LOADING_SEARCH_WORKS') {
    newState.search = {
      isLoading: true,
    }
  } else if (action.type === 'LOADED_SEARCH_WORKS') {
    newState.search = {
      isLoading: false,
      works: action.works,
    }
  } else if (action.type === 'CLEAR_SEARCH_WORKS') {
    newState.search = undefined
  }
  return newState
}
