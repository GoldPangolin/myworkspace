import { SearchBarModule } from './search-bar.module';
import { SearchBarComponent } from './search-bar.component';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';

export const actionsData = {
    submitSeach: action('submitSearch'),
    searchEvent: action('searchEvent'),
    typeAhead: action('typeAhead'),
};

const meta: Meta<SearchBarComponent> = {
    title: 'Search Bar Component',
    component: SearchBarComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                SearchBarModule,
                CommonModule
            ]
        })
    ],
    render: (args: SearchBarComponent) => ({
        props: {
            ...args,
            submitSearch: actionsData.submitSeach,
            searchEvent: actionsData.searchEvent,
            typeAhead: actionsData.typeAhead
        },
    }),
};

export default meta;

type Story = StoryObj<SearchBarComponent>;

export const Default: Story = {
    args: {
         config : undefined,
         validators: undefined,
         asyncValidators: undefined
    }
}