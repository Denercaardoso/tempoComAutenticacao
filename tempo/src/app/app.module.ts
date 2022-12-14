import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempoAtualComponent } from './tempo-atual/tempo-atual.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscaCidadeComponent } from './busca-cidade/busca-cidade.component'
import { TempoService } from './tempo/tempo.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';


@NgModule({
  declarations: [
    AppComponent,
    TempoAtualComponent,
    BuscaCidadeComponent,
    NotFoundComponent,
    TelaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TempoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
