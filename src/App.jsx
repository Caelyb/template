import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemGrid from './components/productGrid/itemGrid';
import Menu from './components/menu';
import Phonebook from './components/phonebook/phonebook';
import Counter from './components/counter/counter';
import BasicComponent from './components/basicComponent/basicComponent';

function App() {
  const items = [{
    name: 'item1',
    start_date: '01/06/2023',
    credits: '2000',
    available: true,
    imgUrl: 'https://media.istockphoto.com/id/1327919661/photo/world-earth-day-concept-green-energy-renewable-and-sustainable-resources-environmental-and.jpg?s=612x612&w=0&k=20&c=6PvLRMFPI65ATEs-XWPJ_UOtkmSKoONOD4h7Lohq850=',
    id: '1',
  },
  {
    name: 'item2',
    start_date: '07/08/2023',
    credits: '3000',
    available: true,
    imgUrl: 'https://media.istockphoto.com/id/1327919661/photo/world-earth-day-concept-green-energy-renewable-and-sustainable-resources-environmental-and.jpg?s=612x612&w=0&k=20&c=6PvLRMFPI65ATEs-XWPJ_UOtkmSKoONOD4h7Lohq850=',
    id: '2',
  },
  {
    name: 'item3',
    start_date: '14/06/2023',
    credits: '1000',
    available: true,
    imgUrl: 'https://media.istockphoto.com/id/1327919661/photo/world-earth-day-concept-green-energy-renewable-and-sustainable-resources-environmental-and.jpg?s=612x612&w=0&k=20&c=6PvLRMFPI65ATEs-XWPJ_UOtkmSKoONOD4h7Lohq850=',
    id: '3',
  },
  {
    name: 'item4',
    start_date: '27/06/2023',
    credits: '2500',
    available: true,
    imgUrl: 'https://media.istockphoto.com/id/1327919661/photo/world-earth-day-concept-green-energy-renewable-and-sustainable-resources-environmental-and.jpg?s=612x612&w=0&k=20&c=6PvLRMFPI65ATEs-XWPJ_UOtkmSKoONOD4h7Lohq850=',
    id: '4',
  },
  {
    name: 'item5',
    start_date: '01/06/2023',
    credits: '2000',
    available: true,
    imgUrl: 'https://media.istockphoto.com/id/1327919661/photo/world-earth-day-concept-green-energy-renewable-and-sustainable-resources-environmental-and.jpg?s=612x612&w=0&k=20&c=6PvLRMFPI65ATEs-XWPJ_UOtkmSKoONOD4h7Lohq850=',
    id: '5',
  },
  {
    name: 'item6',
    start_date: '07/08/2023',
    credits: '3000',
    available: true,
    imgUrl: 'https://media.istockphoto.com/id/1327919661/photo/world-earth-day-concept-green-energy-renewable-and-sustainable-resources-environmental-and.jpg?s=612x612&w=0&k=20&c=6PvLRMFPI65ATEs-XWPJ_UOtkmSKoONOD4h7Lohq850=',
    id: '6',
  },
  {
    name: 'item7',
    start_date: '14/06/2023',
    credits: '1000',
    available: true,
    imgUrl: 'https://media.istockphoto.com/id/1327919661/photo/world-earth-day-concept-green-energy-renewable-and-sustainable-resources-environmental-and.jpg?s=612x612&w=0&k=20&c=6PvLRMFPI65ATEs-XWPJ_UOtkmSKoONOD4h7Lohq850=',
    id: '7',
  },
  {
    name: 'item8',
    start_date: '27/06/2023',
    credits: '2500',
    available: true,
    imgUrl: 'https://media.istockphoto.com/id/1327919661/photo/world-earth-day-concept-green-energy-renewable-and-sustainable-resources-environmental-and.jpg?s=612x612&w=0&k=20&c=6PvLRMFPI65ATEs-XWPJ_UOtkmSKoONOD4h7Lohq850=',
    id: '8',
  },
  ];

  // eslint-disable-next-line no-lone-blocks
  {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/ItemGrid" element={<ItemGrid items={items} />} />
          <Route path="/Phonebook" element={<Phonebook />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Component" element={<BasicComponent />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
