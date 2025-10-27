import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AdvTooltipDirective } from './adv-tooltip.directive';
import { AdvTooltipPopoverComponent } from './adv-tooltip-popover/adv-tooltip-popover.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AdvTooltipDirective,          
    AdvTooltipPopoverComponent
  ],
  exports: [AdvTooltipDirective]
})
export class IonicAdvancedTooltipModule {}
