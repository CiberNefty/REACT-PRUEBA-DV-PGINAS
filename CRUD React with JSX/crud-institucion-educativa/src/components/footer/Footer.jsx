import React from 'react';
import './Footer.css'; //Si deseas aplicar estilos especificos al footer


const Footer = () => {
    const currentYear = new Date().getFullYear(); // Obtener el año actual dinamicamente
    
    return (
        <footer className="footer">
            <p> Todos los derechos reservados &copy; {currentYear} SENA All rights reserved.</p>
        </footer>
    );
};

export default Footer;
