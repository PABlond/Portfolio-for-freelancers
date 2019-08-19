import store from './../state/store'

export default () => {
    const {contacts} = store.getState().content
    let i = 0
    contacts.forEach(contact => {
        if (!contact.isRead) i+= 1
    })

    return i
}