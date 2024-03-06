import {
    BODY_STYLES,
    BUTTON_STYLES,
    FIELD_STYLES,
    HEADING_STYLES
} from './contants';
import {
    BodyVariant,
    ButtonVariant,
    FieldVariant,
    HeadingVariant,
    TypographyType
} from './types';

export const getTypographyStyles = (
    type: TypographyType,
    variant: HeadingVariant | BodyVariant | FieldVariant | ButtonVariant
): string => {
    switch (type) {
        case 'heading':
            return HEADING_STYLES[variant as HeadingVariant];
        case 'body':
            return BODY_STYLES[variant as BodyVariant];
        case 'field':
            return FIELD_STYLES[variant as FieldVariant];
        case 'button':
            return BUTTON_STYLES[variant as ButtonVariant];
    }
};
