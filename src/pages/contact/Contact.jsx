/* eslint-disable react/jsx-no-target-blank */

const apiFormEmail = "https://api.staticforms.xyz/submit"

import {
    FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaInstagram, FaLinkedin, FaGithub
} from 'react-icons/fa'

import { FiSend } from "react-icons/fi"

import "./contact.css"

const Contact = () => {
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

                <form action={apiFormEmail} method="POST" className="form__contact__form">

                    <div className="form__input-group">

                        <input type="hidden"
                            name="accessKey" value="0dc6e925-5458-4bc2-828d-694bfed92643"
                        />

                        <input type="hidden" name="redirectTo" value="https://danielbarbossdev.netlify.app" />

                        <div className="form__input-div">
                            <input type="text"
                                className="form__control"
                                placeholder="Seu nome"
                                name="name"
                            />
                        </div>

                        <div className="form__input-div">
                            <input type="email"
                                className="form__control"
                                placeholder="Seu email"
                                name="email"
                            />
                        </div>

                        <div className="form__input-div">
                            <input type="text"
                                className="form__control"
                                placeholder="Assunto..."
                                name="subject"
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
        </section>
    )
}

export default Contact