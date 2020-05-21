import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '@shared/shared.module';
import { GameEngineComponent } from './game-engine/game-engine.component';

@NgModule({
    declarations: [MainComponent, LoginComponent, GameEngineComponent],
    exports: [MainComponent, LoginComponent, GameEngineComponent],
    imports: [SharedModule], 
    providers: []
})
export class ComponentsModule { }
 