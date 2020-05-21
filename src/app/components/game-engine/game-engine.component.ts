import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GameEngineService } from '@shared/services/game-engine.service';

@Component({
  selector: 'app-game-engine',
  templateUrl: './game-engine.component.html',
  styleUrls: ['./game-engine.component.scss']
})
export class GameEngineComponent implements OnInit {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(public engineService: GameEngineService) { }

  public ngOnInit(): void {
    this.engineService.createScene(this.rendererCanvas);
    //this.engineService.animate();
  }

}
