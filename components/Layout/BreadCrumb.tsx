import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LinkB } from '../Common/Links';
import { Breadcrumbs, Typography } from '@material-ui/core';

const BreadCrumb = () => {
  const router = useRouter();
  const {
    query: { slug, id },
  } = router;
  let bcText = '';
  let breadCrumb;
  if (router.pathname.startsWith('/categories/')) {
    if (slug.length >= 1) {
      bcText = String(slug[0])
        .split('_')
        .join(' ');
    }
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="/">
        <LinkB>
          <Typography color="textPrimary">Home</Typography>
        </LinkB>
      </Link>
      {router.pathname.startsWith('/create') && (
        <Typography color="textPrimary">Create Posting</Typography>
      )}
      {router.pathname.startsWith('/edit') && (
        <Typography color="textPrimary">Edit Post: {String(id)}</Typography>
      )}
      {router.pathname.startsWith('/posts') && (
        <Typography color="textPrimary">{`Post: ${String(id)}`}</Typography>
      )}
      {router.pathname.startsWith('/categories') &&
        (slug.length > 1 ? (
          <Link href={`/categories/${slug[0]}`}>
            <LinkB>{slug[0].split('_').join(' ')}</LinkB>
          </Link>
        ) : (
          <Typography color="textPrimary">
            {slug[0].split('_').join(' ')}
          </Typography>
        ))}
      {router.pathname.startsWith('/categories') && slug.length > 1 && (
        <Typography color="textPrimary">
          {slug[1].split('_').join(' ')}
        </Typography>
      )}
    </Breadcrumbs>
  );
};

// {
//   !slug && <Typography color="textPrimary">{bcText}</Typography>;
// }
// {
//   slug && slug.length > 0 && (

//   );
// }
// {
//   slug && slug.length > 1 && (
//     <Typography color="textPrimary">{slug[1]}</Typography>
//   );
// }

export default BreadCrumb;
