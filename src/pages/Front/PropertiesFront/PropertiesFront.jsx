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
    </>
  );
};

export default Properties;
