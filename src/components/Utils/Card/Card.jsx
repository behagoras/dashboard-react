import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  max-width:${(props) => (props.maxWidth ? props.maxWidth : '100%')};
  width:calc(${(props) => (props.width ? props.width : '100%')} - 30px);
  padding:0 15px;
  padding-bottom:30px;
  @media (max-width: 720px) {
    padding:0;
    margin:0;
    width:100%;
  }
`;

const Card = styled.div`
  background-color: var(--white-color);
  padding:15px;
  border-radius: 10px;
  box-shadow: 0 6px 6px -1px rgba(10, 22, 70, 0.1);
  width:calc(100% - 30px);
  @media (max-width: 720px) {
    margin-right: -30px;
    overflow: hidden;
  }
`;

const _Card = ({ maxWidth, children, className, overflowX }) => {

  console.log('className', className);
  if (className) {
    console.log('Has classname');
  } else {
    console.log('Doesn\'t has classname');
  }
  // console.log('2Class', classsName ? className : {});
  return (
    <CardWrapper maxWidth={maxWidth || '100%'}>
      <Card className={className || ''}>
        {children}
      </Card>
    </CardWrapper>
  );
};

export default _Card;
