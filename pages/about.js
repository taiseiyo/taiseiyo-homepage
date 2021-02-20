import Link from "next/link";
import getSortedPostsData from "../lib/posts";
import Markdown from "react-markdown";
import Header from "../components/Header";

export async function getStaticProps() {
  // ビルド前にレンダリング(bind の役割)
  const allPostsData = getSortedPostsData();
  return {
    props: {allPostsData},
  };
}

let about = ({allPostsData}) => {
  const font_size = {fontSize: 20};
  let sentence = allPostsData.map(({id, meta, content}) => content);

  return (
    <div className="wrap">
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content_about">
        <div className="header">
          <Header />
        </div>
        <div>
          <Markdown children={sentence[1]} />
        </div>
      </div>
    </div>
  );
};

export default about;
