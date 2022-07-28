import './small-button.scss';

const SmallButton = ({ title, ...rest }) => {
  return (
    <div>
      <button {...rest}>{title}</button>
    </div>
  );
};
export default SmallButton;
