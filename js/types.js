import type {
  NavigationParams,
  NavigationNavigateAction,
  NavigationEventCallback,
  NavigationEventSubscription,
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

type NavigationRoute = {
  index: number,
  routeName: string,
  routes: Array<NavigationRoute>,
}

export type NavigationState = {
  state: { params: { item: WorkPreview }},
  navigate: (
    routeName: string,
    params?: NavigationParams,
    action?: NavigationNavigateAction
  ) => boolean,
  routes: Array<NavigationRoute>,
}

export type State = {
  works: WorksState,
  nav: NavigationState,
}

export type Action =
  | {| type: 'LOADING_RECENT_WORKS' |}
  | {| type: 'LOADED_RECENT_WORKS', works: Array<WorkPreview> |}
