import { Link } from 'react-router-dom';
import * as SC from './BackLinkBtn.styled';
import PropTypes from 'prop-types';

export const BackLinkBtn = ({ path }) => {
  return (
    <Link to={path}>
      <SC.BackBtn type="button">Go back</SC.BackBtn>
    </Link>
  );
};

BackLinkBtn.propTypes = {
  path: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
