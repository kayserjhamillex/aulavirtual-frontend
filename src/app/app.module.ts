import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// componentes
import { AppComponent } from './app.component';

// los modulos
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { ApplModule } from './appl/appl.module';
// para el servidor apirest
import { HttpClientModule } from '@angular/common/http';
// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// para corregir el error del refresheo
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// para login
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AuthModule,
    ApplModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '126510371816-nbtdi0b0oa8ek49106dgi42jqn0vapa7.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
