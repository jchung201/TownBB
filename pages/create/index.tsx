import Link from 'next/link';
const CreatePost = () => (
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
      <Link href="/posts/1">
        <a>Edit</a>
      </Link>
    </li>
    <li>
      <h1>CreatePost</h1>
    </li>
  </ul>
);

export default CreatePost;
