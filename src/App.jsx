import './App.css';

import Header from './components/Header/Header';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';

import { Routes, Route } from 'react-router-dom';

// function App () { return ( <div></div> ) } - компонентом

// jsx - js + html

// react fragment = <></>

const App = () => {

  const date = new Date()

  // const props = {} который передается через любой компонент, то ест идет передача данных
  // с одного компонента в другой

  // rsc - Для создания стартовой разметки JSX

  return (
    <div className='App'>
      <Header />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>

    </div>
  );
}

export default App;
// оно позволяет делится данным компонентом