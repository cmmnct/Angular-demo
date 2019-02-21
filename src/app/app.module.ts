import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ColorpatchModule} from './colorpatch/colorpatch.module';
import { MemorygameModule } from './memory/memorygame.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorpatchModule,
    MemorygameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
