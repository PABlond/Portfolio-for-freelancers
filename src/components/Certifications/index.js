import React from "react"

export default ({ certs }) => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <div className="certifications" className="col-md-6 pl-0 pr-0">
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            {certs.map((cert, i) => (
              <div class={`carousel-item ${i == 0 ? "active" : ""}`}>
                <img
                  key={i}
                  src={cert.thumbnail}
                  alt="test"
                  class="d-block w-100"
                />
              </div>
            ))}
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}
