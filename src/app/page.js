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
            alt="Chess Master Crime by Bernard Delobel"
            width="0"
            height="0"
            priority={true}
            sizes="100vw"
            style={{ width: "350px", height: "auto" }}
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
