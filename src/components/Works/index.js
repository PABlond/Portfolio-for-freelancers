import React from 'react'
import works from './works'

export default ({ content }) => {
    return (
        <div id={'module-' + content.n} >
            <div id="works-heading" dangerouslySetInnerHTML={content} />
            <div id="works-content">
                {works.map((work, i) => i < 6 ? (
                    <div key={i}>
                        <h4>{work.title}</h4>
                        <img src={work.image} alt={work.alt} />
                        <p>{work.content}</p>
                        <p className="technos">{work.technos}</p>
                    </div>
                ) : null)}
                <div id="additional-project">
                    <h4>More Project</h4>
                    {works.map((work, i) => i >= 6 ? (
                        <a key={i} href="/#">{work.title}</a>
                    ) : null)}
                </div>
            </div>
        </div>
    )
}