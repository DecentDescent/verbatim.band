import Head from "../components/Head";
import styles from "./Page.module.scss";
export default function Index() {
  return (
    <>
      <Head />
      <div className={styles["logo"]}>
        <svg viewBox="0 0 249 321">
          <linearGradient
            id="a"
            x1="80.003014%"
            x2="34.698774%"
            y1=".137247%"
            y2="50%"
          >
            <stop offset="0" />
            <stop offset="1" stopColor="#262626" />
          </linearGradient>
          <path
            d="m260.899084 438.685891 119.706269-313.837281c1.320289-2.644697-.880193-4.84861-3.520773-4.84861h-240.732827c-3.080676 0-5.281159 2.203913-3.96087 4.84861l120.586462 313.837281c1.32029 3.085479 6.601449 3.085479 7.921739 0zm-4.179872-140.685891-44.719212-123h89z"
            fill="url(#a)"
            transform="translate(-132 -120)"
          />
        </svg>
      </div>
    </>
  );
}
