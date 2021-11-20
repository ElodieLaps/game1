import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <ul>
        <li>
          <Link href="/characters">Les personnages</Link>
        </li>
      </ul>
    </div>

  );
};

export default Home;
