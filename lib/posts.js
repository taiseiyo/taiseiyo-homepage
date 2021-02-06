import fs from "fs";
import path from "path";
import matter from "gray-matter";
// let path = require("path");
// let fs = require("fs");
// let matter = require("gray-matter");

const postsDirectory = path.join(process.cwd(), "./lib/docs");

let getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const {data, content} = matter(fileContents);
    return {id, meta: data, content};
  });
  return allPostsData;
};

export default getSortedPostsData;
