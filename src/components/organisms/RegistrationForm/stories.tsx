import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { RegistrationForm } from '.';
import { Props } from './RegistrationForm';

export default {
  title: 'Organisms/RegistrationForm',
  component: RegistrationForm,
} as Meta;

const Template: Story<Props> = () => {
  const [, setValue] = useState<Date | null>(new Date());
  const handleChangeValue = (value: any) => {
    setValue(value);
  };

  return (
    <RegistrationForm onChange={handleChangeValue} onRegister={() => {}} />
  );
};

export const RegisterForm = Template.bind({});
RegisterForm.args = {};
