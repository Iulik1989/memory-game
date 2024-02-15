import React from 'react';
import { ButtonProps } from "./Button.interface.ts";
import './styles.css'

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button className="styledButton" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
