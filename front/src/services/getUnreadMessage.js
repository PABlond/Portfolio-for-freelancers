export default ({contact}) => {
    console.log(contact)
    let i = 0
    contact.forEach(contact => {
        console.log(contact.isRead)
        if (!contact.isRead) i+= 1
    })

    return i
}