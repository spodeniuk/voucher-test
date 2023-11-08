import React, { TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './TextArea.module.scss';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {};

export const TextArea: React.FC<TextareaProps> = ({ className, ...props }) => (
    <textarea className={clsx(styles.root, className)} {...props} />
);
