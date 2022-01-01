import { About } from "../cmps/About.jsx"
import { Cards } from "../cmps/Cards.jsx"
import { Hero } from "../cmps/Hero.jsx"

const {Link } = ReactRouterDOM

export function Home() {
    return (
        <section className="home">
            <div className="main-container">
                <Hero/>
            </div>
            <section className="cards-container main-layout">
                <a id="#cards"> <Cards/></a>
            </section>

            <section className="about-container main-layout">
                <About/>
            </section>
        </section>
    )
}