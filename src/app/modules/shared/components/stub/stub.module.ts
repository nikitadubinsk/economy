import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StubComponent } from './stub.component';

@NgModule({
  declarations: [StubComponent],
  exports: [StubComponent],
  imports: [CommonModule, RouterModule],
})
export class StubModule {}
