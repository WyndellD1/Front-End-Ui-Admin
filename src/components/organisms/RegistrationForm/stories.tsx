import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import {
  RegistrationForm,
  PersonalInformation,
  EducationalBackground,
  EmergencyContact,
} from '.';
import { Props as RegistrationFormProps } from './Component';
import { Props as PersonalInformationProps } from './PersonalInformation';
import { Props as EducationalBackgroundProps } from './EducationalBackground';
import { Props as EmergencyContactProps } from './EmergencyContact';

export default {
  title: 'Organisms/RegistrationForm',
  component: RegistrationForm,
} as Meta;

const Template: Story<RegistrationFormProps> = (
  props: RegistrationFormProps,
) => {
  return (
    <BrowserRouter>
      <RegistrationForm {...props} onRegister={() => {}} />
    </BrowserRouter>
  );
};

const PersonalInformationTemplate: Story<PersonalInformationProps> = () => (
  <BrowserRouter>
    <PersonalInformation />
  </BrowserRouter>
);

const EducationalBackgroundTemplate: Story<EducationalBackgroundProps> = () => {
  const [, setValue] = useState<Date | null>(new Date());
  const handleChangeValue = (value: any) => {
    setValue(value);
  };

  return (
    <BrowserRouter>
      <EducationalBackground
        onChangeEducationStatus={handleChangeValue}
        onChangeDateAttended={handleChangeValue}
        formValues={{ date: new Date(), educationStatus: 'student' }}
      />
    </BrowserRouter>
  );
};

const EmergencyContactTemplate: Story<EmergencyContactProps> = () => (
  <BrowserRouter>
    <EmergencyContact />
  </BrowserRouter>
);

export const RegisterForm = Template.bind({});
RegisterForm.args = {};

export const PersonalInformationForm = PersonalInformationTemplate.bind({});
PersonalInformationForm.args = {};

export const EducationalBackgroundForm = EducationalBackgroundTemplate.bind({});
PersonalInformationForm.args = {};

export const EmergencyContactForm = EmergencyContactTemplate.bind({});
PersonalInformationForm.args = {};
