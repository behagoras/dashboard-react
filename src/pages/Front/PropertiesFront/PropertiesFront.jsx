import React, { useState, useEffect } from 'react';

import PropertyList, { Item } from '../../../components/PropertyList';
import propertiesMock from '../../../mock/properties1.json';
import { getProperties } from '../../../actions/crudProperties';
import placeholder from '../../../assets/img/placeholder.png';

const Properties = () => {
  const [properties, setProperties] = useState(propertiesMock);

  async function fetchMyAPI() {
    const data = await getProperties();
    setProperties(data.data);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
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
      {
        properties.map((property) => {
          const {
            _id,
            title,
            img,
            description,
            prices,
          } = property;
          console.log('placeholder', placeholder);
          const placeholder2 = `/${placeholder}`;
          const to = `/admin/property/${_id}`;
          return (
            <Item
              to={to}
              cover={img.src || placeholder2}
              type="apartment"
              price={[prices.amount, 'MXN']}
              title={title}
              description={description}
              characteristics={{
                bedrooms: 2,
                bathrooms: 2,
                parkingLots: 2,
                surface: [155, 'm2'],
                age: [16, 'y'],
              }}
            />

          );
        })
      }

    </PropertyList>
  );
};

export default Properties;
