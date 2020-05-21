import { NgModule } from '@angular/core';
import { SocketControllerService } from './services/socket-controller.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  
  declarations: [],
  imports: [HttpClientModule],
  providers: [SocketControllerService],
  bootstrap: []
})
export class SharedModule { }
