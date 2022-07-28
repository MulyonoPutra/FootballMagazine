import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG', 'GIF'];

const Upload = (props) => {
  const [files, setFiles] = useState(null);

  const handleChange = (file) => {
    setFiles(file);
    props.received(file);
  };

  return (
    <>
      <FileUploader handleChange={handleChange} name='file' types={fileTypes} />
    </>
  );
};

export default Upload;
