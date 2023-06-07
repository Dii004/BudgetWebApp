import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sites/home/home.component';
import { UpdateComponent } from './sites/update/update.component';
import { TransaktionComponent } from './sites/transaktion/transaktion.component';
import { ReportComponent } from './sites/report/report.component';
import { SendmanyComponent } from './sites/sendmany/sendmany.component';
import { DetailtransaktionComponent } from './sites/detailtransaktion/detailtransaktion.component';
import { ImageUploadComponent } from './sites/image-upload/image-upload.component';
import { FileUploadComponent } from './sites/file-upload/file-upload.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent
    },
   { path: 'update', component: UpdateComponent
  },
  {path:'transaktion', component: TransaktionComponent},
  {path:'report', component: ReportComponent},
  {path:'sendmany', component: SendmanyComponent},
  {path:'detailtransaktion', component: DetailtransaktionComponent},
  {path:'image-upload', component: ImageUploadComponent},
  {path:'file-upload', component: FileUploadComponent},



  {path:'', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
