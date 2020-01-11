import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={to}>
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
            </Link>

          );
        })
      }

    </PropertyList>
  );
};

export default Properties;
