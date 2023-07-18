import Navbar from './components/Navbar.js';
import CartContainer from './components/CartContainer.js';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './feature/cart/cartSlice.js';
import { useEffect } from 'react';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
