import React from 'react';
import styled from 'styled-components';

const MyInput = styled.input`
    flex: 1;
    padding: 3px 5px;
    font-size: 1em;
    margin-left: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
    width:100%;
    & [type='checkbox']{
        margin-top: 7px;
    }
`;

export const Input = (props) => {
  const { input, meta, ...rest } = props;
  const { name, onChange, value, ...restInput } = input;
  return (
    <>
      <MyInput
        name={name}
        // error={showError}
        inputProps={restInput}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

const MySelect = styled.select`
    flex: 1;
    padding: 3px 5px;
    font-size: 1em;
    margin-left: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
`;

export const Select = (props) => {
  const { input, meta, ...rest } = props;
  const { name, onChange, value, ...restInput } = input;
  return (
    <>
      <MySelect
        name={name}
        // error={showError}
        inputProps={restInput}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

const MyTextArea = styled.textarea`
    flex: 1;
    padding: 3px 5px;
    font-size: 1em;
    margin-left: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
`;

export const TextArea = (props) => {
  const { input, meta, ...rest } = props;
  const { name, onChange, value, ...restInput } = input;
  return (
    <>
      <MyTextArea
        name={name}
        // error={showError}
        inputProps={restInput}
        onChange={onChange}
        value={value}
      />
    </>
  );
};
export const Label = styled.label`
    display: block;
    color: #333;
    min-width: 110px;
    font-size: 1em;
    line-height: 32px;
    text-align:left;
`;
