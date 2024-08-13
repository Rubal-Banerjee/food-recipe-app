import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Favourite from './pages/Favourite'
import Navbar from './components/Navbar'
import { Loader } from './components/Loader'
import { useAppSelector } from './redux/hooks'
import { Toaster } from 'react-hot-toast'

function App() {
  const isLoading = useAppSelector((state) => (state.loadingReducer));

  return (
    <BrowserRouter>
    <div className='min-h-screen bg-white text-gray-600 text-lg'>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/recipe/:id' element={<Recipe />}/>
      <Route path='/favourite' element={<Favourite />}/>
    </Routes>
    </div>
    <Toaster position="bottom-center" reverseOrder={false} />
    {isLoading && <Loader />}
    </BrowserRouter>
  )
}

export default App