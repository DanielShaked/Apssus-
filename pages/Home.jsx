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
            <section id="cards" className="cards-container main-layout">
                 <Cards/>
            </section>

            <section className="about-container main-layout">
                <About/>
            </section>
        </section>
    )
}