export default ({
  title,
  description,
  location,
  longitude,
  latitude,
  value,
  category,
  company,
  type,
  images,
  contactEmail,
}) => {
  if (!title) {
    throw Error('Missing title!');
  }
  return {
    title,
    description,
    location,
    longitude,
    latitude,
    value,
    category,
    company,
    type,
    images,
    contactEmail,
  };
};
