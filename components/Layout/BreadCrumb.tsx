import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LinkB } from '../Common/Links';
import { Breadcrumbs, Typography } from '@material-ui/core';

const BreadCrumb = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

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
      {router.pathname.startsWith('/categories') && (
        <Typography color="textPrimary">
          {String(id)
            .split('_')
            .join(' ')}
        </Typography>
      )}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
