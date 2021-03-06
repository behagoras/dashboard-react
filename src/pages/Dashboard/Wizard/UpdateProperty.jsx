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

  return (
    <Card>
      <TitleBar title="Edit Property" actions={[]} />
      <Wizard
        onSubmit={onSubmit}
        _id={params ? params._id : ''}
      >
        <div>
          <Page1 />
          <Page2 />
          <Page3 />
        </div>
      </Wizard>
    </Card>
  );
};

export default WizardPage;
