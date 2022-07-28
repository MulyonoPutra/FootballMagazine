import axios from 'axios';

export const setForm = (formType, formValue) => {
  return { type: 'SET_FORM', formType, formValue };
};

export const setImagePreview = (payload) => {
  return { type: 'SET_IMAGE_PREVIEW', payload };
};

export const save = (form) => {
  const data = new FormData();
  data.append('title', form.title);
  data.append('subtitle', form.subtitle);
  data.append('body', form.body);
  data.append('image', form.image);

  axios.post('http://localhost:4000/v1/blog/post', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log('Post Success! ', response);
    })
    .catch((error) => {
      console.log('Post Error! ', error);
    });
};

export const update = (form, id) => {
  const data = new FormData();
  data.append('title', form.title);
  data.append('subtitle', form.subtitle);
  data.append('body', form.body);
  data.append('image', form.image);

  axios.put('http://localhost:4000/v1/blog/post/' + id, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log('Update Success! ', response);
    })
    .catch((error) => {
      console.log('Update Error! ', error);
    });
}
