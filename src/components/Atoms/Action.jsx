import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonDiv = styled.div`
  line-height: 1.15;
  font-family: 'Titillium Web', sans-serif;
  list-style: none;
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  padding: 15px;
  font-size: 20px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: .5s ease;
  background: var(--color-brand-light);
  color: #ffffff;
  & :hover {
    background: var(--color-brand);
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  `;
const emptyCallback = () => {};

const Button = (props) => {
  const { children, to, className, onClick } = props;
  return to ? (
    <Link to={to}>
      <ButtonDiv className={className || ''} onClick={onClick || emptyCallback}>
        {children}
      </ButtonDiv>
    </Link>
  ) : (
    <ButtonDiv className={className || ''} onClick={onClick || emptyCallback}>
      {children}
    </ButtonDiv>
  );
};

const ButtonBody = styled.div`
    display: grid;
    grid-template-columns: ${(props) => (props.icon ? 'auto auto' : 'auto')};
    justify-content: center;
    align-content: center;
    grid-gap: 15px;
`;

const Action = (props) => {
  const { name, icon, className, onClick, children, to } = props;
  return (
    <Button className={className || ''} onClick={onClick || emptyCallback} to={to}>
      <ButtonBody icon={icon}>
        {children}
        {name ? <p>{name}</p> : ''}
        {icon ? (<i className={icon} />) : ''}
      </ButtonBody>
    </Button>
  );
};

export default Action;
