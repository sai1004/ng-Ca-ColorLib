import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipe } from './pipes/custom.pipe';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [CustomPipe],
  imports: [CommonModule, MaterialModule,FormsModule],
  exports: [MaterialModule,FormsModule],
})
export class SharedModule {}
