import Link from "next/link";

let about = () => {
  const font_size = {fontSize: 20};
  return (
    <div>
      <div>
        <Link href="/">
          <button style={font_size}>Home</button>
        </Link>
      </div>

      <div>
        <p>This is the about page</p>
      </div>
    </div>
  );
};

export default about;
