import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggingTableComponent } from './logging-table/logging-table.component';
import { Routes } from '@angular/router';
import { LoggingServiceService } from './logging-service.service';
import { HttpClientModule, HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoggingTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoggingServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}

