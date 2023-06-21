import React from 'react'
import Profile from "../../assets/profile.png"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

import "./home.css"

const home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"><span>Eu sou Daniel Barbosa.</span> desenvolvedor web</h1>
          <p className="home__description">Sou desenvolvedor web, no Front-End tenho experiência com JavaScript, React, HTML, CSS, Styled-components. No Back-End possuo o conhecimento com NodeJs utilizando JavaScript, Express. Tenho como foco externar o meu potencial com o poder de todas essas tecnologias aperfeiçoando e mantendo sistemas web completos, com performace e levando uma excelente experiência de usuário. <br></br>
          Deseja falar comigo entre na página de <Link to="/contato" className='nav__contact'>Contato</Link></p>

          <Link to='/sobre' className='button'>
            Mais sobre mim
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default home