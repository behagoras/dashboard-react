import React from 'react';
import styled from 'styled-components';
import Card, {
  CardBody,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '../Material/Card';

import $bedrooms from '../../assets/img/bedrooms.svg';
import $bathrooms from '../../assets/img/bathrooms.svg';
import $terrain from '../../assets/img/terrain-surface.svg';

import Price from '../Atoms/Price';
import Characteristic from '../Atoms/PropertyCharacteristic';

const PropertyItemWrapper = styled.div`
    display:grid;
    grid-template-rows:139px;
    grid-template-columns:1fr;
    margin:0;
    left:0;
    overflow:hidden;
`;
const PropertyCover = styled.img`
    /* font-family: "CircularStd-Book", Helvetica, Arial, sans-serif; */
    /* font-size: 16px; */
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    border-radius:10px 10px 0 0;
    width: 100%;
    height:100%;

`;
const TagContainer = styled.div`
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 170px; 
    padding: 16px 16px;
    position: absolute;
    
`;
const TagDetail = styled.div`
    border-radius: 4px;
    text-transform: uppercase;
    background-color: ${(props) => props.theme.colors.primary.background};
    color: ${(props) => props.theme.colors.primary.lighter};
    font-size: 0.75rem;
    padding: 5px 10px;
    margin-bottom:20px;
`;
const InfoContainer = styled.div`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width:200px;
    text-align:left;
`;

const Characteristics = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    justify-content: space-around;
    padding:0 30px;
`;

const PropertyItem = (props) => {
  const {
    cover,
    type,
    price,
    title,
    description,
    characteristics,
  } = props;
  const {
    bedrooms,
    bathrooms,
    parkingLots,
    surface,
    age,
  } = characteristics;
  return (
    <Card maxWidth="239px">
      <CardHeader>
        <PropertyItemWrapper>
          <PropertyCover src={cover} />
          <TagContainer>
            <TagDetail>
              {type}
            </TagDetail>
          </TagContainer>
        </PropertyItemWrapper>
      </CardHeader>
      <CardBody>
        <Price price={price} />
        <InfoContainer>
          <CardTitle>
            {title}
          </CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </InfoContainer>
      </CardBody>
      <CardFooter>
        <Characteristics>
          <Characteristic
            Icon={$bedrooms}
            qty={bedrooms}
          />
          <Characteristic
            Icon={$bathrooms}
            qty={bathrooms}
          />
          <Characteristic
            Icon={$terrain}
            qty={surface}
          />
        </Characteristics>
      </CardFooter>
    </Card>
  );
};

export default PropertyItem;

