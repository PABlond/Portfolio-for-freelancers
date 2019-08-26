export interface IFocus {
  angle: number
  angle0: number
  color: number
  radius: number
  radius0: number
  theta: number
  x: number
  y: number
}

export interface IValue {
  isOpen: boolean
  focus: IFocus
}

export interface IPageView {
  pageViews: number
  timeOnPage: number
  date: String
}

export interface ITrafficPerformance {
  pageViews: { x: number; y: number }[]
  timeOnPage: { x: number; y: number }[]
  labels: string[]
}

export interface ISelectionRange {
  startDate: Date
  endDate: Date
  key: String
}
