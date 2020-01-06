/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Card from '../../components/Utils/Card';
import propertiesMock from '../../mock/properties1.json';
import { getProperties, deleteProperty } from '../../data/crudProperties';
import TitleBar from '../../components/Dashboard/TitleBar';
import IconAction from '../../components/Atoms/IconAction';
import Modal from '../../components/Modal/AsyncModal';
import placeholder from '../../assets/img/placeholder.png';

const placeholder2 = `/${placeholder}`;

const Table = styled.table`
  max-width: 100%;
  margin-bottom: 1rem;
  margin-left: 30px;
  margin-right: 30px;
  background-color: transparent;
  margin-bottom: 0;
  @media (max-width: 720px) {
    margin:0;
    display:block;
    width:100%;
  }
`;
const TableHead = styled.thead`
  font-weight:bold;
  color: #FFF;
  position: relative;
  background: linear-gradient(60deg,var(--color-brand),var(--color-brand-contrast));
  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px var(--color-dark);
  border-radius: 3px;
  @media (max-width: 720px) {
    display:none;
  }
`;

const TableBody = styled.tbody`
  @media (max-width: 720px) {
    margin:0;
    display:block;
    width:100%;
  }
`;
const TableRow = styled.tr`
  & :hover{
    background:var(--color-grey-light);
  }
  @media (max-width: 720px) {
    width: 100%;
    display:grid;
    grid-template-columns:1fr;
    border-radius:15px;
    box-shadow: 0 6px 6px -1px var(--color-dark-ultralight);
    text-overflow: ellipsis; 
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
const TableCell = styled.td`
  max-width: 40vw;
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
  padding-left: 1.5rem;
  @media (max-width: 720px) {
    display:block;
    max-width:100%;
    max-height:139px;
    overflow:hidden;
    & :nth-of-type(3){
      display:none;
    }
    & :nth-of-type(5) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
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

const CenterCard = styled.div`
  display: flex;
  max-width: 100%;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const modalRef = React.createRef();

const Properties = () => {
  const history = useHistory();
  const [properties, setProperties] = useState(propertiesMock);
  const [modalText, setModalText] = useState('');

  async function fetchMyAPI() {
    const data = await getProperties();
    setProperties(data.data);
  }

  const showModal = async (text, onOk, onCancel) => {
    setModalText('Are you sure you want to delete the property?');
    const $modal = modalRef.current;
    try {
      await $modal.show();
      onOk();
    } catch (err) {
      onCancel();
    }

    console.log('Waiting user for confirmation ...');
  };

  const handleView = async (property, event) => {
    event.preventDefault();
    const { _id } = property;
    history.push(`/admin/property/${_id}`);
  };

  const handleEdit = async (property, event) => {
    event.preventDefault();
    const { _id } = property;
    history.push(`/admin/property/edit/${_id}`);
  };

  const handleDelete = async (property, event) => {
    event.preventDefault();
    const { _id } = property;
    const onOk = async () => {
      const property = await deleteProperty(_id);
      console.log(property);
      fetchMyAPI();
    };
    const onCancel = () => {
      console.log('Uer cancelled the event');
    };
    await showModal('Are you sure you want to delete the property', onOk, onCancel);
  };

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
      <Modal id="modal" ref={modalRef} text={modalText} />
      <Card>
        <Table>
          <TableHead>
            <tr>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell />
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
                const to = `/${_id}`;

                // eslint-disable-next-line react/jsx-no-bind
                return (
                  <TableRow
                    // onClick={handleView.bind(this, property)}
                    key={_id}
                  >
                    <TableCell>
                      <Image src={img.src || placeholder2} alt={title} />
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
                      {`${prices.formattedAmount} ${prices.currency.toUpperCase()}`}
                    </TableCell>
                    <TableCell>
                      <IconAction onClick={handleDelete.bind(this, property)} color="red" icon="fa fa-trash" to={to} />
                      <IconAction onClick={handleEdit.bind(this, property)} color="" icon="fa fa-edit" to={to} />
                      <IconAction onClick={handleView.bind(this, property)} color="" icon="fas fa-eye" to={to} />
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
