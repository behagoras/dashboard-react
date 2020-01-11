import React from 'react';

import Modal from './Modal';

export default class PromiseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    this.promiseInfo = {};
  }

  show = async () => {
    console.log('opening modal');
    return new Promise((resolve, reject) => {
      this.promiseInfo = {
        resolve,
        reject,
      };
      this.setState({
        show: true,
      });
    });
  };

  hide = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const { show } = this.state;
    const { resolve, reject } = this.promiseInfo;
    const onOk = () => {
      this.hide();
      resolve();
    };
    const onCancel = () => {
      this.hide();
      reject();
    };
    return (
      <Modal
        visible={show}
        onOk={onOk}
        onCancel={onCancel}
        text={this.props.text || ''}
      >
        Do you vant to cancel

      </Modal>
    );
  }

  getResolve() {
    const { resolve = () => {} } = this.promiseInfo || {};
    return (result) => {
      resolve(result);
      this.hide();
    };
  }

  /**
   * reject
   */
  getReject() {
    const { reject = () => {} } = this.promiseInfo || {};
    return (err) => {
      reject(err);
      this.hide();
    };
  }
}
