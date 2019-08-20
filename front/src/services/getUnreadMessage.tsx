export default ({contact}: any) => {
    console.log(contact)
    let i = 0
    contact.forEach((contact: any) => {
        if (!contact.isRead) i+= 1
    })

    return i
}