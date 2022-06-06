import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { CaveModule } from './tools/cave/cave.module';
import { ToolModule } from './tools/tool.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    /** Shared */
    SharedModule,

    /** Pages */
    HomeModule,
    PortfolioModule,
    ToolModule,
    CaveModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
