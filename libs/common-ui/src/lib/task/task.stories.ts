import type {Meta, StoryObj} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { TaskComponent } from './task.component';

// actions are stubs.
// Stubs provide predefined responses to method calls, replacing the actual implementation of those dependencies with something simpler that you have full control over.


export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

const meta: Meta<TaskComponent> = {
    title: 'Task',
    component: TaskComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: TaskComponent) => ({
        props: {
            ...args,
            onPinTask: actionsData.onPinTask,
            onArchiveTask: actionsData.onArchiveTask
        },
    }),
};

export default meta;

type Story = StoryObj<TaskComponent>;

export const Default: Story = {
    args: {
        task: {
            id: '1',
            title: 'Test Task',
            state: 'TASK_INBOX',
        }
    }
};
// video explaining args
// https://www.youtube.com/watch?v=0gOfS6K0x0E&ab_channel=Chromatic
export const Pinned: Story = {
    args: {
        task: {
            ...Default.args?.task,
            state: 'TASK_PINNED',
        }
    }
};

export const Archived: Story = {
    args: {
        task: {
            ...Default.args?.task,
            state: 'TASK_ARCHIVED',
        }
    }
};