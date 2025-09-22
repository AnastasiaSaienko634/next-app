import React from "react";
import { BarLoader } from "react-spinners";
import css from "./loading.module.css";

const Loading = () => {
  return (
    <div className={css.wrapper}>
      <BarLoader color="#a44ce9" height={6} width={200} />
    </div>
  );
};

export default Loading;
