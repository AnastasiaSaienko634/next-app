import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <p>This page was not found.</p>
      <Link href="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
