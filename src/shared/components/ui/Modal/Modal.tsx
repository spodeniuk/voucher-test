import React, { ReactNode } from 'react';
import clsx from 'clsx';

import { Icon } from '../Icon/Icon';

import styles from './Modal.module.scss';

type OverlayProps = {
    isVisible: boolean;
    children: ReactNode;
};

const Overlay: React.FC<OverlayProps> = ({ children, isVisible }) => (
    <div
        className={clsx(styles.overlay, { [styles['is-visible']]: isVisible })}
    >
        {children}
    </div>
);

type ModalCloseIconProps = {
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const ModalCloseIcon: React.FC<ModalCloseIconProps> = ({ onClick }) => (
    <Icon name="close" className={styles.close} onClick={onClick} />
);

type ModalProps = {
    className?: string;
    isOpen: boolean;
    maxWidth: number;
    children: ReactNode;
    closeable?: boolean;
    onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({
    className,
    isOpen,
    maxWidth,
    onClose,
    closeable = true,
    children,
}) => (
    <Overlay isVisible={isOpen}>
        <div
            className={clsx(styles.modal, className, {
                [styles['is-open']]: isOpen,
            })}
            style={{ maxWidth }}
        >
            {closeable && <ModalCloseIcon onClick={onClose} />}
            {children}
        </div>
    </Overlay>
);
