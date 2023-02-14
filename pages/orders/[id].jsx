import styles from "../../styles/orders.module.css";
import Image from "next/image";
import axios from "axios";
const Order = ({ orders }) => {
  const status = orders.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.inCompleted;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            {/* <tbody></tbody> */}
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>

            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>123456677{orders._id}</span>
              </td>
              <td>
                <span className={styles.cusName}>{orders.customer}</span>
              </td>
              <td>
                <span className={styles.address}>{orders.address}</span>
              </td>
              <td>
                <span className={styles.total}>${orders.total}</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image
              src="/images/paymentImg.png"
              width={50}
              height={50}
              alt="paymentimg"
            />
            <span>Payment</span>
            <div className={styles.checkIcon}>
              <Image
                className={styles.chkImg}
                src="/images/checkImg.png"
                width={40}
                height={40}
                alt="checkimg"
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image
              src="/images/preparing.png"
              width={50}
              height={50}
              alt="paymentimg"
            />
            <span>Preparing</span>
            <div className={styles.checkIcon}>
              <Image
                className={styles.chkImg}
                src="/images/checkImg.png"
                width={40}
                height={40}
                alt="checkimg"
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image
              src="/images/intransit.png"
              width={50}
              height={50}
              alt="paymentimg"
            />
            <span>In Transit</span>
            <div className={styles.checkIcon}>
              <Image
                className={styles.chkImg}
                src="/images/checkImg.png"
                width={40}
                height={40}
                alt="checkimg"
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image
              src="/images/pizzacheck.png"
              width={50}
              height={50}
              alt="paymentimg"
            />
            <span>Delivered</span>
            <div className={styles.checkIcon}>
              <Image
                className={styles.chkImg}
                src="/images/checkImg.png"
                width={40}
                height={40}
                alt="checkimg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightWrapper}>
          <h2 className={styles.title}>Cart Total</h2>
          <div>
            <b className={styles.priceListText}>Subtotal:</b> ${orders.total}
          </div>
          <div>
            <b className={styles.priceListText}>Discount:</b> $0
          </div>
          <div>
            <b className={styles.priceListText}>Total:</b> $46{orders.total}
          </div>
        </div>
        <button disabled className={styles.button}>
          Paid
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { orders: res.data },
  };
};

export default Order;
