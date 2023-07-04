import './assets/styles/Main.scss'
import { BrowserRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Pages from './pages/Pages';


export default function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Pages/>
      <Footer/>
    </BrowserRouter>
  )
}