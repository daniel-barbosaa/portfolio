/* eslint-disable react/jsx-no-target-blank */
import { useRef } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineEmail } from "react-icons/md";
import {
 FaInstagram, FaLinkedin, FaGithub, FaArrowRight, FaWhatsapp 
} from 'react-icons/fa'
import { FiSend } from "react-icons/fi"
import "./contact.css"

const Contact = () => {
    const form = useRef();

    const schema = Yup.object().shape({
        name: Yup.string().required('Insira seu nome'),
        email: Yup.string()
          .email('Insira seu email').required('Email obrigatório'),
        message: Yup.string().required('Em que posso te ajudar?')
      });

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
    

    const sendEmail = () => {
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
                        
                        <a className='contact_item' href='https://www.linkedin.com/in/daniel-barbos/' target='_blank'>
                            <FaLinkedin size={20}/>
                            <p className='social_item_name'>Linkedin</p>
                            <p className='social__address'>Daniel Barbosa</p>
                            <p className='button__send'>Enviar <FaArrowRight/></p>
                        </a>

                        <a className='contact_item' href='https://contate.me/daniel-barbosa' target='_blank'>
                            <FaWhatsapp size={20}/>
                            <p className='social_item_name'>Whatsapp</p>
                            <p className='social__address'>(38) 997282779</p>
                            <p className='button__send'>Enviar <FaArrowRight/></p>
                        </a>
                        <a className='contact_item' href='https://criarmeulink.com.br/u/1708691284' target='_blank'>
                            <MdOutlineEmail size={20}/>
                            <p className='social_item_name'>Email</p>
                            <p className='social__address'>danielbarboss.dev@gmail.com</p>
                            <p className='button__send'>Enviar <FaArrowRight/></p>
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit(sendEmail)} ref={form} className="form__contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                        <p className='label__name'>Nome</p>
                            <input type="text"
                                className="form__control"
                                placeholder="Seu nome"
                                name="name"
                                {...register('name')}
                            />
                            <p className='erros__form'>{errors.name?.message}</p>
                        </div>

                        <div className="form__input-div">
                        <p className='label__name'>Email</p>
                            <input type="email"
                                className="form__control"
                                placeholder="Seu email"
                                name="email"
                                {...register('email')}
                            />
                            <p className='erros__form'>{errors.email?.message}</p>
                        </div>
                    </div>

                    <div className="form__input-div">
                    <p className='label__name'>Menssagem</p>
                        <textarea
                            placeholder="Sua mensagem"
                            className="form__control textarea"
                            name="message"
                            {...register('message')}
                            ></textarea>
                            <p className='erros__form'>{errors.message?.message}</p>
                    </div>
                
                    <button className="button" type='submit'>
                        Enviar mensagem
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
            <div className="contact__socials">
                        <a href="https://www.instagram.com/daniel_mendes8/?next=%2F" className="contact__social-link"
                            target="_blank">
                            <FaInstagram />
                        </a>

                        <a href="https://github.com/daniel-barbosaa"
                            className="contact__social-link"
                            target="_blank">
                            <FaGithub />
                        </a>
            </div>
            <ToastContainer/>
        </section>
    )
}

export default Contact