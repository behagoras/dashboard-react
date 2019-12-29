import React from 'react';
import { Field } from 'react-final-form';
import Wizard from '../../../../components/Form/Wizard';
import { Label, Input, Select, NationalitiesSelect } from '../../../../components/Form/FormElements';

const Page1 = () => {
  return (
    <Wizard.Page>
      <div>
        <h2 style={{ textAlign: 'left', fontSize: '20px' }}>Personal data of the owner</h2>
        <Label htmlFor="fullName">Full Name</Label>
        <Field
          name="fullName"
          id="fullName"
          component={Input}
          type="text"
          placeholder="Full Name"
        />
        <Label htmlFor="gender">Gender</Label>
        <Field
          id="gender"
          name="gender"
          component={Select}
        >
          <option value="">-- select one --</option>
          <option value="male">
            male
          </option>
          <option value="female">
            female
          </option>
        </Field>
        <Label htmlFor="civilStatus">Civil Status</Label>
        <Field
          id="civilStatus"
          name="civilStatus"
          component={Select}
        >
          <option value="">-- select one --</option>
          <option value="single">
            Single
          </option>
          <option value="married">
            Married
          </option>
          <option value="separated">
            Separated
          </option>
          <option value="widowed">
            Widowed
          </option>
        </Field>
      </div>
      <div>
        <h2 style={{ textAlign: 'left', fontSize: '20px' }}>Contact data of the owner</h2>
        <Label htmlFor="residencePhone">Residence Phone</Label>
        <Field
          id="residencePhone"
          name="residencePhone"
          component={Input}
          type="phone"
          placeholder="Residence Phone"
        />
        <Label htmlFor="mobilePhone">Mobile Phone</Label>
        <Field
          id="mobilePhone"
          name="mobilePhone"
          component={Input}
          type="mobilePhone"
          placeholder="Mobile Phone"
        />
        <Label htmlFor="email">E-mail</Label>
        <Field
          id="email"
          name="email"
          component={Input}
          type="email"
          placeholder="E-mail"
        />
        <Label htmlFor="birthplace">Country of birth</Label>
        <Field
          id="birthplace"
          name="birthplace"
          component={Input}
          type="text"
          placeholder="Country of birth"
        />
        <Label htmlFor="nationalities">Nationalities</Label>
        <Field
          id="nationalities"
          name="nationalities"
          component={NationalitiesSelect}
        />
      </div>
      {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
    </Wizard.Page>
  );
};

export default Page1;
