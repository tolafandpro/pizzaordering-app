import styles from "../../styles/product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const Product = ({ pizza }) => {
  const [size, setSize] = useState(0);

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
    }
  };

  //    const pizza = {
  //         id: 1,
  //         img: "/images/pizza2.png",
  //         name: "CAMPAGNOLA",
  //         price: [19.9, 23.9, 27.9],
  //         desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt accusamus, esse consequuntur beatae voluptates architecto quidem, saepe ea nulla quam nihil rem dignissimos ad, laboriosam at suscipit impedit consequatur porro."
  //     }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            width="500"
            height="500"
            // layout="fill"
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.select}>Select a size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image
              src="/images/pizzaicon.png"
              alt="pizza-icon-small"
              layout="fill"
            />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image
              src="/images/pizzaicon.png"
              alt="pizza-icon-medium"
              layout="fill"
            />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image
              src="/images/pizzaicon.png"
              alt="pizza-icon-large"
              layout="fill"
            />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional Ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraIngredient.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="extraCheese">{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );

  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
