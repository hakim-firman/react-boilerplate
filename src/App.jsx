import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from './pages/NotFound';
import { Login } from './pages/Auth/Login';
import WelcomeModal from './components/WelcomeModal';
import { useAppContext } from './context/AppContext';

function App() {
  const notify = () => toast('Here is your toast.');
  const {isDialogOpen, setIsDialogOpen} = useAppContext();
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
            path="/login" 
            element={
              <Login/>
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
      <WelcomeModal isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
            
    </>
  )
}

export default App
