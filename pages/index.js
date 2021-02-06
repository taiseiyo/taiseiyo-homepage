import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import getSortedPostsData from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function HomePage({allPostsData}) {
  return (
    <div>
      <Header />
      <p>Hello Next.js</p>
    </div>
  );
}
