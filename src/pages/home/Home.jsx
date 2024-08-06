import Profile from "../../assets/design.png"
import { FaArrowRight } from 'react-icons/fa'

import "./home.css"

const home = () => {
  return (
    <section className="home section grid">
        <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"><span>Sou Daniel Barbosa.</span> desenvolvedor Front-end</h1>
          <p className="home__description">Um entusiasta de tecnologia apaixonado por criar experiências incríveis na web. Com mais de dois anos de dedicação ao desenvolvimento de softwares, com experiência no Frontend utilizando tecnologias como <span className="strong__key">JavaScript / TypeScript, Reactjs, Nextjs, Nodejs</span>. Tudo começou a partir de uma curiosidade de entender como os sites e aplicativos que usamos diariamente são construídos. 
          Desde que mergulhei no mundo da programação, tenho buscado aprimorar incessantemente minhas habilidades, sempre sedento por novos conhecimentos e novos desafios. 
          <br/>
          Estou sempre em busca de oportunidades para aprender e crescer como profissional, animado para colaborar em projetos que desafiem minhas habilidades e me permitam contribuir para o mundo digital.
          Fora do mundo do desenvolvimento, gosto de ouvir música, academia para botar o shape em dia, e uma boa leitura. Estou sempre aberto a novas oportunidades de aprendizado e colaboração, então sinta-se à vontade para entrar em contato comigo se quiser discutir projetos interessantes ou simplesmente para trocar ideias sobre tecnologia!
          </p>

          <button to='/sobre' className='button'>
            Mais sobre mim
            <span className="button__icon contact__button-icon">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default home