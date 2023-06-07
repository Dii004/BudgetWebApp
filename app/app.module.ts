import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './sites/home/home.component';
import { UpdateComponent } from './sites/update/update.component';
import { TransaktionComponent } from './sites/transaktion/transaktion.component';
import { DetailtransaktionComponent } from './sites/detailtransaktion/detailtransaktion.component';
import { ReportComponent } from './sites/report/report.component';
import { SendmanyComponent } from './sites/sendmany/sendmany.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from './sites/image-upload/image-upload.component';
import { FileUploadComponent } from './sites/file-upload/file-upload.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data.service';
import { TranslationIdComponent } from './sites/translation-id/translation-id.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { DisplayedsendmanyComponent } from './sites/sendmany/displayedsendmany/displayedsendmany.component';
import { VystupnatabulkaComponent } from './sites/sendmany/vystupnatabulka/vystupnatabulka.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateComponent,
    TransaktionComponent,
    DetailtransaktionComponent,
    ReportComponent,
    SendmanyComponent,
    ImageUploadComponent,
    FileUploadComponent,
    TranslationIdComponent,
    DisplayedsendmanyComponent,
    VystupnatabulkaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService , { dataEncapsulation: false }
),
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
