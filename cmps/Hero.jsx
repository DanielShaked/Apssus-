import { GoogleAssistantSvg } from "./GoogleAssistantSvg.jsx"



export function Hero() {

    return (
        <div className="hero-container main-layout">
            <div className="hero-left">
                <div className="hero-txt">
                    <p>Lorem ipsum dolor sit ameta</p>
                </div>
                <a href="#cards">
                    <div className="cta-btn">
                      Get Started
                    </div>
                </a>
            </div>
            <div className="hero-right">
                <GoogleAssistantSvg/>
            </div>

        </div>
    )


}
