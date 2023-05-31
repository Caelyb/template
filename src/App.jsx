import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SecondPage } from './components/secondPage';
import Menu from './components/menu';
import ItemGrid from './components/itemGrid';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/ItemGrid" element={<ItemGrid />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
