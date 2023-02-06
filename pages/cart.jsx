import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
    return ( 
        <div className={styles.container}>
                <div className={styles.left}>
                    <table className={styles.tables}>
                        {/* <tr className={styles.trTitle}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr> */}
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image src="/images/pizza5.png" alt="" layout="fill" objectFit="contain"/>
                                </div>
                            </td>
                            <td><span className={styles.name}>Neapolitan</span></td>
                            <td><span className={styles.extra}>Spicy sauce, Extra Cheese</span></td>
                            <td><span className={styles.price}>$23</span></td>
                            <td><span className={styles.qty}>2</span></td>
                            <td><span className={styles.total}>$46.99</span></td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image src="/images/pizza6.png" alt="" layout="fill" objectFit="contain"/>
                                </div>
                            </td>
                            <td><span className={styles.name}>Neapolitan</span></td>
                            <td><span className={styles.extra}>Spicy sauce, Extra Cheese</span></td>
                            <td><span className={styles.price}>$23</span></td>
                            <td><span className={styles.qty}>2</span></td>
                            <td><span className={styles.total}>$46.99</span></td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image src="/images/pizza4.png" alt="" layout="fill" objectFit="contain"/>
                                </div>
                            </td>
                            <td><span className={styles.name}>Neapolitan</span></td>
                            <td><span className={styles.extra}>Spicy sauce, Extra Cheese</span></td>
                            <td><span className={styles.price}>$23</span></td>
                            <td><span className={styles.qty}>2</span></td>
                            <td><span className={styles.total}>$46.99</span></td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image src="/images/pizza5.png" alt="" layout="fill" objectFit="contain"/>
                                </div>
                            </td>
                            <td><span className={styles.name}>Neapolitan</span></td>
                            <td><span className={styles.extra}>Spicy sauce, Extra Cheese</span></td>
                            <td><span className={styles.price}>$23</span></td>
                            <td><span className={styles.qty}>2</span></td>
                            <td><span className={styles.total}>$46.99</span></td>
                        </tr>
                    </table>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightWrapper}>
                        <h2 className={styles.title}>Cart Total</h2>
                        <div><b className={styles.priceListText}>Subtotal:</b> $46</div>
                        <div><b className={styles.priceListText}>Discount:</b> $0</div>
                        <div><b className={styles.priceListText}>Total:</b> $46</div>
                    </div>
                    <button className={styles.button}>Checkout Now!</button>
                </div>

        </div>
     )
}
 
export default Cart;