import BaseButton from './BaseButton.vue';
import type { ButtonSize, ButtonView, PinType } from './BaseButton.types';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 's', 'm', 'l', 'xl'] satisfies ButtonSize[] },
    view: {
      control: 'select',
      options: [
        'normal',
        'action',
        'raised',
        'outlined',
        'flat',
        'flat-action',
        'flat-info',
        'flat-success',
        'flat-warning',
        'flat-danger',
        'flat-utility',
        'outlined-action',
        'outlined-info',
        'outlined-success',
        'outlined-warning',
        'outlined-danger',
        'outlined-utility',
        'normal-contrast',
        'action-contrast',
        'raised-contrast',
      ] satisfies ButtonView[],
    },
    pin: {
      control: 'select',
      options: [
        'round-round',
        'round-brick',
        'round-circle',
        'brick-round',
        'brick-brick',
        'brick-circle',
        'circle-round',
        'circle-brick',
        'circle-circle',
      ] satisfies PinType[],
    },
    width: { control: 'select', options: ['auto', 'max'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    selected: { control: 'boolean' },
    component: { control: 'select', options: ['button', 'router-link', 'a'] },
    href: { control: 'text' },
    qa: { control: 'text' },
    default: {
      description: 'Содержимое кнопки',
      control: 'text',
    },
  },
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: 'Click me',
  },
};
