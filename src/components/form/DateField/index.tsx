import type { FieldOwnProps } from '#src/components/Field';
import { Field } from '#src/components/Field';
import type { DateInputProps } from '#src/components/input/DateInput';
import { DateInput } from '#src/components/input/DateInput';
import * as React from 'react';
import { uid } from '#src/components/common/uid';

export interface DateFieldProps extends DateInputProps, Omit<FieldOwnProps, 'inputRef'> {}

export const DateField = React.forwardRef<HTMLInputElement, DateFieldProps>((props, ref) => {
  const {
    className,
    displayInline,
    status,
    required,
    extraText,
    label,
    id = uid(),
    name,
    disabled,
    ...restProps
  } = props;

  const fieldContainerProps = {
    className,
    extraText,
    status,
    required,
    label,
    id,
    'data-field-id': id,
    'data-field-name': name,
    displayInline,
    disabled,
  } as Record<string, any>;

  (Object.keys(restProps) as Array<keyof typeof restProps>).forEach((key) => {
    if (key.startsWith('data-field')) {
      fieldContainerProps[key] = restProps[key];
    }
  });

  const inputProps = { ref, id, name, 'aria-required': required, status, disabled, ...restProps };
  return (
    <Field {...fieldContainerProps}>
      <DateInput {...inputProps} />
    </Field>
  );
});

DateField.displayName = 'DateField';
