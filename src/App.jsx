import {Routes, Route, Link} from "react-router-dom";
import {
  About,
  AddProduct,
  Auth,
  Basket,
  Delivery,
  Main,
  Products,
  Profile,
  SingleProduct
} from "./pages";

function App() {
  return <>
  <ul className="menu">
      <li>
        <Link to="/">Главсная страница</Link>
      </li>
      <li>
        <Link to="/products">Каталог</Link>
        <ul>
          <li>
            <Link to="/product/category/delicious">Лакомства</Link>
          </li>
          <li>
            <Link to="/product/category/toys">Игрушки</Link>
          </li>
          <li>
            <Link to="/products/favorites">Любимые товары</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/product/ball">Мячик для собак</Link>
      </li>
    <li>
      <Link to="/product/add">Добавить товар</Link>
    </li>
    <li>
      <Link to="/basket">Корзина</Link>
    </li>
    <li>
      <Link to="/profile">Профиль</Link>
    </li>
    <li>
      <Link to="/auth">Войти</Link>
    </li>
    <li>
      <Link to="/delivery">Доставка</Link>
    </li>
    <li>
      <Link to="/about">О нас</Link>
    </li>
  </ul>
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/products/:name" element={<Products isCat={true}/>}/>
    <Route path="/products/favorites" element={<Products isFav={true}/>}/>
    <Route path="/product/:id" element={<SingleProduct/>}/>
    <Route path="/product/add" element={<AddProduct/>}/>
    <Route path="/basket" element={<Basket/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/auth" element={<Auth/>}/>
    <Route path="/delivery" element={<Delivery/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  </>
}

export default App;
