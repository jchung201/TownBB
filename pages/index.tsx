import Link from 'next/link';
const Home = () => (
  <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </li>
    <li>Home</li>
  </ul>
);

export default Home;
