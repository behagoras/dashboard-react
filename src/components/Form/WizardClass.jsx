/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import styled from 'styled-components';
import Button from '../Atoms/Button';
import { propertyToState } from '../../actions';
import { getProperty } from '../../actions/crudProperties';

const Buttons = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content:center;
  grid-gap:15px;
  margin:30px auto;
`;

export default class Wizard extends React.Component {

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  static Page = ({ children }) => children

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
    };
  }

  next = (values) => this.setState((state) => ({
    page: Math.min(state.page + 1, this.props.children.length - 1),
    values,
  }))

  previous = () => this.setState((state) => ({
    page: Math.max(state.page - 1, 0),
  }))

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = (values) => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  }

  handleSubmit = (values) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    }
    this.next(values);

  }

  async componentDidMount() {
    const { _id } = this.props;
    if (_id) {
      const myProperty = await getProperty(_id);
      const { data } = myProperty.data;
      console.log('myProperty', myProperty);
      console.log('data', data);
      this.setState({
        ...this.state,
        values: {
          ...propertyToState(data),
        },
      });

    }

  }

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}

        mutators={{
          // expect (field, value) args from the mutator
          setValue: ([field, value], state, { changeValue }) => {
            changeValue(state, field, () => value);
          },
        }}
        render={({ handleSubmit, submitting, pristine, values, form, ...rest }) => {
          // put the reference on a window variable of your choice here
          if (!window.setFormValue) window.setFormValue = form.mutators.setValue;
          return (
            <form onSubmit={handleSubmit}>
              {activePage}
              <Buttons>
                {page > 0 && (
                  <Button type="button" onClick={this.previous}>
                  « Previous
                  </Button>
                )}
                {!isLastPage && <Button type="submit">Next »</Button>}
                {isLastPage && (
                  <Button
                    type="submit"
                    disabled={submitting || pristine}
                  >
                  Submit
                  </Button>
                )}
              </Buttons>

              {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </form>
          );
        }}
      />
    );
  }
}
