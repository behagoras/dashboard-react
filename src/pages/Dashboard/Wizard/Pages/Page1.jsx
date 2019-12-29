import React from 'react';
import { Field } from 'react-final-form';
import Wizard from '../../../../components/Form/Wizard';
import { Label, Input } from '../../../../components/Form/FormElements';

const Page1 = () => {
  return (
    <Wizard.Page>
      <div>
        <h2 style={{ textAlign: 'left', fontSize: '20px' }}>Address</h2>
        <Label htmlFor="street">street + number</Label>
        <Field
          name="street"
          id="street"
          component={Input}
          type="text"
          placeholder="Street + number"
        />
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <Field
          id="city"
          name="city"
          component={Input}
          type="text"
          placeholder="City"
        />
      </div>
      <div>
        <Label htmlFor="state">state</Label>
        <Field
          id="state"
          name="state"
          component={Input}
          type="text"
          placeholder="state"
        />
      </div>
      <div>
        <Label htmlFor="zip">Zip Code</Label>
        <Field
          id="zip"
          name="zip"
          component={Input}
          type="text"
          placeholder="Zip Code"
        />
      </div>
      {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
    </Wizard.Page>
  );
};

export default Page1;
