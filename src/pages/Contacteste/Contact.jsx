/* eslint-disable react/jsx-no-target-blank */
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineEmail } from "react-icons/md";
import {
    FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaInstagram, FaLinkedin, FaGithub, FaArrowRight, FaWhatsapp 
} from 'react-icons/fa'
import { FiSend } from "react-icons/fi"
import "./contact.css"

const Contacteste = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_43rssbn', 'template_yddbkm7', form.current, 'TK8ev4WfXcPcg2HW_')
          .then((result) => {
              console.log(result.text);
              toast.success('Email enviado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
          }, (error) => {
              console.log(error.text);
              toast.error('Erro ao enviar Email, tente novamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
          });
      };

    return (
        <section className="contact section">
            <h2 className="section__title">
                Entrar em <span>contato</span>
            </h2>

            <div className="contact__container grid">
                <div className="contact__data">
                    <div className='group_contact'>
                        
                        <div className='contact_item'>
                            <FaLinkedin size={20}/>
                            <p className='social_item_name'>Linkedin</p>
                            <p className='social__address'>Daniel Barbosa</p>
                            <p className='button__send'>Enviar <FaArrowRight/></p>
                        </div>

                        <div className='contact_item'>
                            <FaWhatsapp size={20}/>
                            <p className='social_item_name'>Whatsapp</p>
                            <p className='social__address'>(38) 997282779</p>
                            <p className='button__send'>Enviar <FaArrowRight/></p>
                        </div>
                        <div className='contact_item'>
                            <MdOutlineEmail size={20}/>
                            <p className='social_item_name'>Email</p>
                            <p className='social__address'>danielbarboss.dev@gmail.com</p>
                            <p className='button__send'>Enviar <FaArrowRight/></p>
                        </div>
                    </div>
                </div>

                <form onSubmit={sendEmail} ref={form}className="form__contact__form">

                    <div className="form__input-group">
                        <div className="form__input-div">
                        <p className='label__name'>Nome</p>
                            <input type="text"
                                className="form__control"
                                placeholder="Seu nome"
                                name="user_name"
                            />
                        </div>

                        <div className="form__input-div">
                        <p className='label__name'>Email</p>
                            <input type="email"
                                className="form__control"
                                placeholder="Seu email"
                                name="user_email"
                            />
                        </div>
                    </div>

                    <div className="form__input-div">
                    <p className='label__name'>Menssagem</p>
                        <textarea
                            placeholder="Sua mensagem"
                            className="form__control textarea"
                            name="message"
                            id='teste'></textarea>
                    </div>

                
                    <button className="button">
                        Enviar mensagem
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
            <div className="contact__socials">
                        <a href="" className="contact__social-link">
                            <FaFacebookF />
                        </a>

                        <a href="https://www.instagram.com/daniel_mendes8/?next=%2F" className="contact__social-link"
                            target="_blank">
                            <FaInstagram />
                        </a>

                        <a href="https://github.com/DaniMendess"
                            className="contact__social-link"
                            target="_blank">
                            <FaGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/daniel-barbos/" className="contact__social-link"
                            target="_blank">
                            <FaLinkedin />
                        </a>


                    </div>
            <ToastContainer/>
        </section>
    )
}

export default Contacteste