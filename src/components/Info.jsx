import React from 'react'

import { personalInfo } from '../data'

const Info = () => {
  return (
    <div>
        {personalInfo.map(({title, description}, index) => {
            return (
                <div className="li__info__item" key={index}>
                    <span className="info__title">
                        {title}
                    </span>
                    <span className="info__description">
                        {description}
                    </span>
                </div>
            )
        })}
    </div>
  )
}

export default Info