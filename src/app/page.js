import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="cell">
          <h1>Home</h1>
          <Image
            src="/assets/images/the_king.png"
            alt=""
            width={350}
            height={250}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates est atque perspiciatis dicta maxime ad similique mollitia
            eos quam eaque animi provident facere nam, cupiditate libero,
            delectus, minima sunt.
          </p>
        </div>
      </div>
    </div>
  );
}
