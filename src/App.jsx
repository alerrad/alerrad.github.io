import './assets/styles/Main.scss'
import { HashRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Pages from './pages/Pages';


export default function App() {
  return (
    <HashRouter>
      <Nav/>
      <Pages/>
      <Footer/>
    </HashRouter>
  )
}