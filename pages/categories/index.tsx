import React from 'react';
import { API_URL } from '../../utilities/envUrl';

interface Props {
  categories?: string[];
}

const Categories = ({ categories }: Props) => {
  return (
    <div>
      <h1>Categories</h1>
      {categories.map(category => {
        return <h2 key={category}>{category}</h2>;
      })}
    </div>
  );
};

Categories.getInitialProps = async ({ req, query }) => {
  const isServer = !!req;

  let categories;
  if (isServer) {
    // in the NEXT.js server side, we can pass the server data
    // this `query.categories` is passed from AppController
    categories = query.categories;
  } else {
    // in the NEXT.js client side, we need to fetch the same data above
    const response = await fetch(`${API_URL}/ads/categories`);
    categories = await response.json();
  }

  return {
    categories,
  };
};

export default Categories;
