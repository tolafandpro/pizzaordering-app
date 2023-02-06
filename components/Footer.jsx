import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Logo from '../subComponents/Logo';

const Footer = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <div className={styles.card}>
                            <Image src="/images/FooterLogo.png" className={styles.motto} width="150px" height="150px"/>
                        <h1>
                            We're the best
                        </h1>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.card}>
                    <h1 className={styles.title}>Usefull Links</h1>
                        <p className={styles.text}>
                            Pizza
                            <br/>Burger
                            <br/>Fries
                            <br/>Drinks
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.card}>
                    <h1 className={styles.title}>Find Our Loaction</h1>
                        <p className={styles.text}>
                            265 Beckly Avenu.
                            <br/> NorthYork, 5762
                            <br/>(201) 475 -1010
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Working Hours</h1>
                        <p className={styles.text}>
                            MONDAYS
                            <br/>9:00am - 10:00pm
                        </p>
                        <p className={styles.text}>
                            SATURDAY - SUNDAY
                            <br/> 10:00am - 10:00pm
                        </p>
                    </div>
                </div>
            </div>
            
            <div className={styles.copy}>
                <p>Copyright © 2022 OD-Pizzaro Bakery. All rights reserved.</p>
            </div>
        </div>
     );
}
 
export default Footer;