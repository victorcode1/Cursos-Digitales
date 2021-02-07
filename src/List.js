import React from 'react'
import Items from './Items'

function List(props){
    return(
        <div className="list">
            {
                props.items.map(item =>

                        <Items  key ={item.id}
                                id ={item.id}
                                title={item.title}
                                imagen ={item.imagen}/>
                      
                    )
            }
            
        </div>
    
    );


}
export default List;