import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from './pages/NotFound';
function App() {
  const notify = () => toast('Here is your toast.');
  return (
    <>
      <Toaster 
        position="top-right"
          toastOptions={{ 
          className: ' ',
          style: {
            border: '2px solid black',
            padding: '10px',
            borderRadius:'0px',
            color: 'black',

            boxShadow: '4px 4px 0 0 rgb(0, 0, 0)'
          },
        }} 
      />  
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home notify={notify}/>
            } 
          />
          <Route
            path='*'
            element={
              <NotFound/>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
