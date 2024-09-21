// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },

])

function App() {
  // const { data, loading, error } = useMyFetch('https://fakestoreapi.com/products')
  // useEffect(() => {
  //   if (data) {
  //     console.table({ time: Date.now().toLocaleString(), data })
  //   }
  //   if (loading) {
  //     console.table({ time: Date.now().toLocaleString(), loading })
  //   }
  //   if (error) {
  //     console.table({ time: Date.now().toLocaleString(), error })
  //   }
  // }, [data, loading, error])
  return <RouterProvider router={router} />
}

export default App
