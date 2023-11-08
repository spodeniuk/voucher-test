import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Preloader } from '../Preloader/Preloader';

import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
    isDisabled?: boolean;
    children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    isLoading,
    isDisabled,
    ...props
}) => (
    <button
        className={clsx(styles.root, className, {
            [styles['is-disabled']]: isDisabled,
        })}
        {...props}
    >
        {isLoading ? <Preloader /> : children}
    </button>
);
