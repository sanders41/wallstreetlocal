import styles from "./Source.module.css";

import SourceIcon from "@/public/static/contact.svg";

const Source = (props) => {
  const color = props.color || "dark";
  const link = props.link || null;
  const width = props.width || "20px";
  const marginLeft = props.marginLeft || "";
  return (
    <button
      className={[
        styles["source-button"],
        color === "light" ? styles["source-light"] : "",
        props.className || "",
      ].join(" ")}
      style={{ width, marginLeft }}
      onClick={() => window.open(link, "_blank")}
    >
      <SourceIcon className={styles["source-svg"]} />
    </button>
  );
};

export default Source;
