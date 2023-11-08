import clsx from 'clsx';

import styles from './InputWrapper.module.scss';

type InputWrapperProps = {
    className?: string;
    children: React.ReactNode;
};

export const InputWrapper: React.FC<InputWrapperProps> = ({
    className,
    children,
}) => <div className={clsx(className, styles.root)}>{children}</div>;
