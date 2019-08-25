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
    theta: number
}
