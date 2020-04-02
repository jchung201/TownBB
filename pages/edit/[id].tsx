import Link from 'next/link';
import { useRouter } from 'next/router';
const EditPost = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
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
        <div>Edit Post id: {id}</div>
      </li>
    </ul>
  );
};

export default EditPost;
