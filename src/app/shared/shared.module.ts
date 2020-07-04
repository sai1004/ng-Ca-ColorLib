import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipe } from './pipes/custom.pipe';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [CustomPipe],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule],
})
export class SharedModule {}
