import { useSelector } from "react-redux";
import { getCartWithWines } from "../store/cart/selector";

export default function CartPage() {
  const cart = useSelector(getCartWithWines);
  console.log("my cart", cart);
  return (
    <div>
      <h3>Checkout🍷</h3>
      <p>
        {cart.map((item) => {
          return (
            <div>
              <ul>
                <li>
                  {item.allWines.name}
                  <img
                    src={item.allWines.picture}
                    alt=""
                    style={{ maxWidth: "100px" }}
                  />
                  Amount: {item.amount}
                </li>
              </ul>
            </div>
          );
        })}
      </p>
    </div>
  );
}
