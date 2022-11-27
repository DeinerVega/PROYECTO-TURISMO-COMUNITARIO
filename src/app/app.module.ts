import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';



import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AcordionComponent } from './Components/acordion/acordion.component';
import { CardsComponent } from './Components/cards/cards.component';
import { VideoComponent } from './Components/video/video.component';
import { AsideComponent } from './Components/aside/aside.component';
import { ColumnasComponent } from './Components/columnas/columnas.component';
import { UbicacionComponent } from './Components/ubicacion/ubicacion.component';
import { Card1Component } from './Components/card1/card1.component';



//Rutas
const routes: Routes = [
      {path: 'Columnas', component: ColumnasComponent},
        {path: 'Acordion', component: AcordionComponent},
        {path: 'Card', component: CardsComponent},
        {path: 'Video', component: VideoComponent},
        {path: 'Ubicacion', component: UbicacionComponent},
        {path: 'Card1', component: Card1Component},
        
  ];
  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AcordionComponent,
    CardsComponent,
    VideoComponent,
    AsideComponent,
    ColumnasComponent,
    UbicacionComponent,
    Card1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    YouTubePlayerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
