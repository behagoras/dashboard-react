import React from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';
import _Button from '../../Atoms/Button';
import Card from './Card';

const mixin = (props) => `
  border:solid ${props.color || 'black'} 3px;
  border-radius:20px;
`;

const Wrapper = styled.main`
  background:white;
  width:300px;
  height:300px;
  ${mixin({ color: 'red' })}
`;

const Title = styled.h2`
  display:block;
  background:${(props) => props.background || 'lightcoral'};
  padding:16px;
`;

const Container = styled.article`
  max-width:200px;
`;

const Link = styled(_Link)``;

const Button = styled(_Button)``;

const CardLuis = ({ children, title, className, onClick }) => {
  return (
    <Card>
      <Wrapper className={className}>
        <Title background="blue">Título</Title>
        <Container>
          <Link to="/">Hola Card</Link>
          <Button>Hello</Button>
        </Container>
      </Wrapper>
    </Card>
  );
};

export default CardLuis;
