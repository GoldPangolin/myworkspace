import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: 'nx-welcome',
        component: NxWelcomeComponent,
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
        redirectTo: 'nx-welcome'
    }
];
