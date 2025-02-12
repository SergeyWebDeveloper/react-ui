import { LIGHT_THEME } from '#src/components/themes';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent, { specialChars } from '@testing-library/user-event';

import { CheckboxField } from '#src/components/form';

describe('CheckboxField', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const CheckboxFieldRequiredProps = {
    onChange: jest.fn(),
    checked: false,
    id: 'checkboxField',

    'data-testid': 'element',
  };

  it('should render component with required properties', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <CheckboxField {...CheckboxFieldRequiredProps}>text</CheckboxField>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with disabled state', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <CheckboxField {...CheckboxFieldRequiredProps} disabled>
          text
        </CheckboxField>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with small dimension', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <CheckboxField {...CheckboxFieldRequiredProps} dimension="s">
          text
        </CheckboxField>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChange when user clicks on component', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <CheckboxField {...CheckboxFieldRequiredProps}>text</CheckboxField>
      </ThemeProvider>,
    );
    fireEvent.click(wrapper.getByTestId('element'));
    const { onChange } = CheckboxFieldRequiredProps;
    expect(onChange).toBeCalledTimes(1);
  });

  it('should focus input if user press Tab key', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <CheckboxField {...CheckboxFieldRequiredProps}>text</CheckboxField>
      </ThemeProvider>,
    );
    const [radio] = screen.getAllByTestId('element');
    userEvent.tab();
    expect(radio).toHaveFocus();
  });

  it('should call onChange if input is focused and user press Space key', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <CheckboxField {...CheckboxFieldRequiredProps}>text</CheckboxField>
      </ThemeProvider>,
    );
    const [CheckboxFieldHTMLElement] = screen.getAllByTestId('element');
    userEvent.tab();
    userEvent.type(CheckboxFieldHTMLElement, specialChars.space);
    const { onChange } = CheckboxFieldRequiredProps;
    expect(onChange).toBeCalledTimes(2);
  });
});
