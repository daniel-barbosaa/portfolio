import "./portifolio.css"

import {portfolio} from '../../data'
import PortfolioItem from "../../components/PortfolioItem";

const Portifolio = () => {
    return(
        <section className="portfolio section">
            <h2 className="section__title">
                Meus <span>Projetos</span>
            </h2>
            <div className="portfolio__container container grid">
                {
                    portfolio.map((item) => {
                        return <PortfolioItem key={item.id} {...item}/>
                    })
                }
            </div>
        </section>
    ) 
}

export default Portifolio