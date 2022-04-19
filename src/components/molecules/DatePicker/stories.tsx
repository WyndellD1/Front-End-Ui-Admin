import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { DatePicker } from '.';
import { Props } from './DatePicker';

export default {
  title: 'Molecules/DatePicker',
  component: DatePicker,
} as Meta;

const Template: Story<Props> = () => {
  const [value, setValue] = useState<Date | null>(new Date());
  const handleChangeValue = (value: any) => {
    setValue(value);
  };

  return (
    <DatePicker
      label="Date"
      initialValue={value}
      onChange={handleChangeValue}
    />
  );
};

export const DatePickerInput = Template.bind({});
DatePickerInput.args = {};
