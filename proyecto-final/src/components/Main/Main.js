import React from "react";
import { Link } from 'react-router-dom';
import './Main.css';

function Main() {
      return (
          <>
           <div className="main">
          <Link to="/offers" className="button">
            VAMOS A LOGRARLO!
           </Link>
           </div>          
           </>
    );
};

export default Main;