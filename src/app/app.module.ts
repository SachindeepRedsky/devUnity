import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FilterComponent } from './shared/filter/filter.component';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        FilterComponent
    ],
    imports: [
        BrowserModule,
        CommonModule // Add CommonModule to imports
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
