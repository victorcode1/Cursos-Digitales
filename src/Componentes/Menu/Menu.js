import React from 'react'
import Search from '../Search/Search.js'
import './Menu.css';

function Menu(props){
    return(
       <div className="container">
           <div className="subcontainer">
               <div className="logo">
                   {props.title}

               </div>
               <div className="buscar">
                   <Search/>

               </div>
               <div className="accion">
                   <button className="button btn-blue">+Añadir nuevo curso</button>
               </div>

           </div>

       </div>
    );


}
export default Menu;