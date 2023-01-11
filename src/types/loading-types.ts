export type LoaderState =
  'initial' | 'loading' | 'success' | 'error'

export type UIElement =
  'yourElementHere' |
  'anotherElement'

export interface UILoader {
  [key: string]: LoaderState
}
export interface StatusMap {
  [key: string]: boolean;
}

export type UILoaderState = {
  [K in UIElement]: LoaderState
}

export const loaderStates: UILoader = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  error: 'error'
}
