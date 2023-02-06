import Image from "next/image";
import ProductCard from "./productCard";
import styles from "../styles/ProductList.module.css";

const ProductList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best In Town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas
        perferendis, corporis voluptates voluptatem odio placeat voluptatum
        dolores vero harum consequatur cum, distinctio tempore debitis maiores
        vel dolor quisquam ducimus!
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
