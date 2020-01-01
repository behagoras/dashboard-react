import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import { getProperty } from '../../data/crudProperties';

import Card from '../../components/Utils/Card/Card';
import Action from '../../components/Atoms/Action';
import Price from '../../components/Atoms/Price';

const Content = styled.section``;
const Actions = styled.aside`
  position:sticky;
  top: 0;
  display:block;
`;
const ImgContainer = styled.figure``;
const Container = styled.div`
  display:grid;
  grid-template-columns:3fr 1fr;
  width:100%;
  /* max-width:50vw; */
`;

const DescriptionContainer = styled.div`
  height: auto;
`;

const DescriptionText = styled.div`
  position:relative;
  height: ${(props) => (!props.open ? '128px' : 'auto')};
  overflow: hidden;
  white-space: pre-wrap;
  text-align:left;
  & ::after{
    background: linear-gradient(
      to bottom,
       rgba(255, 255, 255, 0) 50%, 
       var(--white-color) 100%
    );
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
    display:  ${(props) => (!props.open ? 'block' : 'none')};
  }
}
`;

const PropertyDetails = () => {

  const initialState = {
    img: {},
    address: {},
    owner: {},
    prices: {},
  };

  const { _id } = useParams('_id') || {};
  const [state, setState] = useState(initialState);
  const [openedDescription, setOpenedDescription] = useState(false);

  const handleToggleDescription = () => {
    setOpenedDescription(!openedDescription);
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = _id ? await getProperty(_id) : {};
      setState({
        ...state,
        ...data.data,
      });
      console.log(data.data.img.src);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  return (
    <>

      <Container>
        {/* <pre>{JSON.stringify(initialState, 0, 2)}</pre> */}
        <Content>
          <Card>
            <h1>{state.title}</h1>
            <h2>{`${state.address.street},${state.address.city},${state.address.state},${state.address.zip}`}</h2>
            <Price price={[state.prices.amount, state.prices.currency]} />
          </Card>
          <Card>
            <DescriptionContainer>
              <h2>Description</h2>
              <DescriptionText open={openedDescription}>
                <p>{ReactHtmlParser(state.description)}</p>
              </DescriptionText>
              <Action onClick={handleToggleDescription}>
                {
                  !openedDescription ? 'Show more' : 'Show Less'
                }
              </Action>
            </DescriptionContainer>
          </Card>
          <Card>
            <h2>Owner</h2>
            <div>
              <strong>Name: </strong>
              {state.owner.fullName}
            </div>
            <div>
              <strong>Phones: </strong>
              <div>{state.owner.residencePhone}</div>
              <div>{state.owner.mobilePhone}</div>
            </div>
            <div>
              <strong>E-mail: </strong>
              {state.owner.email}
            </div>
            <div>
              <strong>Country of birth: </strong>
              {state.owner.birthplace}
            </div>
          </Card>
        </Content>
        <Card>
          <Actions>
            <ImgContainer>
              <img src={state.img.src} alt={state.title} />
            </ImgContainer>
            <Action
              float="right"
              className={{ float: 'right' }}
              name="Edit property"
              icon="fas fa-edit"
              to={`/admin/property/edit/${_id}`}
            />
          </Actions>
        </Card>
      </Container>
      {/* <Card><pre style={{ textAlign: 'left', background: '#333', color: '#ccc', padding: '30px' }}>{JSON.stringify(state, null, 2)}</pre></Card> */}

    </>
  );
};

export default PropertyDetails;
