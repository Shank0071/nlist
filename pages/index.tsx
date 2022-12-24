import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`${styles.container} container`}>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odit
        ab odio explicabo accusantium iure repellendus exercitationem a et.
        Magni architecto porro earum deserunt? Quas nobis sunt vitae itaque
        ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quam vero
        tenetur nostrum porro architecto necessitatibus quisquam sequi eveniet
        unde minus dicta ea odit maxime magni similique quaerat dolor iure.
      </p>
      <div className={`${styles.container} ${styles.nlink}`}>
        <Link href="/ninjas" className={styles.btn}>
          Ninja List
        </Link>
      </div>
  
    </div>
  );
}
