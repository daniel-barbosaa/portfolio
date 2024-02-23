/* eslint-disable react/jsx-no-target-blank */
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import {
    FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaInstagram, FaLinkedin, FaGithub
} from 'react-icons/fa'
import { FiSend } from "react-icons/fi"
import "./contact.css"

/* Esse componente está sem uso, apenas um componente antigo e feito como modelo*/

const Contact = () => {

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
                entrar em <span>contato</span>
            </h2>

            <div className="contact__container grid">
                <div className="contact__data">
                    <h3 className="contact__title">
                        Não seja tímido
                    </h3>
                    <p className="contact__description">
                        Me mande mensagem em algum desses contatos disponível e me diga em que posso te ajudar!
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon" />

                            <div>
                                <span className="info__title">
                                    Envie-me um e-mail
                                </span>
                                <h4 className="info__desc">
                                    danielmendess.dev@gmail.com
                                </h4>
                            </div>
                        </div>

                        <div className="info__item">
                            <FaPhoneSquareAlt className="info__icon" />

                            <div>
                                <span className="info__title">
                                    Liga para mim
                                </span>
                                <h4 className="info__desc">
                                    +55(38)99728-2779
                                </h4>
                            </div>
                        </div>
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
                </div>

                <form onSubmit={sendEmail} ref={form}className="form__contact__form">

                    <div className="form__input-group">
                        
                        <div className="form__input-div">
                            <input type="text"
                                className="form__control"
                                placeholder="Seu nome"
                                name="user_name"
                            />
                        </div>

                        <div className="form__input-div">
                            <input type="email"
                                className="form__control"
                                placeholder="Seu email"
                                name="user_email"
                            />
                        </div>

                        <div className="form__input-div">
                            <input type="text"
                                className="form__control"
                                placeholder="Assunto..."
                                name="user_subject"
                            />
                        </div>
                    </div>

                    <div className="form__input-div">
                        <textarea
                            placeholder="Sua mensagem"
                            className="form__control textarea"
                            name="message"></textarea>
                    </div>

                    <button className="button">
                        Enviar mensagem
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
            <ToastContainer/>
        </section>
    )
}

export default Contact