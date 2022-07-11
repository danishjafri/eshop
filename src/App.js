import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header/Header'
import Checkout from './pages/checkout/Checkout';
import { Home } from './pages/home/Home'

function App() {
  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
    </div>
  );
}

export default App;
