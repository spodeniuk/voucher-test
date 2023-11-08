import React, { ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';

import Slider, { SliderRef, SliderProps } from 'rc-slider';

import styles from './RangeSlider.module.scss';

type RangeSliderProps = SliderProps & {
    ref?: ForwardedRef<SliderRef>;
};

export const RangeSlider: React.FC<RangeSliderProps> = forwardRef(
    ({ className, ...props }, ref) => (
        <Slider ref={ref} className={clsx(styles.root, className)} {...props} />
    )
);

RangeSlider.displayName = RangeSlider.name;
