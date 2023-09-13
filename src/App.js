import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import About from './about';
import Contact from './contact';
import Param from './parms';
import Search from './search';
import Error from './error';

function App() {

  const Name = () => {
    return(
      <>
        <h1>My name is Dhruv Parmar</h1>
      </>
    )
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<About name={'About'} />} />
        <Route path='/contact' element={<Contact name={'Contact'} />} />
        <Route path='/contact/name' Component={Name} />
        <Route path='/param/:fname' Component={Param} />
        <Route path='/Search' Component={Search} />
        <Route path='*' Component={Error} />
        {/* <Route path='*' element={<Navigate to="/" replace />} /> */}
        {/* <Route path='/' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/contact/name' Component={Name} />
        <Route path='*' Component={Error} /> */}
      </Routes>
      {/* <About />
      <Contact /> */}
    </>
  );
}

export default App;
