import styles from "../styles/Navbar.module.css";
import Logo from "../subComponents/Logo";
import Image from "next/image";
import { Pizza, Burger, Fries, Drink } from "../subComponents/MenuSvgs";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.cartqty);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <div className={styles.logo}>
            <Image
              className={styles.image}
              src="/images/OdPizzaLogo.png"
              width="75"
              height="75"
            />
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <Link href={"/"}>
              <li className={styles.listItem}>Home</li>
            </Link>
            <li className={styles.listItem}>Menu</li>
            <li className={styles.listItem}>News</li>
            <li className={styles.listItem}>Store Loocator</li>
          </ul>
        </div>
        <Link href="/cart" passHref>
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image
                src="/images/kisspng-shopping-cart.png"
                width="35px"
                height="35px"
                className={styles.cartImg}
                alt=""
              />
              <div className={styles.spanNum}>{quantity}</div>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.wrapperBottom}>
        <div className={styles.itemBottom}>
          <ul className={styles.listBottom}>
            <li className={styles.listItemBottom}>
              <Burger />
              Burger
            </li>
            <li className={styles.listItemBottom}>
              <Pizza />
              Pizza
            </li>
            <li className={styles.listItemBottom}>
              <Fries />
              Fries
            </li>
            <li className={styles.listItemBottom}>
              <Drink />
              Drink
            </li>
          </ul>
        </div>
        {/* <div className={styles.menuItem2}>Menu item</div> */}
      </div>
    </div>
  );
};

export default Navbar;
