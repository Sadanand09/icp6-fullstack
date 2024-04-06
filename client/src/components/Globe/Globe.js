import React from 'react';
import './Globe.css'

export default function Globe() {
    return (
        <>
            

            <div className="container mx-auto row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection"></use></svg>
                </div>
                <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a href="#" className="icon-link">
                    Call to action
                    <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                </a>
            </div>
            <div className="feature col">
            <img className='rotate mx-auto' src='https://dtora.wpengine.com/wp-content/uploads/2019/03/world-img.png' />
            </div>
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>
                </div>
                <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a href="#" className="icon-link">
                    Call to action
                    <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                </a>
            </div>
        </div>

        </>
    )
}