import React from 'react';
import styled from 'styled-components';
import DropzoneComponent from 'react-dropzone-component';
import DropzoneStyles from './Dropzone.styles';

// var files = document.querySelector('.filepicker').dropzone.files

const StyledDropzone = styled(DropzoneComponent)`
& .filepicker {
    font-family: var(--font-family);
}

& div.filepicker {
    text-align: center;
    padding: 5px;
    background-color: #E1E1E1;
    border-radius: 5px;
    min-height: 60px;
    border: 2px dashed #C7C7C7;
}

/* Icon */
& .filepicker-file-icon
{
    position: relative;
    display: inline-block;
    margin: 1.5em 0 2.5em 0;
    padding-left: 45px;
    color: black;
}
& .filepicker-file-icon::before
{
    position: absolute;
    top: -7px;
    left: 0;
    width: 29px;
    height: 34px;
    content: '';
    border: solid 2px #7F7F7F;
    border-radius: 2px;
}
& .filepicker-file-icon::after
{
    font-size: 11px;
    line-height: 1.3;
    position: absolute;
    top: 9px;
    left: -4px;
    padding: 0 2px;
    content: 'file';
    content: attr(data-filetype);
    text-align: right;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
    background-color: #000;
}
& .filepicker-file-icon .fileCorner
{
    position: absolute;
    top: -7px;
    left: 22px;
    width: 0;
    height: 0;
    border-width: 11px 0 0 11px;
    border-style: solid;
    border-color: white transparent transparent #920035;
}

`;

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: 'image/jpeg,image/png',
    };

    this.state = { componentConfig: {
      iconFiletypes: ['.jpg', '.png'],
      showFiletypeIcon: true,
      postUrl: this.props.apiUrl,
    } };

    this.onSuccess = this.props.onSuccess;

    // If you want to attach multiple callbacks, simply
    // create an array filled with all your callbacks.
    this.callbackArray = [
      () => console.log('Calling an array of props when dropping file!'),
    ];

    // Simple callbacks work too, of course
    this.handleAddedFiles = (file) => {
      // uploading components config with the apiUrl from form field
      this.setState({
        componentConfig: {
          iconFiletypes: ['.jpg', '.png'],
          showFiletypeIcon: true,
          postUrl: this.props.apiUrl,
          // +'&name='+file.name,
        },
      });
      console.log('this.state', this.state);
      console.log('Added file', file);
      console.log('Waiting for server...');
    };

    this.handleSuccess = (file) => {
      console.log('uploaded', file);
    };

    this.handleRemovedFiles = (file) => {
      console.log('removing...', file);
    };

    this.dropzone = null;
  }

  render() {
    const config = this.state.componentConfig;
    const { djsConfig } = this;
    console.log(this.props.apiUrl);

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
      // eslint-disable-next-line no-return-assign
      init: (dz) => this.dropzone = dz,
      drop: this.callbackArray,
      addedfile: this.handleAddedFiles,
      success: this.props.onSuccess,
      removedfile: this.handleRemovedFiles,
    };

    return <DropzoneStyles><StyledDropzone config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} /></DropzoneStyles>;
  }
}
