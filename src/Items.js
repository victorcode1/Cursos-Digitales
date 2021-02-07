import React from 'react'
import './Item.css'

class Items extends React.Component{

    constructor(props){
        super(props);
    }

    
   render(){
    return(
        <div className="item">
            <div className="imagen"><img src={'recursos/'+this.props.imagen}width="100%"/></div>
            <div className="title">{this.props.title}</div>
            
        </div>
    );

   }
    
}
export default Items;