import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';

export const appRoutes: Route[] = [
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: 'admin',
        component:AdminPanelComponent
    },
    // {
    //     path: 'pages',
    //     component: PagesComponent,
    //     children: [
    //         {
    //             path: 'tutorials:id',
    //             component: TutorialsPageComponent
    //         },
    //         {
    //             path: 'self-help:id',
    //             component: SelfHelpComponent
    //         }
    //     ]
    // },
    // {
    //     path: 'navigation',
    //     component: NavigationComponent,

    // },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
