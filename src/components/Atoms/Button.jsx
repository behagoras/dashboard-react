import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from '../Utils/Card/Card';

const Button = styled.button`
  text-rendering: unset;
  -webkit-appearance: unset;
  align-items: unset;
  display: block;
  text-align: center;
  text-indent:unset;
  box-sizing: unset;
  color: var(--text-color);
  font-family:var(--font-family);
  font-size:var(--font-size);
  cursor: pointer;
  font-weight:400;
  padding: 0;
  border:none;
  background:none;
  text-decoration:none;

  line-height: 1.15;
  font-family: 'Titillium Web', sans-serif;
  list-style: none;
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  padding: 15px;
  font-size: 20px;
  float: left;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: .5s ease;
  background: var(--color-brand);
  color: #ffffff;

  & :hover {
    background:var(--color-dark);
  }
  &[disabled] {
    background: var(--color-grey);
    cursor: not-allowed;
  }

  `;

export default Button;
