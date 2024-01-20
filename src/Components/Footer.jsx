import React from "react";
import "../styles/Footer.css";
import logoFacebook from "../img/Footer/facebook.png";
import logoInstagram from "../img/Footer/instagram.png";
import logoYoutube from "../img/Footer/youtube.png";
import logotelefono from "../img/Footer/telefono2.png";
import logoGmail from "../img/Footer/gmail.png";
import logoOutlook from "../img/Footer/outlook.png";

const Footer = ()=>{
    return(
        <footer className="containerGlobal-Footer">

            <div className="container-Columnas-Footer">
                <div className="columna1-Footer">
                    <label className="lbFooter">Redes Sociales:</label>
                    <ul>
                        <li className="liFooter">
                            <img src={logoFacebook} alt="" className="logo-redSocial"/>{' '}
                            Haxo Paquetes
                        </li>

                        <li className="liFooter">
                            <img src={logoInstagram} alt="" className="logo-redSocial"/>{' '}
                            @Haxo_Paqueteria
                        </li>

                        <li className="liFooter">
                            <img src={logoYoutube} alt="" className="logo-redSocial"/>{' '}
                            HaxPaqueteria
                        </li>
                    </ul>
                </div>

                <div className="columna2-Footer">
                    <label className="lbFooter">Contacto:</label>
                    <ul>
                        <li className="liFooter">
                            <img src={logotelefono} alt="" className="logo-redSocial"/>{' '}
                            0030-9632-0587
                        </li>

                        <li className="liFooter">
                            <img src={logotelefono} alt="" className="logo-redSocial"/>{' '}
                            4569-7891-2786
                        </li>

                        <li className="liFooter">
                            <img src={logotelefono} alt="" className="logo-redSocial"/>{' '}
                            7890-0009-6587
                        </li>
                    </ul>
                </div>

                <div className="columna3-Footer">
                    <label className="lbFooter">Correos:</label>
                    <ul>
                        <li className="liFooter">
                            <img src={logoGmail} alt="" className="logo-redSocial"/>{' '}
                            Gmail
                        </li>

                        <li className="liFooter">
                            <img src={logoOutlook} alt="" className="logo-redSocial"/>{' '}
                            Outlook
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>

            <div className="nombreFooter-PieFinal">
                <label>@2024 Desarrolladora Paola Stephania Mayorga Aguirre</label>
            </div>
        </footer>
    );
}

export default Footer;