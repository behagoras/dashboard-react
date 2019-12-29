/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import React from 'react';

export const InputGroup = styled.div`
    position: relative;
    margin-bottom: 15px;
`;

const MyInput = styled.input`
    width: 100%;
    line-height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 14px;
    color: #222;
    border: 1px solid #ccc;
    border-radius: 3px;
    & :focus {
        outline: 0;
        border-color: blue;
    }
    & :valid + label::before {
        line-height: 20px;
        font-size: 12px;
        top: -10px;
        background: #fff;
        padding: 0 6px;
        left: 9px;        
        content: attr(data-title);
    }
    & :focus + label::before {
        line-height: 20px;
        font-size: 12px;
        top: -10px;
        background: #fff;
        padding: 0 6px;
        left: 9px;        
        color: blue;
    }
`;

export const Input = (props) => {
  const {
    id,
    input,
    meta,
    ...rest
  } = props;
  const { type, name, onChange, value, ...restInput } = input;
  return (

    <MyInput
      id={id}
      name={name}
      // error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value}
      type={type}
      {...rest}
      {...meta}
    />
  );
};

export const Label = styled.label`
    & :before {
        content: attr(title);
        position: absolute;
        top: 0;
        left: 15px;
        line-height: 40px;
        font-size: 14px;
        color: #777;
        transition: 300ms all;
    }
`;
