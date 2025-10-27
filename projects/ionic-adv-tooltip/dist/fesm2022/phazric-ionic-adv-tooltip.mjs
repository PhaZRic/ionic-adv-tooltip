import * as i0 from '@angular/core';
import { Component, ViewContainerRef, ViewChild, Input, ChangeDetectionStrategy, HostListener, Directive, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@ionic/angular';
import { PopoverController, IonicModule } from '@ionic/angular';

class IonicAdvTooltip {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.7", ngImport: i0, type: IonicAdvTooltip, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.7", type: IonicAdvTooltip, isStandalone: true, selector: "lib-ionic-adv-tooltip", ngImport: i0, template: `
    <p>
      ionic-adv-tooltip works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.7", ngImport: i0, type: IonicAdvTooltip, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ionic-adv-tooltip', imports: [], template: `
    <p>
      ionic-adv-tooltip works!
    </p>
  ` }]
        }] });

class AdvTooltipPopoverComponent {
    injector;
    /** Template content (rich HTML) */
    template;
    /** Plain text fallback */
    text;
    /** Max width in px (kept for backward compatibility with existing demos) */
    maxWidth = 280;
    /** Optional: live component preview */
    componentType;
    componentInputs;
    /** Optional: background override coming from directive (CSS color string) */
    bg;
    // ⚠️ with @if, the #host template is conditional → static: false
    hostVcr;
    constructor(injector) {
        this.injector = injector;
    }
    ngAfterViewInit() {
        if (this.componentType && this.hostVcr) {
            const ref = this.hostVcr.createComponent(this.componentType, { injector: this.injector });
            if (this.componentInputs && ref.instance) {
                Object.assign(ref.instance, this.componentInputs);
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.7", ngImport: i0, type: AdvTooltipPopoverComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.7", type: AdvTooltipPopoverComponent, isStandalone: true, selector: "iat-popover", inputs: { template: "template", text: "text", maxWidth: "maxWidth", componentType: "componentType", componentInputs: "componentInputs", bg: "bg" }, viewQueries: [{ propertyName: "hostVcr", first: true, predicate: ["host"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: "<div\r\n  class=\"tooltip-wrap\"\r\n  [style.maxWidth.px]=\"maxWidth\"\r\n  [style.background]=\"bg || null\"\r\n>\r\n  @if (componentType) {\r\n    <ng-template #host></ng-template>\r\n  } @else {\r\n    @if (template) {\r\n      <ng-container [ngTemplateOutlet]=\"template\"></ng-container>\r\n    } @else {\r\n      <div class=\"tooltip-text\">{{ text }}</div>\r\n    }\r\n  }\r\n</div>\r\n", styles: ["@charset \"UTF-8\";:host{display:block}.tooltip-wrap{padding:10px 12px;border-radius:10px;background:color-mix(in oklab,var(--ion-color-step-50) 75%,transparent);color:var(--ion-text-color);box-shadow:0 6px 18px #00000024;font-size:12.5px;line-height:1.35;border:1px solid color-mix(in oklab,var(--ion-color-step-200) 80%,transparent);display:flex;flex-direction:column;gap:8px;max-width:100%;max-height:64vh;overflow:hidden}.tooltip-text{white-space:normal;word-break:break-word}img,video,canvas{display:block;max-width:100%;border-radius:8px}video{width:100%;height:auto;max-height:48vh;object-fit:contain}@keyframes iat-fade-in{0%{opacity:0}to{opacity:1}}@keyframes iat-scale-in{0%{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}@keyframes iat-slide-up{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes iat-slide-right{0%{opacity:0;transform:translate(-8px)}to{opacity:1;transform:translate(0)}}@keyframes iat-pop-in{0%{opacity:0;transform:scale(.9)}60%{opacity:1;transform:scale(1.03)}to{transform:scale(1)}}@keyframes iat-fade-out{0%{opacity:1}to{opacity:0}}@keyframes iat-scale-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.96)}}@keyframes iat-slide-down{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(8px)}}@keyframes iat-slide-left{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(-8px)}}@keyframes iat-shrink-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.9)}}.iat-enter-fade{animation:iat-fade-in var(--iat-anim-dur, .18s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-enter-scale{animation:iat-scale-in var(--iat-anim-dur, .18s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-enter-up{animation:iat-slide-up var(--iat-anim-dur, .18s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-enter-right{animation:iat-slide-right var(--iat-anim-dur, .18s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-enter-pop{animation:iat-pop-in var(--iat-anim-dur, .2s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-exit-fade{animation:iat-fade-out var(--iat-anim-dur, .15s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-exit-scale{animation:iat-scale-out var(--iat-anim-dur, .15s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-exit-down{animation:iat-slide-down var(--iat-anim-dur, .15s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-exit-left{animation:iat-slide-left var(--iat-anim-dur, .15s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-exit-shrink{animation:iat-shrink-out var(--iat-anim-dur, .15s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.7", ngImport: i0, type: AdvTooltipPopoverComponent, decorators: [{
            type: Component,
            args: [{ selector: 'iat-popover', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\r\n  class=\"tooltip-wrap\"\r\n  [style.maxWidth.px]=\"maxWidth\"\r\n  [style.background]=\"bg || null\"\r\n>\r\n  @if (componentType) {\r\n    <ng-template #host></ng-template>\r\n  } @else {\r\n    @if (template) {\r\n      <ng-container [ngTemplateOutlet]=\"template\"></ng-container>\r\n    } @else {\r\n      <div class=\"tooltip-text\">{{ text }}</div>\r\n    }\r\n  }\r\n</div>\r\n", styles: ["@charset \"UTF-8\";:host{display:block}.tooltip-wrap{padding:10px 12px;border-radius:10px;background:color-mix(in oklab,var(--ion-color-step-50) 75%,transparent);color:var(--ion-text-color);box-shadow:0 6px 18px #00000024;font-size:12.5px;line-height:1.35;border:1px solid color-mix(in oklab,var(--ion-color-step-200) 80%,transparent);display:flex;flex-direction:column;gap:8px;max-width:100%;max-height:64vh;overflow:hidden}.tooltip-text{white-space:normal;word-break:break-word}img,video,canvas{display:block;max-width:100%;border-radius:8px}video{width:100%;height:auto;max-height:48vh;object-fit:contain}@keyframes iat-fade-in{0%{opacity:0}to{opacity:1}}@keyframes iat-scale-in{0%{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}@keyframes iat-slide-up{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes iat-slide-right{0%{opacity:0;transform:translate(-8px)}to{opacity:1;transform:translate(0)}}@keyframes iat-pop-in{0%{opacity:0;transform:scale(.9)}60%{opacity:1;transform:scale(1.03)}to{transform:scale(1)}}@keyframes iat-fade-out{0%{opacity:1}to{opacity:0}}@keyframes iat-scale-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.96)}}@keyframes iat-slide-down{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(8px)}}@keyframes iat-slide-left{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(-8px)}}@keyframes iat-shrink-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.9)}}.iat-enter-fade{animation:iat-fade-in var(--iat-anim-dur, .18s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-enter-scale{animation:iat-scale-in var(--iat-anim-dur, .18s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-enter-up{animation:iat-slide-up var(--iat-anim-dur, .18s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-enter-right{animation:iat-slide-right var(--iat-anim-dur, .18s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-enter-pop{animation:iat-pop-in var(--iat-anim-dur, .2s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-exit-fade{animation:iat-fade-out var(--iat-anim-dur, .15s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-exit-scale{animation:iat-scale-out var(--iat-anim-dur, .15s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-exit-down{animation:iat-slide-down var(--iat-anim-dur, .15s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-exit-left{animation:iat-slide-left var(--iat-anim-dur, .15s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}.iat-exit-shrink{animation:iat-shrink-out var(--iat-anim-dur, .15s) var(--iat-anim-ease, cubic-bezier(.2, .8, .2, 1)) both}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }], propDecorators: { template: [{
                type: Input
            }], text: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }], componentType: [{
                type: Input
            }], componentInputs: [{
                type: Input
            }], bg: [{
                type: Input
            }], hostVcr: [{
                type: ViewChild,
                args: ['host', { read: ViewContainerRef, static: false }]
            }] } });

class AdvTooltipDirective {
    popoverCtrl;
    host;
    zone;
    /** Rich content via ng-template */
    template;
    /** Plain text content */
    text;
    /** Optional: render a live Angular component inside the tooltip */
    iatEnableComponent = false;
    iatComponent;
    iatComponentInputs;
    /** Interactive tooltip (clickable) vs hover/focus preview (pointer-events: none) */
    iatInteractive = false;
    /** Timings (ms) */
    iatOpenDelay = 150;
    iatCloseDelay = 0;
    iatAutoHideMs = 1800;
    /** Legacy sizing (kept): forwarded to component maxWidth binding */
    iatMaxWidth = 280;
    /** Positioning */
    iatDirection = 'auto';
    iatAlign = 'center';
    /** NEW: Popover visual customization */
    iatPopoverBg; // CSS color (e.g., '#222', 'rgba(...)', 'var(--ion-color-light)')
    iatPopoverWidth; // number => px, or CSS string (e.g., '28rem', '80vw')
    iatPopoverMinWidth;
    iatPopoverMaxWidth;
    iatPopoverHeight;
    iatPopoverMinHeight;
    iatPopoverMaxHeight;
    /** NEW: Animations */
    iatEnter; // 'fade' | 'scale' | 'up' | 'right' | 'pop'
    iatExit; // 'fade' | 'scale' | 'down' | 'left' | 'shrink'
    iatAnimDurationMs = 180; // optional override for both enter/exit
    iatAnimEasing; // e.g., 'cubic-bezier(.2,.8,.2,1)'
    // Back-compat aliases
    set appTooltipAlias(tpl) { this.template = tpl ?? undefined; }
    set appTooltipTextAlias(txt) { this.text = (txt ?? undefined); }
    set appTooltipDelay(v) { if (typeof v === 'number')
        this.iatOpenDelay = v; }
    set appTooltipCloseDelay(v) { if (typeof v === 'number')
        this.iatCloseDelay = v; }
    set appTooltipAutoHideMs(v) { if (typeof v === 'number')
        this.iatAutoHideMs = v; }
    set appTooltipMaxWidth(v) { if (typeof v === 'number')
        this.iatMaxWidth = v; }
    set appTooltipDirection(v) { if (v)
        this.iatDirection = v; }
    set appTooltipAlign(v) { if (v)
        this.iatAlign = v; }
    popover = null;
    openTimer;
    closeTimer;
    constructor(popoverCtrl, host, zone) {
        this.popoverCtrl = popoverCtrl;
        this.host = host;
        this.zone = zone;
    }
    ngOnDestroy() { this.clearTimers(); this.dismiss(true); }
    // ---- Host interactions ----
    onMouseEnter(ev) { this.queueOpen(ev); }
    onMouseLeave() { this.queueClose(); }
    onFocus() {
        const r = this.host.nativeElement.getBoundingClientRect();
        const fake = new MouseEvent('focus', { clientX: r.left + r.width / 2, clientY: r.top });
        this.queueOpen(fake);
    }
    onBlur() { this.queueClose(); }
    onTouchStart(ev) {
        const t = ev.touches[0];
        const fake = new MouseEvent('touch', { clientX: t.clientX, clientY: t.clientY });
        this.queueOpen(fake);
        if (this.iatAutoHideMs > 0)
            this.queueClose(this.iatAutoHideMs);
    }
    onClick() { this.dismiss(); }
    onWindowScroll() { this.queueClose(0); }
    onWindowResize() { this.queueClose(0); }
    // ---- Timers ----
    queueOpen(ev) {
        this.clearTimers();
        this.openTimer = setTimeout(() => this.zone.run(() => this.present(ev)), this.iatOpenDelay);
    }
    queueClose(delay = this.iatCloseDelay) {
        this.clearTimers();
        this.closeTimer = setTimeout(() => this.zone.run(() => this.dismiss()), delay);
    }
    clearTimers() {
        if (this.openTimer)
            clearTimeout(this.openTimer);
        if (this.closeTimer)
            clearTimeout(this.closeTimer);
        this.openTimer = this.closeTimer = undefined;
    }
    // ---- Utils ----
    toCss(v) {
        if (v === null || v === undefined || v === '')
            return undefined;
        return typeof v === 'number' ? `${v}px` : String(v);
    }
    // ---- Popover lifecycle ----
    async present(ev) {
        if (this.popover)
            return;
        if (!this.template && !this.text && !this.iatComponent)
            return;
        const cssClasses = ['app-tooltip-popover'];
        if (this.iatEnter)
            cssClasses.push(`iat-enter-${this.iatEnter}`);
        const opts = {
            component: AdvTooltipPopoverComponent,
            componentProps: {
                componentType: this.iatEnableComponent ? this.iatComponent : undefined,
                componentInputs: this.iatEnableComponent ? (this.iatComponentInputs || {}) : undefined,
                template: !this.iatEnableComponent ? this.template : undefined,
                text: (!this.iatEnableComponent && !this.template) ? this.text : undefined,
                maxWidth: this.iatMaxWidth,
                bg: this.iatPopoverBg // pass bg override to component
            },
            event: ev,
            showBackdrop: false,
            backdropDismiss: false,
            translucent: true,
            cssClass: cssClasses,
            keyboardClose: false
        };
        if (this.iatDirection !== 'auto')
            opts.side = this.iatDirection;
        if (this.iatAlign)
            opts.alignment = this.iatAlign;
        this.popover = await this.popoverCtrl.create(opts);
        // Apply size vars to the <ion-popover> host only if provided (no breaks otherwise)
        const setVar = (n, v) => {
            const css = this.toCss(v);
            if (css)
                this.popover.style.setProperty(n, css);
        };
        setVar('--width', this.iatPopoverWidth);
        setVar('--min-width', this.iatPopoverMinWidth);
        setVar('--max-width', this.iatPopoverMaxWidth);
        setVar('--height', this.iatPopoverHeight);
        setVar('--min-height', this.iatPopoverMinHeight);
        setVar('--max-height', this.iatPopoverMaxHeight);
        // Optional animation tuning via CSS vars
        if (this.iatAnimDurationMs)
            this.popover.style.setProperty('--iat-anim-dur', `${this.iatAnimDurationMs}ms`);
        if (this.iatAnimEasing)
            this.popover.style.setProperty('--iat-anim-ease', this.iatAnimEasing);
        // Pointer events off for non-interactive preview
        if (!this.iatInteractive) {
            try {
                this.popover.style.pointerEvents = 'none';
                const content = this.popover.shadowRoot?.querySelector('[part="content"]');
                if (content)
                    content.style.pointerEvents = 'none';
            }
            catch { }
        }
        await this.popover.present();
    }
    async dismiss(force = false) {
        if (!this.popover)
            return;
        // If an exit animation is provided, play it before dismiss
        if (!force && this.iatExit) {
            const cls = `iat-exit-${this.iatExit}`;
            this.popover.classList.add(cls);
            // Wait for animation end or timeout as fallback
            const done = await new Promise((resolve) => {
                let resolved = false;
                const to = setTimeout(() => { if (!resolved) {
                    resolved = true;
                    resolve();
                } }, Math.max(120, this.iatAnimDurationMs ?? 150) + 40);
                this.popover.addEventListener('animationend', () => {
                    if (!resolved) {
                        clearTimeout(to);
                        resolved = true;
                        resolve();
                    }
                }, { once: true });
            });
            // no-op 'done', then actually dismiss
        }
        try {
            await this.popover.dismiss();
        }
        catch { }
        this.popover = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.7", ngImport: i0, type: AdvTooltipDirective, deps: [{ token: i1$1.PopoverController }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "20.3.7", type: AdvTooltipDirective, isStandalone: true, selector: "[iatTooltip],[iatTooltipText],[appTooltip],[appTooltipText]", inputs: { template: ["iatTooltip", "template"], text: ["iatTooltipText", "text"], iatEnableComponent: "iatEnableComponent", iatComponent: "iatComponent", iatComponentInputs: "iatComponentInputs", iatInteractive: "iatInteractive", iatOpenDelay: "iatOpenDelay", iatCloseDelay: "iatCloseDelay", iatAutoHideMs: "iatAutoHideMs", iatMaxWidth: "iatMaxWidth", iatDirection: "iatDirection", iatAlign: "iatAlign", iatPopoverBg: "iatPopoverBg", iatPopoverWidth: "iatPopoverWidth", iatPopoverMinWidth: "iatPopoverMinWidth", iatPopoverMaxWidth: "iatPopoverMaxWidth", iatPopoverHeight: "iatPopoverHeight", iatPopoverMinHeight: "iatPopoverMinHeight", iatPopoverMaxHeight: "iatPopoverMaxHeight", iatEnter: "iatEnter", iatExit: "iatExit", iatAnimDurationMs: "iatAnimDurationMs", iatAnimEasing: "iatAnimEasing", appTooltipAlias: ["appTooltip", "appTooltipAlias"], appTooltipTextAlias: ["appTooltipText", "appTooltipTextAlias"], appTooltipDelay: "appTooltipDelay", appTooltipCloseDelay: "appTooltipCloseDelay", appTooltipAutoHideMs: "appTooltipAutoHideMs", appTooltipMaxWidth: "appTooltipMaxWidth", appTooltipDirection: "appTooltipDirection", appTooltipAlign: "appTooltipAlign" }, host: { listeners: { "mouseenter": "onMouseEnter($event)", "mouseleave": "onMouseLeave()", "focus": "onFocus()", "blur": "onBlur()", "touchstart": "onTouchStart($event)", "click": "onClick()", "window:scroll": "onWindowScroll()", "window:resize": "onWindowResize()" } }, providers: [PopoverController], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.7", ngImport: i0, type: AdvTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[iatTooltip],[iatTooltipText],[appTooltip],[appTooltipText]',
                    standalone: true,
                    providers: [PopoverController]
                }]
        }], ctorParameters: () => [{ type: i1$1.PopoverController }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { template: [{
                type: Input,
                args: ['iatTooltip']
            }], text: [{
                type: Input,
                args: ['iatTooltipText']
            }], iatEnableComponent: [{
                type: Input
            }], iatComponent: [{
                type: Input
            }], iatComponentInputs: [{
                type: Input
            }], iatInteractive: [{
                type: Input
            }], iatOpenDelay: [{
                type: Input
            }], iatCloseDelay: [{
                type: Input
            }], iatAutoHideMs: [{
                type: Input
            }], iatMaxWidth: [{
                type: Input
            }], iatDirection: [{
                type: Input
            }], iatAlign: [{
                type: Input
            }], iatPopoverBg: [{
                type: Input
            }], iatPopoverWidth: [{
                type: Input
            }], iatPopoverMinWidth: [{
                type: Input
            }], iatPopoverMaxWidth: [{
                type: Input
            }], iatPopoverHeight: [{
                type: Input
            }], iatPopoverMinHeight: [{
                type: Input
            }], iatPopoverMaxHeight: [{
                type: Input
            }], iatEnter: [{
                type: Input
            }], iatExit: [{
                type: Input
            }], iatAnimDurationMs: [{
                type: Input
            }], iatAnimEasing: [{
                type: Input
            }], appTooltipAlias: [{
                type: Input,
                args: ['appTooltip']
            }], appTooltipTextAlias: [{
                type: Input,
                args: ['appTooltipText']
            }], appTooltipDelay: [{
                type: Input
            }], appTooltipCloseDelay: [{
                type: Input
            }], appTooltipAutoHideMs: [{
                type: Input
            }], appTooltipMaxWidth: [{
                type: Input
            }], appTooltipDirection: [{
                type: Input
            }], appTooltipAlign: [{
                type: Input
            }], onMouseEnter: [{
                type: HostListener,
                args: ['mouseenter', ['$event']]
            }], onMouseLeave: [{
                type: HostListener,
                args: ['mouseleave']
            }], onFocus: [{
                type: HostListener,
                args: ['focus']
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }], onTouchStart: [{
                type: HostListener,
                args: ['touchstart', ['$event']]
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }], onWindowScroll: [{
                type: HostListener,
                args: ['window:scroll']
            }], onWindowResize: [{
                type: HostListener,
                args: ['window:resize']
            }] } });

class IonicAdvancedTooltipModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.7", ngImport: i0, type: IonicAdvancedTooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.7", ngImport: i0, type: IonicAdvancedTooltipModule, imports: [CommonModule,
            IonicModule,
            AdvTooltipDirective,
            AdvTooltipPopoverComponent], exports: [AdvTooltipDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.7", ngImport: i0, type: IonicAdvancedTooltipModule, imports: [CommonModule,
            IonicModule,
            AdvTooltipPopoverComponent] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.7", ngImport: i0, type: IonicAdvancedTooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    // ⛔ niente declarations con standalone
                    imports: [
                        CommonModule,
                        IonicModule,
                        AdvTooltipDirective,
                        AdvTooltipPopoverComponent
                    ],
                    exports: [AdvTooltipDirective]
                }]
        }] });

/*
 * Public API Surface of ionic-adv-tooltip
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AdvTooltipDirective, IonicAdvTooltip, IonicAdvancedTooltipModule };
//# sourceMappingURL=phazric-ionic-adv-tooltip.mjs.map
