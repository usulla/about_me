import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav logo='Maria Sukhareva' item1='Обо мне' item2=' Что я умею' item3='Контакты'/>
      <Header title='Привет! Я Сухарева Мария' profession='Frontend разработчик' description='Прогрессивная и влюбленная в свою работу' photo='' alt='Мария Сухарева'/>
      </div>
      );
  }
}

export default App;