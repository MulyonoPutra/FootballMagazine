import './create.scss';
import {
  Input,
  Upload,
  Gap,
  TextArea,
  SmallButton,
} from './../../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  save,
  update,
  setForm,
  setImagePreview,
} from './../../../config/redux/action';
import { useEffect, useState } from 'react';

import { findById } from './../../../config/redux/action';

const Create = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { form, imagePreview } = useSelector((state) => state.createReducer);
  const { title, subtitle, body } = form;

  const dispatch = useDispatch();
  const [label, setLabel] = useState('');

  const { data } = useSelector((state) => state.detailReducer);

  const onSubmit = () => {
    if (id) {
      console.log('Update');
      update(form, id);
    } else {
      console.log('Save');
      save(form);
    }
    navigate('/');
  };

  const imagesFromChild = (dataImages) => {
    dispatch(setForm('image', dataImages));
    const convertImages = URL.createObjectURL(dataImages);
    dispatch(setImagePreview(convertImages));
  };

  useEffect(() => {
    if (id) {
      setLabel('Update');
      dispatch(findById(id));
      dispatch(setForm('title', data.title));
      dispatch(setForm('subtitle', data.subtitle));
      dispatch(setForm('body', data.body));
      dispatch(setImagePreview(`http://localhost:4000/${data.image}`));
    } else {
      setLabel('Create');
      dispatch(setForm('title', ''));
      dispatch(setForm('body', ''));
      dispatch(setImagePreview(''));
    }
  }, [data.body, data.image, data.title, data.subtitle, dispatch, id]);

  return (
    <>
      <div className='m-auto flex justify-center py-4'>
        <div className='p-4'>
          <SmallButton
            title='Back'
            className='absolute left-4'
            onClick={() => {
              navigate('/');
            }}
          />
        </div>
        <div className='card'>
          <div className='px-2 py-5 sm:px-6'>
            <h3 className='title'>{label} New Post</h3>
            <Input
              label='title'
              placeholder='Title'
              value={title}
              onChange={(e) => dispatch(setForm('title', e.target.value))}
            />
            <Gap height={20} />
            <Input
              label='subtitle'
              placeholder='subtitle'
              value={subtitle}
              onChange={(e) => dispatch(setForm('subtitle', e.target.value))}
            />
            <Gap height={20} />
            <div>{imagePreview && <img src={imagePreview} alt='Images' />}</div>
            <Upload received={imagesFromChild} />
            <Gap height={20} />
            <TextArea
              value={body}
              onChange={(e) => dispatch(setForm('body', e.target.value))}
            />
            <Gap height={20} />
            <SmallButton title={label} onClick={onSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
