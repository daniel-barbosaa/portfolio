/* eslint-disable react/prop-types */
import { useState } from 'react'
import Close from "../assets/close.svg"

const PortfolioItem = ({ img, title, details }) => {
    const [modal, setmodal] = useState(false)

    const toggleModal = () => {
        setmodal(!modal)
    }

    return (
        <div className="portfolio__item">
            <img src={img} alt="imagem" className="portfolio__img" />

            <div className="portfolio__hover" onClick={toggleModal} >
                <h3 className="portfolio__title">
                    {title}
                </h3>

               {modal && (
                 <div className="portfolio__modal">
                 <div className="portfolio__modal-content">
                     <img src={Close} alt="botao-fechar" className='modal__close' onClick={toggleModal} />
                     <h3 className="modal__title">
                         {title}
                     </h3>
                     <ul className="modal__list grid">
                         {details.map(({icon,title,desc}, index ) => {
                             return (
                                 <li className="modal__item" key={index}>
                                     <span className="item__icon">
                                        {icon}
                                     </span>
                                     <div>
                                         <span className="item__item">
                                             {title}
                                         </span>
                                         <span className="item__details">
                                           {desc}
                                         </span>
                                     </div>
                                 </li>
                             )
                         })}
                     </ul>
                     
                     <img src={img} alt="" className="modal__img" />

                 </div>
             </div>
               )}
            </div>
        </div>
    )
}

export default PortfolioItem