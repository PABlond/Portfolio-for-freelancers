import React, { useState } from "react"
import axios from "axios"
import pageStructure from "../App/pageStructure"
import "./contact.css"
import "./contact.scss"

export default ({ content }) => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    content: "",
  })
  const [APIRes, setAPIRes] = useState({
    isError: false,
    content: "",
  })

  const handleClick = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "http://localhost:1337/api/contact",
        form
      )

      setAPIRes({
        isError: false,
        content: "An error occured. Feel free to contact me directly",
      })
    } catch (error) {
      console.error(error)
      setAPIRes({
        isError: true,
        content: "An error occured. Feel free to contact me directly",
      })
    }
  }

  const updateField = e =>
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })

  return (
    <div id={pageStructure[content.n].id} className="bg-contact2">
      <div className="container-contact2">
        <div className="wrap-contact2">
          <form className="contact2-form validate-form" onSubmit={handleClick}>
            <span className="contact2-form-title">Contact Us</span>

            <div
              className="wrap-input2 validate-input"
              data-validate="Name is required"
            >
              <input
                className="input2"
                type="text"
                name="name"
                value={form.name}
                onChange={updateField}
              />
              <span className="focus-input2" data-placeholder="NAME"></span>
            </div>

            <div
              className="wrap-input2 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input2"
                type="text"
                name="email"
                value={form.email}
                onChange={updateField}
              />
              <span className="focus-input2" data-placeholder="EMAIL"></span>
            </div>

            <div
              className="wrap-input2 validate-input"
              data-validate="Message is required"
            >
              <textarea
                className="input2"
                value={form.content}
                onChange={updateField}
                name="message"
              ></textarea>
              <span className="focus-input2" data-placeholder="MESSAGE"></span>
            </div>

            <div className="container-contact2-form-btn">
              <div className="wrap-contact2-form-btn">
                <div className="contact2-form-bgbtn"></div>
                <button className="contact2-form-btn">Send Your Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
