/* Consfiguación de rutas de la aplicacion */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Cursos from './pages/Cursos/Cursos';
import Usuarios from './pages/usuarios/Usuarios';
import MasInformacion from './pages/masinformacion/masinformacion';
import Login from './components/Login/Login';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#39A900', // Verde institucional
    },
    secondary: {
      main: '#007832', //Color secundario
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Cursos" element={<Cursos />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/masinformacion" element={<MasInformacion />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


/* 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
