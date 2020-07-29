import React from 'react';
import Logo from '../../assets/img/LogoBauFlix3.png';
import './Menu.css';
import Button from '../Button/index';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
      <nav className="Menu">
          <a href="/">
            <img className="Logo" src={ Logo } alt="BauFlix Logo" />
          </a>

          <Button as="a" className="ButtonLink" href="/">
              Novo vídeo
          </Button>
      </nav>
    )
}

export default Menu;