import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { SelectComponent } from './select.component';

export const actionsData = {
    optionSelectedEvent: action('optionSelectedEvent'),
}

const meta: Meta<SelectComponent> = {
    title: "Select Component",
    component: SelectComponent,
    tags: ['autodocs'],
    render: (args: SelectComponent) => ({
        props: {
            ...args,
            optionSelectedEvent: actionsData.optionSelectedEvent,
        },
    }),
};

export default meta;

type Story = StoryObj<SelectComponent>;

export const Default: Story = {
    args: {
        options: []
    }
}

export const WithOptions: Story ={
    args: {
        options: [
            {
                title: 'A-Z',
                value: 'A-Z'
            },
            {
                title: 'Z-A',
                value: 'Z-A'
            }
        ]
    }
}