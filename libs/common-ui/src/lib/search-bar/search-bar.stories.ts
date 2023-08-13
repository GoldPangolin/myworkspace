import { SelectModule } from './../select/select.module';
import { SearchConfig } from './search-bar.model';
import { SearchBarModule } from './search-bar.module';
import { SearchBarComponent } from './search-bar.component';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';

export const actionsData = {
    submitSearch: action('submitSearch'),
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
                CommonModule,
                SelectModule,
            ]
        })
    ],
    render: (args: SearchBarComponent) => ({
        props: {
            ...args,
            submitSearch: actionsData.submitSearch,
            searchEvent: actionsData.searchEvent,
            typeAhead: actionsData.typeAhead,
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

export const WithInputs: Story = {
    args: {
         config : new SearchConfig(
           {
            title: 'Custom Search',
            id : 'Custom-Search-Id',
            placeholder: "My Custom Place Holder",
            label: "cusom Label",
            typeAhead: true,
            })
         ,
         validators: undefined,
         asyncValidators: undefined
    }
}