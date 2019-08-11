import React from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel'


export default ({certs}) => {
    const handleOnDragStart = e => e.preventDefault()
    return (
        <div className="certifications">
            <div>
                <AliceCarousel
                    mouseDragEnabled
                    autoPlay
                    autoPlayInterval={4000}
                    buttonsDisabled={true}
                    disableAutoPlayOnAction
                    responsive={{
                        0: {
                            items: 1
                        },
                        1024: {
                            items: 1
                        }
                    }} >
                    {certs.map((cert, i) =>
                        <img onDragStart={handleOnDragStart} key={i} src={cert.thumbnail} alt="test" />
                    )}

                </AliceCarousel>
            </div>
        </div>
    )
}