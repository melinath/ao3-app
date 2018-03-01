import type {
  NavigationScreenProp,
  NavigationStateRoute,
} from 'react-navigation'

export type WorkPreview = {
  key: string,
  title: string,
  author: string,
}

export type WorksState = {
  recent?: (
    void | {
      isLoading: boolean,
      works?: Array<WorkPreview>,
    }
  )
}

type NavigationParams =
  | { item: WorkPreview }

export type NavigationState = {
  params?: NavigationParams
} & NavigationStateRoute

export type State = {
  works: WorksState,
  nav: NavigationScreenProp<NavigationState>,
}

export type Action =
  | {| type: 'LOADING_RECENT_WORKS' |}
  | {| type: 'LOADED_RECENT_WORKS', works: Array<WorkPreview> |}
