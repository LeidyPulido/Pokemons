import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { ServiceComponent } from './service/service.component';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, 
  MatDialogModule, MatListModule, MatTabsModule, MatChipsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { ViewComponent } from './pages/View/View.component';
import { SpeciesCardsComponent } from './pages/species-cards/species-cards.component';
import { MoveCardsComponent } from './pages/move-cards/move-cards.component'; 
//import { ColorService } from './services/color.service';
import { SortService } from './service/sortService.component';
import { TypeChipsComponent } from './type-chips/type-chips.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'generation/:id', component: ViewComponent },
  { path: 'species/:id', component: SpeciesCardsComponent },
  { path: 'move/:id', component: MoveCardsComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    PokemonsComponent,
    ServiceComponent,
    HomeComponent,
    ViewComponent,
    SpeciesCardsComponent,
    MoveCardsComponent, 
    TypeChipsComponent,
    PokemonsComponent
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
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [ServiceComponent, SortService],
  bootstrap: [PokemonsComponent]
})
export class AppModule { }
