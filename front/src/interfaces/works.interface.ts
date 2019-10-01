export interface IWork {
    title: string
    content: string
    technos: string
}

export interface IShowEdit {
    value: boolean, 
    work: IWork, 
    i: number
}