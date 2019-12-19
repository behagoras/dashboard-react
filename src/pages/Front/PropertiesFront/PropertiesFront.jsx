import React from 'react';
// import styled from 'styled-components';

// import Table,
// {
//   Row,
//   Column,
// } from '../../components/Table';
// import Card from '../../components/Material/Card';

import PropertyList, { Item } from '../../../components/PropertyList';

// const Badge = styled.div`
// `;

const Properties = () => {
  return (
    <>
      <PropertyList>
        <Item
          cover="https://media.truehome.com.mx/media/original_images/663_HCPortada.jpg"
          type="apartment"
          price={['5300000', 'MXN']}
          title="Hacienda del Ciervo, Hacienda de las Palmas"
          description="Hacienda de las Palmas, Huixquilucan, Estado de México"
          characteristics={{
            bedrooms: 2,
            bathrooms: 2,
            parkingLots: 2,
            surface: [155, 'm2'],
            age: [16, 'y'],
          }}
        />
        <Item
          cover="https://media.truehome.com.mx/media/original_images/663_HCPortada.jpg"
          type="apartment"
          price={['5300000', 'MXN']}
          title="Hacienda del Ciervo, Hacienda de las Palmas"
          description="Hacienda de las Palmas, Huixquilucan, Estado de México"
          characteristics={{
            bedrooms: 2,
            bathrooms: 2,
            parkingLots: 2,
            surface: [155, 'm2'],
            age: [16, 'y'],
          }}
        />
        <Item
          cover="https://media.truehome.com.mx/media/original_images/663_HCPortada.jpg"
          type="apartment"
          price={['5300000', 'MXN']}
          title="Hacienda del Ciervo, Hacienda de las Palmas"
          description="Hacienda de las Palmas, Huixquilucan, Estado de México"
          characteristics={{
            bedrooms: 2,
            bathrooms: 2,
            parkingLots: 2,
            surface: [155, 'm2'],
            age: [16, 'y'],
          }}
        />
        <Item
          cover="https://media.truehome.com.mx/media/original_images/663_HCPortada.jpg"
          type="apartment"
          price={['5300000', 'MXN']}
          title="Hacienda del Ciervo, Hacienda de las Palmas"
          description="Hacienda de las Palmas, Huixquilucan, Estado de México"
          characteristics={{
            bedrooms: 2,
            bathrooms: 2,
            parkingLots: 2,
            surface: [155, 'm2'],
            age: [16, 'y'],
          }}
        />
        <Item
          cover="https://media.truehome.com.mx/media/original_images/663_HCPortada.jpg"
          type="apartment"
          price={['5300000', 'MXN']}
          title="Hacienda del Ciervo, Hacienda de las Palmas"
          description="Hacienda de las Palmas, Huixquilucan, Estado de México"
          characteristics={{
            bedrooms: 2,
            bathrooms: 2,
            parkingLots: 2,
            surface: [155, 'm2'],
            age: [16, 'y'],
          }}
        />
      </PropertyList>
      {/* <Card>
        <Table>
          <Row href="/">
            <Column>
              <img
                alt=""
                src="https://tabler.github.io/tabler/demo/products/apple-iphone7-special.jpg"
              />
            </Column>
            <Column>
              Apple iPhone 7 Plus 256GB Red Special Edition
            </Column>
            <Column>
              98 reviews
            </Column>
            <Column>
              38 offers
            </Column>
            <Column>
              <strong>$499</strong>
            </Column>
          </Row>
          <Row href="/">
            <Column>
              <img
                alt=""
                src="https://tabler.github.io/tabler/demo/products/apple-macbook-pro.jpg"
              />
            </Column>
            <Column>
              Apple MacBook Pro i7 3,1GHz/16/512/Radeon 560 Space Gray
              {' '}
              <Badge color="default"> New </Badge>
            </Column>
            <Column>
              97 reviews
            </Column>
            <Column>
              13 offers
            </Column>
            <Column>
              <strong>$1499</strong>
            </Column>
          </Row>
        </Table>
      </Card> */}
    </>
  );
};

export default Properties;
