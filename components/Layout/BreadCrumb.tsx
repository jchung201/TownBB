import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LinkB } from '../Common/Links';
import { Breadcrumbs, Typography, Fab } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const BreadCrumb = () => {
  const router = useRouter();
  const {
    query: { id, slug },
  } = router;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {(router.pathname.startsWith('/create') ||
        router.pathname.startsWith('/edit') ||
        router.pathname.startsWith('/posts') ||
        router.pathname.startsWith('/categories') ||
        router.pathname.startsWith('/unsub')) && (
        <Fab
          variant="extended"
          size="small"
          color="primary"
          style={{ marginRight: '1em', color: 'white' }}
          onClick={() => {
            if (document.referrer == '') {
              router.push('/');
            } else {
              router.back();
            }
          }}
        >
          <ArrowBackIosIcon />
          Back
        </Fab>
      )}
      {router.pathname.startsWith('/create') && (
        <Typography variant="h6" color="textPrimary">
          Create Job Post
        </Typography>
      )}
      {router.pathname.startsWith('/edit') && (
        <Typography variant="h6" color="textPrimary">
          Edit Post: {String(slug[0])}
        </Typography>
      )}
      {router.pathname.startsWith('/posts') && (
        <Typography variant="h6" color="textPrimary">{`Post: ${String(
          id,
        )}`}</Typography>
      )}
      {router.pathname.startsWith('/categories') && (
        <Typography variant="h6" color="textPrimary">
          {String(id).split('_').join(' ')}
        </Typography>
      )}
      {router.pathname.startsWith('/unsub') && (
        <Typography variant="h6" color="textPrimary">
          Unsubscribe
        </Typography>
      )}
    </div>
  );
};

export default BreadCrumb;
