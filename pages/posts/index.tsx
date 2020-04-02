import Link from 'next/link';
const Posts = () => (
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
    <li>Posts</li>
  </ul>
);

export default Posts;
