import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import WishlistContainer from './Components/Wishlist Container/WishlistContainer';
import WishlistContainerCompare from './Components/Wishlist Container/WishlistContainerCompare';
import WishList from "./Components/WishList/WishList";
import Blog from './Layout/Blog/Blog';
import BlogDetails from './Layout/Blog/BlogDetails';
import Contacts from './Layout/Contacts/Contacts';
import Home from './Layout/Home/Home';
import Home2 from './Layout/Home/Home2';
import Home3 from './Layout/Home/Home3';
import Home4 from './Layout/Home/Home4';
import Home5 from './Layout/Home/Home5';
import Checkout from './Layout/Pages/Checkout/Checkout';
import Products from './Layout/Products/Products';
import Shop from './Layout/Shop/Shop';
import ShopCol3 from './Layout/Shop/ShopCol3';
import ShopDetails from './Layout/Shop/ShopDetails';
import ShopList from './Layout/Shop/ShopList';
import SidebarLeft from './Layout/Shop/SidebarLeft';

function App() {
  return (
    <Router>
      <div className="App">
        <WishlistContainer />
        <WishlistContainerCompare />
      </div>

      <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>

            <Route path="/blog" exact>
              <Blog />
            </Route>

            <Route path="/shop" exact>
                <Shop />
            </Route>
            
            <Route path="/shop/left-sidebar" exact>
                <SidebarLeft />
            </Route>

            <Route path="/shop/sidebar-right" exact>
                <ShopCol3 />
            </Route>

            <Route path="/shop/list" exact>
                <ShopList />
            </Route>

            <Route path="/products" exact>
                <Products />
            </Route>

            <Route path="/shop/col-3" exact>
                <ShopCol3 />
            </Route>

            <Route path="/index-2" exact>
              <Home2 />
            </Route>

            <Route path="/index-3" exact>
              <Home3 />
            </Route>

            <Route path="/index-4" exact>
              <Home4 />
            </Route>

            <Route path="/index-5" exact>
              <Home5 />
            </Route>

            <Route path="/contact" exact>
              <Contacts />
            </Route>

            <Route path="/checkout" exact>
              <Checkout />
            </Route>


            <Route path="/cart" exact>
              <Cart />
            </Route>

            <Route path="/login" exact>
              <Login />
            </Route>

            <Route path="/register" exact>
              <Register />
            </Route>

            <Route path="/wishlist" exact>
              <WishList />
            </Route>


            <Route path="/shop/upcoming/:shopid" exact>
                <ShopDetails />
            </Route>

            <Route path="/blog/:blogID" exact>
                <BlogDetails />
            </Route>

            <Route path="/:cc" exact>
              <Header />
            </Route>

            <Route path="/shop/:shopid" exact>
                <ShopDetails />
            </Route>
      </Switch>
    </Router>
      
  );
}

export default App;
