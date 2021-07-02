import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';

function Header() {   
  
    return (
      <S.Container>
        <S.LeftSide>         
        </S.LeftSide>
        <S.RightSide>
          <Link to="/">INÍCIO</Link>
          <span className="dividir"/>
          <Link to="/task">NOVA TAREFA</Link>
            <>            
            <button id="notification"></button>
            </>
         
        </S.RightSide>
      </S.Container>
    );
  }
  
  export default Header;
  