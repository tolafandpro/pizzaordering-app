import styles from "../styles/Slider.module.css";
import Image from "next/image";
import { useState } from "react";

const Slider = () => {
    const [ slider, setSlider] = useState(0);
     
    const handleArrow = (direction) => {
        if (direction === "left") {
            setSlider(slider !== 0 ? slider -1: 3)
        }else {
            setSlider(slider !== 3 ? slider +1: 0);
        }
        console.log(slider);
    }
    const images = [
        "/images/pepperoni-pizza.jpg",
        "/images/vegetables.jpg",
        "/images/drinkss-slider.jpg",
        "/images/ODaround-burgers.jpeg"
    ];
    return ( 
         <div className={styles.container}>
            <div className={styles.arrowContainer} onClick={()=>handleArrow("left")} style={{left:20}}>
                <Image src="/images/arrowleft.png" alt="leftarrow" layout='fill' objectFit="contain"/>
            </div>
                <div className={styles.wrapper} style={{transform:`translateX(${-100*slider}vw)`}}>
                    {images.map((image, i) => (
                        <div className={styles.imgContainer} key={i}>
                            <Image src={image} alt="slides" layout="fill" objectFit="cover"/>
                         </div>
                        )
                    )} 
                </div>
             <div className={styles.arrowContainer} style={{right:10}} onClick={()=>handleArrow("right")}>
                <Image src="/images/arrowright.png" alt="rightarrow" layout='fill' objectFit="contain"/>
             </div>
        </div>
     );
}
 
export default Slider;