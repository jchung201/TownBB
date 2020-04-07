import { toast } from 'react-toastify';

export default (type, response) => {
  switch (type) {
    case 'success':
      return toast(response);
    case 'error':
      return toast.error(response);
    default:
      return toast(response);
  }
};
