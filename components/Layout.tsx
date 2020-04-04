import Link from 'next/link';

export default ({ children }) => {
  return (
    <div>
      <nav>
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
          <li>
            <Link href="/posts/1">
              <a>Single Post</a>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <a>Categories</a>
            </Link>
          </li>
          <li>
            <Link href="/create">
              <a>Create</a>
            </Link>
          </li>
          <li>
            <Link href="/edit/1">
              <a>Edit</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};
