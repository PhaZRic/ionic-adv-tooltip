import {
  Component, Input, TemplateRef, ChangeDetectionStrategy,
  ViewChild, ViewContainerRef, Type, Injector, AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iat-popover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adv-tooltip-popover.component.html',
  styleUrls: ['./adv-tooltip-popover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvTooltipPopoverComponent implements AfterViewInit {
  /** Template content (rich HTML) */
  @Input() template?: TemplateRef<any>;
  /** Plain text fallback */
  @Input() text?: string;
  /** Max width in px (kept for backward compatibility with existing demos) */
  @Input() maxWidth = 280;

  /** Optional: live component preview */
  @Input() componentType?: Type<any>;
  @Input() componentInputs?: Record<string, any>;

  /** Optional: background override coming from directive (CSS color string) */
  @Input() bg?: string;

  // ⚠️ with @if, the #host template is conditional → static: false
  @ViewChild('host', { read: ViewContainerRef, static: false })
  hostVcr?: ViewContainerRef;

  constructor(private injector: Injector) {}

  ngAfterViewInit(): void {
    if (this.componentType && this.hostVcr) {
      const ref = this.hostVcr.createComponent(this.componentType, { injector: this.injector });
      if (this.componentInputs && ref.instance) {
        Object.assign(ref.instance as any, this.componentInputs);
      }
    }
  }
}
