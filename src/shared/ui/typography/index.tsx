import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

import {
    BodyVariant,
    ButtonVariant,
    FieldVariant,
    HeadingVariant,
    TagVariant
} from './lib/types';
import { classNames } from '@shared/lib/class-names';
import { getTypographyStyles } from './lib/get-typography-styles';

type TypographyProps = {
    tag?: TagVariant;
} & (
    | {
          type: 'heading';
          variant: HeadingVariant;
      }
    | {
          type: 'body';
          variant: BodyVariant;
      }
    | {
          type: 'field';
          variant: FieldVariant;
      }
    | {
          type: 'button';
          variant: ButtonVariant;
      }
) &
    HTMLAttributes<HTMLHeadingElement | HTMLSpanElement | HTMLParagraphElement>;

export const Typography = ({
    // для семантической вёрстки, есть возможность отправки тэга с помощью tag
    tag: Tag = 'p',
    type,
    variant,
    children,
    className,
    ...rest
}: PropsWithChildren<TypographyProps>): ReactElement => {
    return (
        <Tag
            className={classNames(
                getTypographyStyles(type, variant),
                className
            )}
            {...rest}
        >
            {children}
        </Tag>
    );
};
