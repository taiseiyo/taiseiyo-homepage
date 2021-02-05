import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import home from "../docs/home.md";

// sudo npm install --save style-loader css-loader

export default function HomePage() {
  return (
    <div>
      <Header />
      <p>Hello Next.js</p>
      <Markdown children={"../docs/home.md"} />
    </div>
  );
}
