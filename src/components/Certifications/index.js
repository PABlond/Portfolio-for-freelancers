import React from 'react'
import certifications from './certifications'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel'
export default ({ content }) => {
    const handleOnDragStart = e => e.preventDefault()
    return (
        <div id={'module-' + content.n}>
            <div id="certifications-heading" dangerouslySetInnerHTML={content} />
            <div id="certifications-content">
                <AliceCarousel
                    mouseDragEnabled
                    autoPlay
                    autoPlayInterval={4000}
                    disableAutoPlayOnAction
                    responsive={{
                        0: {
                            items: 1
                        },
                        1024: {
                            items: 3
                        }
                    }} >
                    {certifications.map((cert, i) =>
                        <img onDragStart={handleOnDragStart} key={i} src={cert.thumbnail} alt="test" />
                    )}

                </AliceCarousel>
            </div>
        </div>
    )
}