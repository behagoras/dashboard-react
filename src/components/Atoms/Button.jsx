import React from 'react';
import styled from 'styled-components';
import Card from '../Utils/Card/Card';

const Button = styled.button`
  color: var(--text-color);
  font-family:var(--font-family);
  font-size:var(--font-size);
  cursor: pointer;
  font-weight:400;
  padding: 0;
  border:none;
  background:none;
  text-decoration:none;
  `;

const ButtonCard = styled(Card)`
  margin-bottom:-30px;
  /* background:lightblue; */
  & :hover{
    box-shadow: 0 6px 6px -1px rgba(10, 22, 70, 0.3);
    font-weight:500;
  }
`;

const ButtonBody = styled.div`
  display:grid;
  grid-template-columns:auto auto;
  grid-gap:10px;
`;

const Action = (props) => {
  const { name, icon, className, onClick, children, to } = props;
  return (
    <Button className={className || ''} onClick={onClick || ''} to={to}>
      <ButtonCard>
        <ButtonBody>
          <p>{name}</p>
          <i className={icon || ''} />
          {children}
        </ButtonBody>
      </ButtonCard>
    </Button>
  );
};

export default Action;
