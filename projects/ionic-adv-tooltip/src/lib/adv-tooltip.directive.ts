import {
  Directive, Input, TemplateRef, ElementRef, NgZone, OnDestroy,
  HostListener, Type
} from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AdvTooltipPopoverComponent } from './adv-tooltip-popover/adv-tooltip-popover.component';

type TooltipSide = 'auto' | 'top' | 'bottom' | 'left' | 'right';
type TooltipAlign = 'start' | 'center' | 'end';

/* Animations catalogue (5 enter + 5 exit) */
type IatEnter = 'fade' | 'scale' | 'up' | 'right' | 'pop';
type IatExit  = 'fade' | 'scale' | 'down' | 'left' | 'shrink';

@Directive({
  selector: '[iatTooltip],[iatTooltipText],[appTooltip],[appTooltipText]',
  standalone: true,
  providers: [PopoverController]
})
export class AdvTooltipDirective implements OnDestroy {
  /** Rich content via ng-template */
  @Input('iatTooltip') template?: TemplateRef<any>;
  /** Plain text content */
  @Input('iatTooltipText') text?: string;

  /** Optional: render a live Angular component inside the tooltip */
  @Input() iatEnableComponent = false;
  @Input() iatComponent?: Type<any> | null;
  @Input() iatComponentInputs?: Record<string, any> | null;

  /** Interactive tooltip (clickable) vs hover/focus preview (pointer-events: none) */
  @Input() iatInteractive = false;

  /** Timings (ms) */
  @Input() iatOpenDelay = 150;
  @Input() iatCloseDelay = 0;
  @Input() iatAutoHideMs = 1800;

  /** Legacy sizing (kept): forwarded to component maxWidth binding */
  @Input() iatMaxWidth = 280;

  /** Positioning */
  @Input() iatDirection: TooltipSide = 'auto';
  @Input() iatAlign: TooltipAlign = 'center';

  @Input() iatPopoverBg?: string;               // CSS color (e.g., '#222', 'rgba(...)', 'var(--ion-color-light)')
  @Input() iatPopoverWidth?: number | string;   // number => px, or CSS string (e.g., '28rem', '80vw')
  @Input() iatPopoverMinWidth?: number | string;
  @Input() iatPopoverMaxWidth?: number | string;
  @Input() iatPopoverHeight?: number | string;
  @Input() iatPopoverMinHeight?: number | string;
  @Input() iatPopoverMaxHeight?: number | string;

  /** NEW: Animations */
  @Input() iatEnter?: IatEnter;                 // 'fade' | 'scale' | 'up' | 'right' | 'pop'
  @Input() iatExit?: IatExit;                   // 'fade' | 'scale' | 'down' | 'left' | 'shrink'
  @Input() iatAnimDurationMs?: number = 180;    // optional override for both enter/exit
  @Input() iatAnimEasing?: string;              // e.g., 'cubic-bezier(.2,.8,.2,1)'

  // Back-compat aliases
  @Input('appTooltip') set appTooltipAlias(tpl: TemplateRef<any> | null) { this.template = tpl ?? undefined; }
  @Input('appTooltipText') set appTooltipTextAlias(txt: string | null) { this.text = (txt ?? undefined) as any; }
  @Input() set appTooltipDelay(v: number | null) { if (typeof v === 'number') this.iatOpenDelay = v; }
  @Input() set appTooltipCloseDelay(v: number | null) { if (typeof v === 'number') this.iatCloseDelay = v; }
  @Input() set appTooltipAutoHideMs(v: number | null) { if (typeof v === 'number') this.iatAutoHideMs = v; }
  @Input() set appTooltipMaxWidth(v: number | null) { if (typeof v === 'number') this.iatMaxWidth = v; }
  @Input() set appTooltipDirection(v: TooltipSide) { if (v) this.iatDirection = v; }
  @Input() set appTooltipAlign(v: TooltipAlign) { if (v) this.iatAlign = v; }

  private popover?: HTMLIonPopoverElement | null = null;
  private openTimer?: any;
  private closeTimer?: any;

  constructor(
    private popoverCtrl: PopoverController,
    private host: ElementRef<HTMLElement>,
    private zone: NgZone
  ) {}

  ngOnDestroy(): void { this.clearTimers(); this.dismiss(true); }

  // ---- Host interactions ----
  @HostListener('mouseenter', ['$event']) onMouseEnter(ev: MouseEvent) { this.queueOpen(ev); }
  @HostListener('mouseleave') onMouseLeave() { this.queueClose(); }
  @HostListener('focus') onFocus() {
    const r = this.host.nativeElement.getBoundingClientRect();
    const fake = new MouseEvent('focus', { clientX: r.left + r.width/2, clientY: r.top });
    this.queueOpen(fake);
  }
  @HostListener('blur') onBlur() { this.queueClose(); }

  @HostListener('touchstart', ['$event'])
  onTouchStart(ev: TouchEvent) {
    const t = ev.touches[0];
    const fake = new MouseEvent('touch', { clientX: t.clientX, clientY: t.clientY });
    this.queueOpen(fake);
    if (this.iatAutoHideMs > 0) this.queueClose(this.iatAutoHideMs);
  }

  @HostListener('click') onClick() { this.dismiss(); }
  @HostListener('window:scroll') onWindowScroll() { this.queueClose(0); }
  @HostListener('window:resize') onWindowResize() { this.queueClose(0); }

  // ---- Timers ----
  private queueOpen(ev: MouseEvent) {
    this.clearTimers();
    this.openTimer = setTimeout(() => this.zone.run(() => this.present(ev)), this.iatOpenDelay);
  }
  private queueClose(delay = this.iatCloseDelay) {
    this.clearTimers();
    this.closeTimer = setTimeout(() => this.zone.run(() => this.dismiss()), delay);
  }
  private clearTimers() {
    if (this.openTimer) clearTimeout(this.openTimer);
    if (this.closeTimer) clearTimeout(this.closeTimer);
    this.openTimer = this.closeTimer = undefined;
  }

  // ---- Utils ----
  private toCss(v?: number | string): string | undefined {
    if (v === null || v === undefined || v === '') return undefined;
    return typeof v === 'number' ? `${v}px` : String(v);
  }

  // ---- Popover lifecycle ----
  private async present(ev: MouseEvent) {
    if (this.popover) return;
    if (!this.template && !this.text && !this.iatComponent) return;

    const cssClasses: string[] = ['app-tooltip-popover'];
    if (this.iatEnter) cssClasses.push(`iat-enter-${this.iatEnter}`);

    const opts: any = {
      component: AdvTooltipPopoverComponent,
      componentProps: {
        componentType: this.iatEnableComponent ? this.iatComponent : undefined,
        componentInputs: this.iatEnableComponent ? (this.iatComponentInputs || {}) : undefined,
        template: !this.iatEnableComponent ? this.template : undefined,
        text: (!this.iatEnableComponent && !this.template) ? this.text : undefined,
        maxWidth: this.iatMaxWidth,
        bg: this.iatPopoverBg                      // pass bg override to component
      },
      event: ev,
      showBackdrop: false,
      backdropDismiss: false,
      translucent: true,
      cssClass: cssClasses,
      keyboardClose: false
    };

    if (this.iatDirection !== 'auto') opts.side = this.iatDirection;
    if (this.iatAlign) opts.alignment = this.iatAlign;

    this.popover = await this.popoverCtrl.create(opts);

    // Apply size vars to the <ion-popover> host only if provided (no breaks otherwise)
    const setVar = (n: string, v?: number | string) => {
      const css = this.toCss(v);
      if (css) this.popover!.style.setProperty(n, css);
    };
    setVar('--width',      this.iatPopoverWidth);
    setVar('--min-width',  this.iatPopoverMinWidth);
    setVar('--max-width',  this.iatPopoverMaxWidth);
    setVar('--height',     this.iatPopoverHeight);
    setVar('--min-height', this.iatPopoverMinHeight);
    setVar('--max-height', this.iatPopoverMaxHeight);

    // Optional animation tuning via CSS vars
    if (this.iatAnimDurationMs) this.popover.style.setProperty('--iat-anim-dur', `${this.iatAnimDurationMs}ms`);
    if (this.iatAnimEasing)     this.popover.style.setProperty('--iat-anim-ease', this.iatAnimEasing);

    // Pointer events off for non-interactive preview
    if (!this.iatInteractive) {
      try {
        (this.popover as any).style.pointerEvents = 'none';
        const content = (this.popover as any).shadowRoot?.querySelector('[part="content"]') as HTMLElement | null;
        if (content) content.style.pointerEvents = 'none';
      } catch {}
    }

    await this.popover.present();
  }

  private async dismiss(force = false) {
    if (!this.popover) return;

    // If an exit animation is provided, play it before dismiss
    if (!force && this.iatExit) {
      const cls = `iat-exit-${this.iatExit}`;
      this.popover.classList.add(cls);

      // Wait for animation end or timeout as fallback
      const done = await new Promise<void>((resolve) => {
        let resolved = false;
        const to = setTimeout(() => { if (!resolved) { resolved = true; resolve(); } }, Math.max(120, this.iatAnimDurationMs ?? 150) + 40);
        this.popover!.addEventListener('animationend', () => {
          if (!resolved) { clearTimeout(to); resolved = true; resolve(); }
        }, { once: true });
      });
      // no-op 'done', then actually dismiss
    }

    try { await this.popover.dismiss(); } catch {}
    this.popover = null;
  }
}
