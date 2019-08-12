import React from "react"
import pageStructure from "../App/pageStructure"

export default ({ content, works }) => {
  const height = window.innerHeight || document.body.clientHeight
  const imgStyle = { maxHeight: height / 6 }
  return (
    <div id={pageStructure[content.n].id} className="container-fluid">
      <div id="works-heading" dangerouslySetInnerHTML={content} />
      <div id="works-content">
        <div id="main-works-content" className="row">
          {works.map((work, i) =>
            i < 6 ? (
              <div className="work-element" key={i} className="col-md-4">
                <div className="p-3">
                  <h4>{work.title}</h4>
                  <img
                    src={work.image}
                    alt={work.alt}
                    className="img-fluid"
                    style={imgStyle}
                  />
                  <p>{work.content}</p>
                  <p className="technos">{work.technos}</p>
                </div>
              </div>
            ) : null
          )}
        </div>
        <div id="additional-project">
          <h4>More Project</h4>
          {works.map((work, i) =>
            i >= 6 ? (
              <a key={i} href="/#">
                {work.title}
              </a>
            ) : null
          )}
        </div>
      </div>
    </div>
  )
}
