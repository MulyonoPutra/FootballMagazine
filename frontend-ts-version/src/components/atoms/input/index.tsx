import './input.scss';

export interface InputProps {
  className?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ className, handleChange, placeholder, value }: InputProps) => {
  return (
    <div>
      <input
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
