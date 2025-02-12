import type { ChangeEvent } from 'react';
import React, { useEffect, useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DateInput } from '#src/components/input/DateInput';
import { withDesign } from 'storybook-addon-designs';
import { INPUT_DIMENSIONS_VALUES, INPUT_STATUS_VALUES } from '#src/components/input/types';
import { ReactComponent as CalendarSolidSVG } from '@admiral-ds/icons/build/system/CalendarSolid.svg';
import type { Theme } from '#src/components/themes';
import { ThemeProvider } from 'styled-components';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

export default {
  title: 'Admiral-2.1/Input/DateInput',
  component: DateInput,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53678',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53659',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
    },
    disabled: {
      control: { type: 'boolean' },
    },
    defaultIsCalendarOpen: { type: 'boolean' },
    value: { control: { type: 'text', disabled: true }, description: 'Значение DateInput' },
    onChange: {
      action: 'onChange',
    },
    displayStatusIcon: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    range: {
      control: false,
    },
    type: {
      options: ['date', 'date-range'],
      control: { type: 'radio' },
    },
    placeholder: {
      type: 'string',
    },
    minDate: {
      control: false,
    },
    maxDate: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    icon: {
      control: false,
    },
    icons: {
      control: false,
    },
    calendarRef: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    locale: {
      control: false,
    },
    startDate: {
      control: false,
    },
    endDate: {
      control: false,
    },
    validator: {
      control: false,
    },
    selected: {
      control: false,
    },
    tooltipContainer: {
      control: false,
    },
    currentActiveViewImportant: {
      control: { type: 'boolean' },
    },
    theme: {
      control: false,
    },
    as: {
      control: false,
    },
    forwardedAs: {
      control: false,
    },
    isVisible: {
      control: false,
    },
    onVisibilityChange: {
      control: false,
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
    currentActiveView: {
      options: [undefined, 'DAY', 'MONTH', 'YEAR'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = useState<string>(String(props.value) ?? '');
  useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <DateInput
        {...cleanProps}
        value={localValue}
        onChange={handleChange}
        placeholder={'Some placeholder'}
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
      />
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof DateInput> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [localValue, setValue] = useState<string>(String(props.value) ?? '');
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  const handleVisibilityChange = (newIsVisible: boolean) => {
    setIsVisible(newIsVisible);
  };

  const handleMonthClick = (date: any) => {
    console.log(`click on month ${date.toLocaleDateString()}`);
    setValue(date.toLocaleDateString());
    handleVisibilityChange(false);
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <DateInput
        {...cleanProps}
        isVisible={isVisible}
        onVisibilityChange={handleVisibilityChange}
        value={localValue}
        onChange={handleChange}
        placeholder={'Some placeholder'}
        style={{ maxWidth: 300 }}
        onMonthSelect={handleMonthClick}
        currentActiveViewImportant
        currentActiveView="MONTH"
      />
    </ThemeProvider>
  );
};

export const DateInputStory = Template.bind({});

DateInputStory.args = {};
DateInputStory.argTypes = { defaultIsCalendarOpen: { type: 'boolean' } };
DateInputStory.storyName = 'DateInput (input type="date")';

export const DateInputStory2 = Template.bind({});
DateInputStory2.args = { icon: CalendarSolidSVG };
DateInputStory2.storyName = 'DateInput альтернативная иконка';

export const DateInputStory3 = Template2.bind({});
DateInputStory3.args = {};
DateInputStory3.storyName = 'DateInput выбор месяца';
