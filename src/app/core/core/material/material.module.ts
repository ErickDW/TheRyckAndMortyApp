import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTooltipModule,
    MatRippleModule,
    MatTabsModule,
  ],
  exports: [
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTooltipModule,
    MatRippleModule,
    MatTabsModule,
  ],
})
export class MaterialModule {}
