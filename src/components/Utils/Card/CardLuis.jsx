import React from 'react';
import styled from 'styled-components';
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

const Container = styled.div`
  max-width:200px;
`;

const Button = styled(_Button)`
`;

const Card2 = ({ children, title, className, onClick }) => {
  return (
    <Card>
      <Wrapper className={className}>
        <Title background="blue">Título</Title>
        <Container>
          Hola Card
          <Button>Hello</Button>
        </Container>
      </Wrapper>
    </Card>
  );
};

export default Card2;
