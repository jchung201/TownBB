import React from 'react';
import { useSelector } from 'react-redux';
import { getCategories } from '../../store/home/homeReducer';

const Categories = () => {
  const categories = useSelector(state => state.home.categories);
  return (
    <div>
      <h1>Categories</h1>
      {categories.map(category => {
        return <h2 key={category}>{category}</h2>;
      })}
    </div>
  );
};

Categories.getInitialProps = async ({ store }) => {
  store.dispatch(await getCategories());
};

export default Categories;
