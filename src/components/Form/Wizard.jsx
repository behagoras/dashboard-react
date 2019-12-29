/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form } from 'react-final-form';
import Card from '../Utils/Card/Card';
import Button from '../Atoms/Button';

// const propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

const Page = styled.div``;
let Page2;

const Wizard = (props) => {
  Page2 = ({ children }) => children;
  const [state, setState] = useState({
    page: 0,
    values: props.initialValues || {},
  });

  const next = (values) => {
    return setState(() => {
      return (
        {
          page: Math.min(state.page + 1, props.children.length - 1),
          values,
        }
      );
    });
  };

  const previous = (values) => {
    // const { values } = form;
    console.log('values', values);
    return setState(() => {
      return (
        {
          page: Math.max(state.page - 1, 0),
          values,
        }
      );
    });
  };

  const validate = (values) => {
    const activePage = React.Children.toArray(props.children)[
      state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  const handleSubmit = (values) => {
    const { children, onSubmit } = props;
    const { page } = state;
    const isLastPage = page === React.Children.count(children) - 1;

    if (isLastPage) {
      return onSubmit(values);
    }
    // state.next ? next(values) : previous(values);
    true ? next(values) : previous(values);
  };

  const handleNext = () => {
    setState({
      ...state,
      next: true,
    });
  };
  const handlePrevious = () => {
    setState({
      ...state,
      next: false,
    });
  };

  const { children } = props;
  const { page, values } = state;
  const activePage = React.Children.toArray(children)[page];
  const isLastPage = page === React.Children.count(children) - 1;

  return (
    <Card>
      <Form
        initialValues={values}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, submitting, values, form }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <div className="buttons">
              {page > 0 && (
                <Button
                  type="button"
                  onClick={() => {
                    previous(values);
                  }}
                >
               « Previous
                </Button>
              )}
              {!isLastPage && <Button type="submit">Next »</Button>}
              {isLastPage && (
                <Button type="submit" onClick={handleNext} disabled={submitting}>
               Submit
                </Button>
              )}
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      </Form>
    </Card>
  );

};

Wizard.Page = Page;
Wizard.Page2 = Page2;
export default Wizard;
