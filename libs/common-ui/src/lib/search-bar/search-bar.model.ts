import { TemplateRef } from "@angular/core";
import { SelectOption } from "../select/select.model";

export interface SearchBarConfiOptions {
    id?: string | undefined;
    label?: string | undefined;
    placeholder?: string | undefined;
    title?: string| undefined;
    typeAhead?: boolean | undefined;
    sortOptions?: SelectOption[] | undefined;
}

export class SearchConfig implements SearchBarConfiOptions {
    id: string | undefined;
    label: string | undefined;
    placeholder: string | undefined;
    title: string | undefined;
    typeAhead: boolean | undefined;
    sortOptions: SelectOption[] | undefined;

    constructor(
        options?: SearchBarConfiOptions
    ) {
        this.id = options?.id ?? 'search';
        this.label = options?.label ??'search-label';
        this.placeholder = options?.placeholder ?? 'Perform search here';
        this.title = options?.title ?? 'Search';
        this.typeAhead = options?.typeAhead ?? false;
        this.sortOptions = options?.sortOptions ?? undefined;
    }
}

export interface TypeAheadResult {
    icon?: string;
    title: string;
    url?: string;
    html?: TemplateRef<unknown>;
    imageUrl?: string;
    expandable?: boolean;
    expandableContent?: TemplateRef<unknown>;
    expandableContentText?: string;
    isExpanded?: boolean;
    relevanceScore?: number;
    additionalFields?: any[];
}

