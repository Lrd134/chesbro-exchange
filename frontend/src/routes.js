import { Route } from "react-router-dom";
import Home from './root/containers/Home';
import UserForm from './users/components/UserForm';
import UsersContainer from './users/containers/UsersContainer';
import UserContainer from './users/containers/UserContainer';
// import BalancesContainer from './balances/containers/BalancesContainer';
import BalanceContainer from './balances/containers/BalanceContainer';
import LoginForm from './login/components/LoginForm';
import Logout from './login/components/Logout';
import Exchange from "./exchange/containers/Exchange";
import OrderContainer from "./orders/containers/OrderContainer";
const myRoutes = () => {
  return (
    <Route path="/" element={<Home />} >
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
        <Route path="signup" element={<UserForm text="signup"/>} />
        <Route path="users" element={<UsersContainer />} />
        <Route path="exchange" element={<Exchange />} />
        <Route path="exchange/:ticker" element={<OrderContainer />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="logout" element={<Logout/>}/>
        <Route path="me" element={<UserContainer />}/>
        <Route path="/deposit" element={<BalanceContainer />}/>
    </Route>
  )
}

export default myRoutes;