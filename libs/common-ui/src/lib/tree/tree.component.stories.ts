import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TreeComponent } from './tree.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { TreeModule } from './tree.module';
import { NodeToggleDirective } from './tree.directive';
import { CommonModule } from '@angular/common';

const meta: Meta<TreeComponent> =  {
    title: 'Tree Component',
    component: TreeComponent,
    decorators: [
        moduleMetadata({
            imports :[
                TreeModule,
                CommonModule,
            ],
        })
    ]
};
export default meta;
type Story = StoryObj<TreeComponent>;

export const TreeData: Story = {
    args: {
        treeData: {
            nodeName: 'Root',
            expanded: true,
            icon: 'Folder',
            children: [
                {
                    nodeName: 'Documents',
                    expanded: false,
                    icon: 'Folder',
                    children: [
                        {
                            nodeName: 'Resume.pdf',
                            expanded: false,
                            icon: 'File',
                            children: []
                        },
                        {
                            nodeName: 'Links',
                            expanded: true,
                            icon: 'Folder',
                            children: [
                                {
                                    nodeName: 'OpenAI Website',
                                    expanded: false,
                                    icon: 'Link',
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    nodeName: 'Images',
                    expanded: true,
                    icon: 'Folder',
                    children: [
                        {
                            nodeName: 'Vacation.jpg',
                            expanded: false,
                            icon: 'File',
                            children: []
                        }
                    ]
                }
            ]
        }
    },
    play: async({canvasElement}) => {
        const canvas = within(canvasElement);
    }
}