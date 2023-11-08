import React from 'react';
import clsx from 'clsx';

import styles from './Preloader.module.scss';

type PreloaderProps = {
    className?: string;
};

export const Preloader: React.FC<PreloaderProps> = ({ className }) => (
    <div className={clsx(styles.root, className)}>
        <span className={styles.circle} />
    </div>
);
