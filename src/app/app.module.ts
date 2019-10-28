import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, 
  MatDialogModule, MatListModule, MatTabsModule, MatChipsModule } from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { AppComponent } from './cards/app/app.component';
//import { HomeComponent } from './cards/home/home.component';
//import { GenViewComponent } from './cards/genView/genView.component';
//import { SpeciesCardComponent } from './cards/speciesCard/speciesCard.component';
//import { MoveCardComponent } from './cards/moveCard/moveCard.component'; */
//import { ColorService } from './services/color.service';
import { SortService } from './service/sortService.component';
import { TypeChipsComponent } from './type-chips/type-chips.component';

const routes: Routes = [
/*{ path: 'home', component: HomeComponent },
  { path: 'generation/:id', component: GenViewComponent },
  { path: 'species/:id', component: SpeciesCardComponent },
  { path: 'move/:id', component: MoveCardComponent }, */
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    //HomeComponent,
    //GenViewComponent,
    //SpeciesCardComponent,
    //MoveCardComponent, 
    TypeChipsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatTabsModule,
    MatChipsModule,
    RouterModule.forRoot(routes),
    //FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [ServiceComponent, SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
