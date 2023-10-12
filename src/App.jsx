import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './pages/root/Root'
import Home from './pages/home/Home'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root /> }>
      <Route index element={ <Home /> } />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={ route } />
  )
}