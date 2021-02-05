import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  fontSize: 20,
};

const Header = () => (
  <div>
    <Link href="/">
      <button style={linkStyle}>Home</button>
    </Link>
    <Link href="/about">
      <button style={linkStyle}>About</button>
    </Link>
  </div>
);

export default Header;
