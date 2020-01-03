import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ActionLink = styled(Link)``;
const Icon = styled.i`
    color:${(props) => props.color};
    & :hover, & :active{
        filter: brightness(50%);
    }

`;

const IconAction = (props) => {
  const { to, icon, className } = props;
  return (
    <ActionLink onClick={props.onClick} className={className} to={to}>
      <Icon color={props.color || ''} className={icon} aria-hidden="true" />
    </ActionLink>
  );
};

export default IconAction;
