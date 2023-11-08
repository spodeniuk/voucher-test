import React from 'react';
import clsx from 'clsx';

import { SimpleUserItemType } from '@/shared/types';

import styles from './SimpleUserItem.module.scss';

type SimpleUserItemProps = {
    className?: string;
    data: SimpleUserItemType;
    isSelected: boolean;
    onClick: () => void;
};

export const SimpleUserItem: React.FC<SimpleUserItemProps> = ({
    isSelected,
    className,
    data,
    onClick,
}) => {
    return (
        <div className={clsx(styles.root, className)} onClick={onClick}>
            <div className={styles.body}>
                <div className={styles.name}>{data.fullName}</div>
                <div className={styles.phone}>{data.phone}</div>
            </div>
            <div
                className={clsx(styles.icon, {
                    [styles['is-selected']]: isSelected,
                })}
            />
        </div>
    );
};
