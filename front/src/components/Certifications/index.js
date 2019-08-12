import React from "react"

export default ({ certs }) => {
  return (
    <div className="certifications" className="col-md-6 pl-0 pr-0">
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {certs.map((cert, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                <img
                  key={i}
                  src={cert.thumbnail}
                  alt="test"
                  className="d-block w-100"
                />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}
