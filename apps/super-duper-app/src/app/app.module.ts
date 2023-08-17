import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { CommonUiModule } from './../../../../libs/common-ui/src/lib/common-ui.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { SuperLayoutComponent } from './layout/super-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { StoreModule } from '@ngrx/store';
import { metaReducers, rootReducers } from './root-reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { SuperDuperAnimationsModule } from 'libs/common-ui/src/lib/animations/animations.module';
import { NavigationModule } from './core/navigation/navigation.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SuperLayoutComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonUiModule,
    SuperDuperAnimationsModule,
    NavigationModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    // StoreModule.forRoot(rootReducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateSerializability: true,
    //     strictActionSerializability: true,
    //     strictActionWithinNgZone: true,
    //     strictActionTypeUniqueness: true,
    //   }
    // }),
    // StoreRouterConnectingModule.forRoot(),
    // StoreDevtoolsModule.instrument({
    //   name: 'Super Duper App'
    // }),
    // EffectsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
