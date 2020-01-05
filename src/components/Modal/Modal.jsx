import React from 'react';
import styled from 'styled-components';
// import { Modal } from "antd";
import Action from '../Atoms/Action';
import _Card from '../Utils/Card/Card';

const ModalWrapper = styled.div`
    background-color: rgba(0,0,0,.65);
    display: none;
    overflow: auto;
    position: fixed;
    z-index: 11;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display:${(props) => (props.visible ? 'grid' : 'none')};
    grid-gap:50px;
    justify-items: center;
    align-items: center;
`;

const Card = styled(_Card)`
    width:calc(100vw - 100px);
    margin: auto;
`;

const Content = styled.div``;

const Buttons = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-gap:10px;
    min-width:400px;
    width:30%;
    margin:0 auto;
`;

const Modal = (props) => {
  const emptyCalback = () => {};
  const { onOk, onCancel, visible, className, children, text } = props;
  return (
    <ModalWrapper className={className} visible={visible}>
      <Card>
        <Content>
          {text}
        </Content>
        <Buttons>
          {
            onCancel ? (
              <Action onClick={onCancel}>
                Cancel
              </Action>
            ) : {}
          }
          <Action onClick={onOk || emptyCalback}>
                Ok
          </Action>
        </Buttons>
      </Card>
    </ModalWrapper>
  );

};

export default Modal;
