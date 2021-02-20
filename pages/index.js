import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import getSortedPostsData from "../lib/posts";

export async function getStaticProps() {
  // ビルド前にレンダリング(bind の役割)
  const allPostsData = getSortedPostsData();
  return {
    props: {allPostsData},
  };
}

export default function HomePage({allPostsData}) {
  let sentence = allPostsData.map(({id, meta, content}) => content);
  return (
    // この部分が背景
    <div className="wrap">
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content_index">
        <div>
          <Header />
        </div>
        <div>
          <Markdown children={sentence[0]} />
        </div>
      </div>
    </div>
  );
}
