import React from 'react'
import works from './works'
import pageStructure from './../../pageStructure'

export default ({ content }) => {
    return (
        <div id={pageStructure[content.n].id}>
            <div id="works-heading" dangerouslySetInnerHTML={content} />
            <div id="works-content">
                <div id="main-works-content">
                {works.map((work, i) => i < 6 ? (
                    <div class="work-element" key={i}>
                        <div>
                        <h4>{work.title}</h4>
                        <img src={work.image} alt={work.alt} />
                        <p>{work.content}</p>
                        <p className="technos">{work.technos}</p>
                        </div>
                    </div>
                ) : null)}
                </div>
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