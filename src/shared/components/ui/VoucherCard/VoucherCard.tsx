import React, { useMemo } from 'react';
import clsx from 'clsx';

import { SimpleUserItemType, VoucherCardEnum } from '@/shared/types';

import styles from './VoucherCard.module.scss';

type VoucherCardProps = {
    className?: string;
    amount: number;
    text: string;
    owner: SimpleUserItemType | null;
};

export const VoucherCard: React.FC<VoucherCardProps> = ({
    className,
    amount,
    owner,
    text,
}) => {
    const type = useMemo(() => {
        if (amount > 25000 && amount <= 65000) return VoucherCardEnum.Gold;
        if (amount > 65000) return VoucherCardEnum.Platinum;
        return VoucherCardEnum.Standard;
    }, [amount]);

    return (
        <div
            className={clsx(
                className,
                styles.root,
                {
                    [styles['is-gold']]: type === VoucherCardEnum.Gold,
                },
                {
                    [styles['is-platinum']]: type === VoucherCardEnum.Platinum,
                }
            )}
        >
            <div className={styles.amount}>{amount} ₴</div>
            <div className={styles.type}>{type}</div>
            {owner && <div className={styles.owner}>{owner.fullName}</div>}
            {text && <div className={styles.message}>{text}</div>}
        </div>
    );
};
