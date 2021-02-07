
import './App.css';
import Menu from './Componentes/Menu/Menu.js';
import List from './List';
import React from 'react';

class App extends React.Component  {

  

  constructor(props){
    super(props);
    this.state = {
      Cursos:[
        {id:0,title:'Android',imagen:'libro01.jpg'},
        {id:1,title:'HTML',imagen:'libro02.jpg'},
        {id:2,title:'CSS',imagen:'libro03.jpg'},
        {id:2,title:'Java',imagen:'libro03.jpg'},
      ]

    };
  }



  render(){
    return (
      <div className="App">
        <Menu title="Cursos"/>
        <List items={this.state.Cursos}/>
      </div>
    );

  }
 
}

export default App;
