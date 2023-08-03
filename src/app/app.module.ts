import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importar componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AboutComponent } from './components/about/about.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { TestimonioComponent } from './components/testimonio/testimonio.component';
import { DevsComponent } from './components/devs/devs.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    MenuComponent,
    ReservaComponent,
    ContactoComponent,
    AboutComponent,
    GaleriaComponent,
    TestimonioComponent,
    DevsComponent,
      LoginComponent,
      RegistrarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
