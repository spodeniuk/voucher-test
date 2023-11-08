import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

type InputProps = {
    ref?: ForwardedRef<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = forwardRef(
    ({ className, ...props }, ref) => (
        <input ref={ref} className={clsx(styles.root, className)} {...props} />
    )
);

Input.displayName = Input.name;
