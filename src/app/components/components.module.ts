import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '@shared/shared.module';
import { GameEngineComponent } from './game-engine/game-engine.component';
import { TechnologiesInfoComponent } from './technologies-info/technologies-info.component';

@NgModule({
    declarations: [MainComponent, LoginComponent, GameEngineComponent, TechnologiesInfoComponent],
    exports: [MainComponent, LoginComponent, GameEngineComponent, TechnologiesInfoComponent],
    imports: [SharedModule], 
    providers: []
})
export class ComponentsModule { }
  