/* eslint-disable react/prop-types */
import { useDisclosure } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const PortfolioItem = ({ img, title, details }) => {
    const {onOpen, isOpen, onClose } = useDisclosure()
    // const [modal, setmodal] = useState(false)

    // const toggleModal = () => {
    //     setmodal(!modal)
    // }

    return (
        <div className="portfolio__item">
            <img src={img} alt="imagem" className="portfolio__img" />
            <div className="portfolio__hover" onClick={onOpen} >
                <h3 className="portfolio__title">
                    {title}
                </h3>
                <Modal isOpen={isOpen} onClose={onClose} className="portfolio__modal">
                <ModalOverlay />
                <ModalContent>
                <ModalCloseButton />
                <ModalBody className="portfolio__modal-content" >
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
                </ModalBody>
                </ModalContent>
            </Modal>
            </div>
        </div>
    )
}

export default PortfolioItem