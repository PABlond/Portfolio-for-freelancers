import React, { useState } from 'react'
import axios from 'axios'

export default ({ content }) => {
    const [form, setValues] = useState({
        email: '',
        name: '',
        content: ''
    });
    const [APIRes, setAPIRes] = useState({
        isError: false,
        content: ''
    })

    const handleClick = async e => {
        e.preventDefault();
        console.log(form);
        try {
            const response = await axios.post('http://localhost:1337/api/contact', form)

            setAPIRes({
                isError: false,
                content: 'An error occured. Feel free to contact me directly'
            })
        }
        catch (error) {
            console.error(error);
            setAPIRes({
                isError: true,
                content: 'An error occured. Feel free to contact me directly'
            })
        }

    }

    const updateField = e =>
        setValues({
            ...form,
            [e.target.name]: e.target.value
        })

    return (
        <div id={'module-' + content.n}>
            <div id="content-heading" dangerouslySetInnerHTML={content} />
            <div className="contact-form">
                <form onSubmit={handleClick}>
                    <input type="text" name="email" value={form.email} onChange={updateField} />
                    <input type="text" name="name" value={form.name} onChange={updateField} />
                    <textarea name="content" value={form.content} onChange={updateField} />

                    <input type="submit" />
                    <p className={APIRes.isError ? "red" : "green"}>{APIRes.content}</p>
                </form>
            </div>
        </div>
    )
}