import "./navbar.css";
import sebasLogo from "./sebasLogo.png";

export function Navbar() {
    return (
        <div>
            <header class="header">
                <div class="logo">
                    <img src={sebasLogo} alt="" width={"25px"} height={"25px"}/>
                    <div>Sebastian Petravic</div>
                </div>
                <nav class="navigation">
                    <a href="#" class="nav_link">Dribble</a>
                    <a href="#" class="nav_link">Linkedin</a>
                    <a href="#" class="nav_link">About</a>
                    <a href="#" class="nav_link">Contact</a>
                    <a href="#" class="nav_link active">View Work</a>
                </nav>
            </header>
        </div>
    )
}