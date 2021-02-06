import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import getSortedPostsData from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function HomePage({allPostsData}) {
  // console.log(allPostsData[0]["content"]);
  allPostsData.map(({id, meta, content}) => console.log(content));

  return (
    <div>
      <div>
        <Header />
        <p>Hello Next.js</p>
      </div>

      <div>
        <section>{allPostsData.map(({id, meta, content}) => content)}</section>
      </div>
    </div>
  );
}
