import Profile from "../../assets/design.png"
import { FaArrowRight } from 'react-icons/fa'

import "./home.css"

const home = () => {
  return (
    <section className="home section grid">
    
        <img src={Profile} alt="" className="home__img" />
    
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"><span>Sou Daniel Barbosa.</span> desenvolvedor web</h1>
          <p className="home__description">Um entusiasta de tecnologia apaixonado por criar experiências incríveis na web. Com mais de dois anos de dedicação ao desenvolvimento de softwares, concentro-me principalmente no frontend onde me tornei especialista, transformo designs inspiradores por linhas de códigos utilizando <span className="strong__key">Javascript e React </span>. Desde que mergulhei no mundo da programação, tenho buscado aprimorar incessantemente minhas habilidades, sempre sedento por novos conhecimentos e novos desafios. 
          <br/>
          Além do front end, também tenho experiência na construção do back end, desenvolvendo APIs CRUD com <span className="strong__key">Node.js, Express e Fastify.</span> Acredito que a chave para o sucesso em qualquer projeto é um ambiente de estudo concentrado e organizado. Portanto, busco constantemente aperfeiçoar não apenas minhas habilidades técnicas, mas também minha abordagem metodológica para o desenvolvimento de software..</p>

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