import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  // This values are the props in the UI
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://loaclhost:3000/api/orders", data);
      res.status === 201 && router.push("/orders/" + res.data._id);
      dispatch(reset());
    } catch (err) {
      console.log(err);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              // Your code here after capture the order
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.tables}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product.id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.extra}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}, </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>${product.price}</span>
                </td>
                <td>
                  <span className={styles.qty}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    ${product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          {/* <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/pizza6.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Neapolitan</span>
            </td>
            <td>
              <span className={styles.extra}>Spicy sauce, Extra Cheese</span>
            </td>
            <td>
              <span className={styles.price}>$23</span>
            </td>
            <td>
              <span className={styles.qty}>2</span>
            </td>
            <td>
              <span className={styles.total}>$46.99</span>
            </td>
          </tr> */}
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.rightWrapper}>
          <h2 className={styles.title}>Cart Total</h2>
          <div>
            <b className={styles.priceListText}>Subtotal:</b> ${cart.total}
          </div>
          <div>
            <b className={styles.priceListText}>Discount:</b> $0
          </div>
          <div>
            <b className={styles.priceListText}>Total:</b> ${cart.total}
          </div>
        </div>
        {open ? (
          <div className={styles.paypalWrapper}>
            <button className={styles.payButton}>Cash on Delivery</button>
            <PayPalScriptProvider
              options={{
                "client-id":
                  "Ac8fRs7f3K1-GkeXWu1dhRsUJF0BGNuEtNKSqQ5fnFA9_TRiqdJSvXFUp9JQRWhEr7mmKaVE5uw3lrYN",
                components: "buttons",
                currency: "USD",
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
          </div>
        ) : (
          <button onClick={() => setOpen(true)} className={styles.button}>
            Checkout Now!
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
