import React from 'react';
import { Field } from 'react-final-form';
import Wizard from '../../../../components/Form/Wizard';
import { Input, Label, InputGroup } from '../../../../components/Form/FormInputs';
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
            validate={required}
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
        <Container columns="2">
          <InputGroup>
            <Field
              name="email"
              component={Input}
              type="text"
              validate={required}
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
              validate={required}
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

        </Container>
        <Container columns="2" />
      </div>
    </Wizard.Page>
  );
};

export default Page2;
