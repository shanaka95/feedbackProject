import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AdminComponent } from './admin/admin.component';
import { UiComponent } from './ui/ui.component'
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AdminComponent,
    UiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatStepperModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    ChartsModule,
    MatGridListModule,
    MatTabsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
