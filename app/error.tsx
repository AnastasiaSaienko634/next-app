"use client";

import { FaExclamationTriangle } from "react-icons/fa";
import css from "./error.module.css";

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <div className={css.errorBox}>
      <FaExclamationTriangle className={css.icon} />
      <h2 className={css.title}>Loading Error</h2>
      <p className={css.text}>{error.message}</p>
      <button onClick={reset} className={css.button}>
        Try again
      </button>
    </div>
  );
};

export default Error;
