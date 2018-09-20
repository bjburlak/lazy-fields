import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CodeGenComponent } from './code-gen/code-gen.component';
import { CodeGenService } from './code-gen/service/code-gen.service';
import { AddPipe } from './pipes/add.pipe';
import { StripPipe } from './pipes/strip-space.pipe';
import { TypePaddingPipe } from './pipes/type-padding.pipe';
import { RowStateManagerComponent } from './sql-fields/row-state-manager/row-state-manager.component';
import { RowStateComponent } from './sql-fields/row-state/row-state.component';

@NgModule({
  declarations: [
    AddPipe,
    AppComponent,
    CodeGenComponent,
    RowStateComponent,
    RowStateManagerComponent,
    StripPipe,
    TypePaddingPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [
    CodeGenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
