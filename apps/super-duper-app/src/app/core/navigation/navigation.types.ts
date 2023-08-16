import { IsActiveMatchOptions, Params, QueryParamsHandling } from "@angular/router";


export interface NavigationItem {
    id?: string;
    title?: string;
    subtitle?: string;
    type: | 'aside' | 'basic' | 'collapsable' | 'divider' | 'group' | 'spacer';
    hidden?: (itme: NavigationItem)=> boolean;
    active?: boolean;
    disabled?: boolean;
    tooltip?: string;
    link?: string;
    queryParams?: Params | null,
    queryParamsHandling?: QueryParamsHandling | null;
    exactMatch?: boolean;
    children?: NavigationItem[];
}

export type NavigationAppearance = 
 'default' | 'compact';

export type NavigationMode = 'expanded' | 'contracted';