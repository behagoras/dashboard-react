import React from 'react';
import styled from 'styled-components';
import Card from '../Utils/Card/Card';
import _Button from '../Atoms/Action';

const TitleBar = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

const Actions = styled.div``;

const Title = styled.h1`
  display: block;
  text-align:left;
`;

const Button = styled(_Button)`
  float: right;
`;

const _TitleBar = ({ children, title, name, icon, className, actions, history, handleClick }) => {
//   alert(JSON.stringify(actions[0]));
  return (
    <Card className={className}>
      <TitleBar>
        <Title>{title}</Title>
        {
          actions ?
            (
              <Actions>
                {
                  actions.map(((action) => (
                    <Button
                      float="right"
                      className={{ float: 'right' }}
                      name={action.name}
                      icon={action.icon}
                      onClick={handleClick}
                      to={action.to}
                    />
                  )))
                }
              </Actions>
            ) : {}
        }

        {children}
      </TitleBar>
    </Card>
  );
};

export default _TitleBar;
