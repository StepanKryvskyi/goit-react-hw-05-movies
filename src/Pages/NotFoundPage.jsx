import { Link } from 'react-router-dom';

import { ErrorMessage } from './HomePage/HomePage.styled';

export default function NotFoundPage() {
  return (
    <ErrorMessage>
      Sorry! Page is not found! Please click here <Link to="/">link</Link> to
      return to home page!
    </ErrorMessage>
  );
}