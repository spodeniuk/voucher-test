import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { toast } from 'react-toastify';
import clsx from 'clsx';

import {
    Button,
    Icon,
    Input,
    InputWrapper,
    Modal,
    TextArea,
    SimpleUserItem,
    RangeSlider,
    VoucherCard,
} from '@/shared/components/ui';

import { SimpleUserItemType } from '@/shared/types';

import { CreateVoucherMocks } from './CreateVoucher.mocks';

import styles from './CreateVoucher.module.scss';

const RANGE_SLIDER_CONFIG = {
    max: 100000,
    min: 1000,
    step: 1000,
};

const DEFAULT_VALUES = {
    amount: 10000,
    friend: null,
    message: '',
    search: '',
};

type CreateVoucherModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const CreateVoucherModal: React.FC<CreateVoucherModalProps> = ({
    isOpen,
    onClose,
}) => {
    const { t } = useTranslation();

    const searchInputRef = useRef<null | HTMLInputElement>(null);

    const [isLoading, setIsLoading] = useState(false);

    const [searchValue, setSearchValue] = useState(DEFAULT_VALUES.search);

    const [amount, setAmount] = useState(DEFAULT_VALUES.amount);
    const [friend, setFriend] = useState<null | SimpleUserItemType>(
        DEFAULT_VALUES.friend
    );
    const [message, setMessage] = useState(DEFAULT_VALUES.message);

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setSearchValue(DEFAULT_VALUES.search);
                setAmount(DEFAULT_VALUES.amount);
                setFriend(DEFAULT_VALUES.friend);
                setMessage(DEFAULT_VALUES.message);
            }, 200);
        }
    }, [isOpen]);

    const onCreate = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            onClose();
            toast.success(t('createVoucherModal.successNotify'));
        }, 1000);
    };

    const onSelectFriend = (item: SimpleUserItemType) => {
        setFriend(friend && friend.phone === item.phone ? null : item);
    };

    const friendsList = useMemo(() => {
        if (!searchValue) return CreateVoucherMocks.friends;

        return CreateVoucherMocks.friends.filter(
            (item) =>
                item.fullName
                    .toLowerCase()
                    .replace(/\s/g, '')
                    .includes(searchValue.toLowerCase().replace(/\s/g, '')) ||
                item.phone
                    .replace(/\s/g, '')
                    .includes(searchValue.replace(/\s/g, ''))
        );
    }, [searchValue]);

    return (
        <Modal isOpen={isOpen} maxWidth={500} onClose={onClose}>
            <VoucherCard amount={amount} text={message} owner={friend} />
            <InputWrapper>
                <div className={styles.info}>
                    {t('createVoucherModal.amountLabel')}
                </div>
                <RangeSlider
                    value={amount}
                    onChange={(value) => setAmount(value as number)}
                    {...RANGE_SLIDER_CONFIG}
                />
            </InputWrapper>
            <div className={styles.search}>
                <Input
                    className={clsx({ [styles['can-clean']]: searchValue })}
                    ref={searchInputRef}
                    placeholder={t('createVoucherModal.searchPlaceholder')}
                    value={searchValue}
                    onChange={({ target }) => setSearchValue(target.value)}
                />
                <Icon
                    className={clsx(styles['clean-icon'], {
                        [styles['is-visible']]: searchValue,
                    })}
                    name="close"
                    onClick={setSearchValue.bind(null, '')}
                />
                <Icon
                    className={styles['search-icon']}
                    name="search"
                    onClick={() => searchInputRef.current?.focus()}
                />
            </div>
            <div className={styles.list}>
                {friendsList.length > 0 &&
                    friendsList.map((item) => (
                        <SimpleUserItem
                            className={styles.friend}
                            key={item.phone}
                            data={item}
                            isSelected={
                                friend !== null && item.phone === friend.phone
                            }
                            onClick={onSelectFriend.bind(null, item)}
                        />
                    ))}
                {friendsList.length === 0 && (
                    <div className={styles['empty-search']}>
                        {t('createVoucherModal.noResults')}
                    </div>
                )}
            </div>
            <InputWrapper>
                <TextArea
                    rows={3}
                    placeholder={t('createVoucherModal.messagePlaceholder')}
                    maxLength={70}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className={styles.info}>
                    {t('createVoucherModal.messageInfo')}
                </div>
            </InputWrapper>
            <Button
                className={styles.button}
                onClick={onCreate}
                isLoading={isLoading}
                isDisabled={friend === null}
            >
                {t('createVoucherModal.button')}
            </Button>
        </Modal>
    );
};
