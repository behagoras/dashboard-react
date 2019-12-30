import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../../components/Utils/Card';
import propertiesMock from '../../mock/properties1.json';
import { getProperties } from '../../data/crudProperties';
import TitleBar from '../../components/Dashboard/TitleBar';

const Table = styled.table`
    max-width: 100%;
    margin-bottom: 1rem;
    margin-left: 30px;
    margin-right: 30px;
    background-color: transparent;
    margin-bottom: 0;
`;
const TableHead = styled.thead`
    font-weight:bold;
    color: #FFF;
    position: relative;
    background: linear-gradient(60deg,var(--color-brand),var(--color-brand-contrast));
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px var(--color-dark);
    border-radius: 3px;
`;

const TableBody = styled.tbody``;
const TableRow = styled.tr`
  & :hover{
    background:var(--color-grey-light);
  }
`;
const TableCell = styled.td`
    max-width: 40vw;
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    padding-left: 1.5rem;
`;
const Image = styled.img`
  max-width:100%;
`;
const DescriptionText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-width: 60px;
`;

const Properties = () => {
  const [properties, setProperties] = useState(propertiesMock);
  async function fetchMyAPI() {
    const data = await getProperties();
    setProperties(data.data);
  }
  getProperties().then((data) => {
    console.log('data', data);
  });

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <>
      <TitleBar
        title="Properties"
        actions={[{ name: 'Add Property', icon: 'fas fa-plus-square', to: '/admin/add-property' }]}
      />
      <Card>
        <Table>
          <TableHead>
            <tr>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
            </tr>
          </TableHead>
          <TableBody>
            {
              properties.map((property) => {
                const {
                  _id,
                  title,
                  img,
                  description,
                  prices,
                } = property;
                return (
                  <TableRow key={_id}>
                    <TableCell>
                      <Image src={img.src} alt={title} />
                    </TableCell>
                    <TableCell>
                      {title}
                    </TableCell>
                    <TableCell>
                      <DescriptionText>
                        {description}
                      </DescriptionText>
                    </TableCell>
                    <TableCell>
                      {`$${prices.formattedAmount} ${prices.currency}`}
                    </TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default Properties;
