import "./section1.css";
import sebastian from "./sebastian.jpeg";

export function Section () {
    return (
    <div class="container_inner">
        <div class="intro">
            <img src={sebastian} alt="" height={"285px"} width={"285px"} />
            <div class="intro_description">
                <div class="intro_description_sup">Hi There!</div>
                <div class="intro_description_sub">Fueled by a passion for designing compelling products, a have a deep desire to excel and continiously improve in my work. Learn more about my journey below.</div>
            </div>
        </div>
        <div class="career">
            <div class="career_desc">
                <div class="career_desc_sup">My Career So far</div>
                <div class="career_desc_sub">Always up for a challenge, i have worked for lean start-ups and was a member of the first New Zeland start-up to attend Y Combinator, the largest start-up accelerator in the world. From there, i worked my way up to Art Directorand Team Lead at Appster where i oversaw the design of 30+ mobile and desktop apps. Currently, i lead UI/UX design at SaaS start-up VideoMyJob.</div>
            </div>
            <div class="career_btns">
                <div class="row_one">
                    <p>UI DESIGN</p>
                    <p>UX DESIGN</p>
                    <p>PROTOTYPING</p>
                </div>
                <div class="row_two">
                    <p>BRANDING</p>
                    <p>HTML/CSS</p>
                    <p>WIREFRAMING</p>
                </div>
                <div class="row_three">
                    <p>INFRORMATION ARCHITECTURE</p>
                </div>
                <div class="row_four">
                    <p>USER RESEARCH</p>
                    <p>USER INTERVIEWS</p>
                </div>
                <div class="row_five">
                    <p>LEADERSHIP</p>
                    <p>SKETCH</p>
                    <p>ADOBE SUITE</p>
                </div>
            </div>
        </div>
    </div>
    )
}