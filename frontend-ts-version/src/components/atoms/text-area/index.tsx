import React from 'react';
import './text-area.scss';
export interface TextAreaProps {
  className?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  handleChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ className, handleChange, placeholder, value }: TextAreaProps) => {
    return (
        <div>
            <textarea
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default TextArea;
