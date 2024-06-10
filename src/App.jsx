
import { ToastContainer } from 'react-toastify'
import './App.css'
import Layout from './components/Layout'
import Cart from './components/cart/Cart'
import Product from './components/product/Product'
import { Provider } from 'react-redux'
import store from './store/store'


function App() {

  return (
    <Provider store={store}>
      <div className='flex justify-center'>
        <Layout>
          <div className='grid grid-cols-2'>
            <Product />
            <Cart />
          </div>
        </Layout>
        <ToastContainer />
      </div>
    </Provider>
  )
}

export default App
