import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
// Import the following components
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { getUser } from '../../utilities/users-service';
import LoginForm from "../../components/LoginForm/LoginForm";

export default function App() {
  const [user,setUser] = useState(getUser());


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser}/>
            <Routes>
              <Route path ="/orders/new" element={<NewOrderPage />}/>
              <Route path ="/orders" element={<OrderHistoryPage />}/>
            </Routes>
          </>
        :
        <>
        <AuthPage setUser={setUser}/>
        <LoginForm setUser={setUser}/>
        </>
      }
    </main>
  );
}
