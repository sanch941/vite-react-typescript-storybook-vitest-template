import {
    BodyVariant,
    ButtonVariant,
    FieldVariant,
    HeadingVariant
} from './types';

export const HEADING_STYLES: Record<HeadingVariant, string> = {
    h1: '',
    h2: '',
    h3: '',
    h4: ''
};

export const BODY_STYLES: Record<BodyVariant, string> = {
    subheading: '',
    textB: '',
    textM: '',
    textR: '',
    captionM: '',
    captionR: '',
    captionB: ''
};

export const FIELD_STYLES: Record<FieldVariant, string> = {
    label: '',
    footnote: '',
    placeholder16: '',
    placeholder14: '',
    account16: '',
    account14: '',
    sumBold18: '',
    sumBold16: '',
    regular18: '',
    regular16: ''
};

export const BUTTON_STYLES: Record<ButtonVariant, string> = {
    textM16: 'text-[16px] font-semibold leading-[16px]',
    textR16: 'text-[16px] font-normal leading-[16px]',
    textM14: 'text-[14px] font-semibold leading-[14px]',
    textR14: 'text-[14px] font-normal leading-[14px]'
};
