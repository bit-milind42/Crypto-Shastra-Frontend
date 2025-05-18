import { useState } from 'react'
import './App.css'
import Navbar from './pages/navbar/Navbar'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './pages/portfolio/portfolio'
import Activity from './pages/activity/Activity'
// import Wallet from './pages/wallet/Wallet'
import Wallet from './pages/wallet/Wallet'
import Withdrawal from './pages/withdrawal/Withdrawal'
import PaymentDetails from './pages/payment_details/PaymentDetails'
import NotFound from './pages/notfound/NotFound'
import Watchlist from './pages/watchlist/Watchlist'
import StockDetails from './pages/stock details/StockDetails'
import Profile from './pages/profile/Profile'
import SearchCoin from './pages/search/SearchCoin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/portfolio" element={<Portfolio />} /> 
        <Route path="/activity" element={<Activity />} />
        <Route path="/wallet" element={<Wallet />} /> 
        <Route path="/withdrawal" element={<Withdrawal />} /> 
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/*" element={<NotFound />} /> 
        <Route path='/market/:id' element={<StockDetails />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchCoin />} />

      </Routes>
      {/* <Home/> */}
    </>
  )
}

export default App
