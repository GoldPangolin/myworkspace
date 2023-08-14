import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Route[] = [
    {
        path: 'not-found',
        component: NotFoundComponent
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
