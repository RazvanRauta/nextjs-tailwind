import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from '@/components/buttons/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{'Button'}</Button>
);

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
};
