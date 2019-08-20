export interface IWork {
    title: string
    image: string
    alt: string
    content: string
    technos: string
}

export interface IShowEdit {
    value: boolean, 
    work: IWork, 
    i: number
}