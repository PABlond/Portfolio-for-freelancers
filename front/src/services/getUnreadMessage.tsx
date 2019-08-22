export default ({contact}: any) => {
    let i = 0
    contact.forEach((contact: any) => {
        if (!contact.isRead) i+= 1
    })

    return i
}