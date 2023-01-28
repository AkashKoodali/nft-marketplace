import React from "react";
import Link from "next/link";

import Styles from "./Discover.module.css";

const Discover = () => {
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-Details",
    },
    {
      name: "Account settings",
      link: "account-settings",
    },
    {
      name: "Connect wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  return (
    <div>
      {discover.map((el, i) => (
        <div key={i} className={Styles.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
