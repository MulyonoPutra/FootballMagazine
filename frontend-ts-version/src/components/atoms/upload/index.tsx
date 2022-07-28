import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG', 'GIF'];

export interface UploadProps {
    received: any
}

const Upload = (props: UploadProps) => {
  const [files, setFiles] = useState(null);

  const handleChange = (file:any) => {
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
