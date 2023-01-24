import logo from "../../imgs/logo.png";
import navIcon1 from "../../imgs/nav-icon1.svg";
import navIcon2 from "../../imgs/nav-icon2.svg";
import navIcon3 from "../../imgs/nav-icon3.svg";
import "./footer.css";

export default function Footer () {
  return (
    <footer>
      <div className="footer-item">
        <img src={logo} alt="Logo" className="footer-img"/>
      </div>
      <div className="footer-item">
        <p>Copyright 2023. All Rights Reserved</p>
        <a href="https://storyset.com/work" target="_blank" rel="noreferrer">Work illustrations by Storyset</a>
      </div>
      <div className="footer-item social-icon">
        <a href="https://www.linkedin.com/in/clarissacortese/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
        <a href="https://github.com/clarissacortese" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
        <a href="https://www.goodreads.com/clarissacortese" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Icon" /></a>
      </div>
    </footer>
  )
}