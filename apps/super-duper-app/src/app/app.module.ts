import { CommonUiModule } from './../../../../libs/common-ui/src/lib/common-ui.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { SuperLayoutComponent } from './layout/super-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, SuperLayoutComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    CommonUiModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NotFoundComponent],
})
export class AppModule {}
