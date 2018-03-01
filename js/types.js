import type {
  NavigationScreenProp,
  NavigationStateRoute,
} from 'react-navigation'

export type WorksListLink = {
  label: string,
  url: string,
}

export type WorkPreview = {
  key: string,
  url: string,
  title: string,
  author: WorksListLink,
  fandoms: Array<WorksListLink>,

  rating: string,
  warnings: string,
  category: string,
  iswip: string,

  publish_date: string,
  relationships: Array<WorksListLink>,
  characters: Array<WorksListLink>,
  tags: Array<WorksListLink>,

  summary: string,
  language: string,
  words: number,
  chapters: string,
  hits: number,
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
