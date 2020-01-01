import React from 'react';
import { Field } from 'react-final-form';
import Wizard from '../../../../components/Form/Wizard';
import { Select, NationalitiesSelect } from '../../../../components/Form/FormElements';
import { Input, Label, InputGroup } from '../../../../components/Form/CoolInputs2';
import Container from '../../../../components/Atoms/Container';

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) => (touched && error ? <span>{error}</span> : null)}
  />
);

const required = (value) => (value ? undefined : 'Required');

const Page2 = () => {
  return (
    <Wizard.Page>
      <div>
        <h2 style={{ textAlign: 'left', fontSize: '20px' }}>Personal data of the owner</h2>
        <InputGroup>
          <Field
            name="fullName"
            component={Input}
            type="text"
            required
            autoComplete="off"
            id="fullName"
            value="fullName"
          />
          <Label
            htmlFor="fullName"
            title="Enter your full name"
            data-title="Full Name"
          />
          <Error name="fullName" />

        </InputGroup>
      </div>
      <div>
        <h2 style={{ textAlign: 'left', fontSize: '20px' }}>Contact data of the owner</h2>
        {/* <Container columns="2"> */}
        <InputGroup>
          <Field
            name="residencePhone"
            component={Input}
            type="phone"
            required
            autoComplete="off"
            id="residencePhone"
            value="residencePhone"
          />
          <Label
            htmlFor="residencePhone"
            title="Enter your residence phone"
            data-title="residencePhone"
          />
          <Error name="residencePhone" />

        </InputGroup>
        <InputGroup>
          <Field
            name="mobilePhone"
            component={Input}
            type="phone"
            required
            autoComplete="off"
            id="mobilePhone"
            value="mobilePhone"
          />
          <Label
            htmlFor="mobilePhone"
            title="Enter your mobile phone"
            data-title="CellPhone"
          />
          <Error name="CellPhone" />

        </InputGroup>
        {/* </Container> */}
        <Container columns="3">
          <InputGroup>
            <Field
              name="email"
              component={Input}
              type="text"
              required
              autoComplete="off"
              id="email"
              value="email"
            />
            <Label
              htmlFor="email"
              title="Enter your email"
              data-title="E-mail"
            />
            <Error name="email" />

          </InputGroup>
          <InputGroup>
            <Field
              name="birthplace"
              component={Input}
              type="text"
              required
              autoComplete="off"
              id="birthplace"
              value="birthplace"
            />
            <Label
              htmlFor="birthplace"
              title="Enter your country of birth"
              data-title="Country of birth"
            />
            <Error name="birthplace" />

          </InputGroup>
          <InputGroup>
            <Field
              name="civilStatus"
              component={Input}
              type="text"
              required
              autoComplete="off"
              id="civilStatus"
              value="civilStatus"
            />
            <Label
              htmlFor="civilStatus"
              title="Enter your civil status"
              data-title="Civil Status"
            />
            <Error name="civilStatus" />

          </InputGroup>
        </Container>
        <Container columns="2">
          {/* <div>
            <Label htmlFor="nationality">What is your Nationality</Label>
            <Field
              id="nationality"
              name="nationality"
              component={NationalitiesSelect}
            />
            <Error name="nationality" />

          </div> */}
          {/* <div>
            <Label htmlFor="gender">What is your Gender</Label>
            <Field
              id="gender"
              name="gender"
              component={Select}
            >
              <option value="">-- select one --</option>
              <option value="male">
            Male
              </option>
              <option value="female">
            Female
              </option>
              <option value="other">
              I rather not to say
              </option>
            </Field>
            <Error name="gender" />

          </div> */}
        </Container>
      </div>
      {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
    </Wizard.Page>
  );
};

export default Page2;
