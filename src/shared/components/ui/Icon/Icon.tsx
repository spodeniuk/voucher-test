import clsx from 'clsx';

import { IconsId } from '@/shared/types';

import styles from './Icon.module.scss';

type IconProps = {
    name: IconsId;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export const Icon: React.FC<IconProps> = ({ name, className, onClick }) => (
    <i onClick={onClick} className={clsx(`icon-${name}`, className, styles.root)} />
);