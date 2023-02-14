
import cls from './Button.module.scss'
import {classNames} from "shared/lib/className/classNames";
import {ButtonHTMLAttributes, FC} from "react";


export enum ThemeButton {
    CLEAR = 'clear',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?:ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {children,className,theme, ...otherProp} = props
    return (
        <button
           className={classNames(cls.button,{theme},[className, cls[theme]])}
           {...otherProp}
        >
            {children}
        </button>
    );
};


