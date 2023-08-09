export interface SearchBarConfig {
    id: string | undefined;
    label: string | undefined;
    placeholder: string | undefined;
    title: string| undefined;
}

export class DefaultSearchConfig implements SearchBarConfig {
    id: string | undefined;
    label: string | undefined;
    placeholder: string | undefined;
    title: string | undefined;

    constructor() {
        this.id = 'search',
        this.label = 'search-label',
        this.placeholder = 'Perform search here',
        this.title = 'Search'
    }
}


