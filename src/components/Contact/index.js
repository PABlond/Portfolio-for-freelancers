import React, { useState } from "react"
import axios from "axios"
import pageStructure from '../App/pageStructure'
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
    // <div id={pageStructure[content.n].id}>
    //   <div id="content-heading" dangerouslySetInnerHTML={content} />
    //   <div id="contact-form">
    //     <form onSubmit={handleClick}>
    //       <input
    //         type="text"
    //         name="email"
    //         placeholder="Email"
    //         value={form.email}
    //         onChange={updateField}
    //       />
    //       <input
    //         type="text"
    //         name="name"
    //         placeholder="Name"
    //         value={form.name}
    //         onChange={updateField}
    //       />
    //       <textarea
    //         name="content"
    //         placeholder="Your message"
    //         rows={5}
    //         value={form.content}
    //         onChange={updateField}
    //       />

    //       <input type="submit" />
    //       <p className={APIRes.isError ? "red" : "green"}>{APIRes.content}</p>
    //     </form>
    //   </div>
    // </div>
    <div class="bg-contact2">
		<div class="container-contact2">
			<div class="wrap-contact2">
				<form class="contact2-form validate-form" onSubmit={handleClick}>
					<span class="contact2-form-title">
						Contact Us
					</span>

					<div class="wrap-input2 validate-input" data-validate="Name is required">
						<input class="input2" type="text" name="name" />
						<span class="focus-input2" data-placeholder="NAME"></span>
					</div>

					<div class="wrap-input2 validate-input" data-validate="Valid email is required: ex@abc.xyz">
						<input class="input2" type="text" name="email" />
						<span class="focus-input2" data-placeholder="EMAIL"></span>
					</div>

					<div class="wrap-input2 validate-input" data-validate="Message is required">
						<textarea class="input2" name="message"></textarea>
						<span class="focus-input2" data-placeholder="MESSAGE"></span>
					</div>

					<div class="container-contact2-form-btn">
						<div class="wrap-contact2-form-btn">
							<div class="contact2-form-bgbtn"></div>
							<button class="contact2-form-btn">
								Send Your Message
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
  )
}
