import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailPipe } from './email.pipe';
import { NavbarComponent } from './comonenets/navbar/navbar.component';
import { SidemenuComponent } from './comonenets/sidemenu/sidemenu.component';
import { ArticlesComponent } from './comonenets/articles/articles.component';
import { ArticleComponent } from './comonenets/article/article.component';
import { ParentComponent } from './comonenets/parent/parent.component';
import { ChildComponent } from './comonenets/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailPipe,
    NavbarComponent,
    SidemenuComponent,
    ArticlesComponent,
    ArticleComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
