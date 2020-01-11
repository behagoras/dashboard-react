import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Wizard from '../../../components/Form/WizardClass';
import TitleBar from '../../../components/Dashboard/TitleBar';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import { createProperty, updateProperty } from '../../../actions/crudProperties';
import Card from '../../../components/Utils/Card/Card';

const WizardPage = (props) => {

  const history = useHistory();
  const { type } = props;
  const params = useParams();

  const onSubmit = async (values) => {
    if (type === 'update') {
      const { _id } = params;
      const response = await updateProperty(_id, values);
      history.push(`/admin/property/${_id}`);

      console.log(response);

    } else if (type === 'create') {
      const response = await createProperty(values);
      const _id = response.data.data;
      history.push(`/admin/property/${_id}`);
      console.log('response', response);
    }

  };

  const handleImageSuccess = (file) => {
    console.log('handleImageSuccess, Uploaded file:', file);
    const { path } = JSON.parse(file.xhr.response).data[0];
    console.log('path', path);
    const $imageSource = document.getElementById('imageSource');
    $imageSource.value = path;
    window.setFormValue('imageSource', path);
  };

  return (
    <Card>
      <TitleBar title="Add Property" actions={[]} />
      <Wizard
        onSubmit={onSubmit}
        _id={params ? params._id : ''}
      >
        <Page1 handleImageSuccess={handleImageSuccess} />
        <Page2 />
        <Page3 />
      </Wizard>
    </Card>
  );
};

export default WizardPage;
