import * as i0 from '@angular/core';
import { OnDestroy, TemplateRef, Type, ElementRef, NgZone, AfterViewInit, ViewContainerRef, Injector } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

declare class IonicAdvTooltip {
    static ɵfac: i0.ɵɵFactoryDeclaration<IonicAdvTooltip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IonicAdvTooltip, "lib-ionic-adv-tooltip", never, {}, {}, never, never, true, never>;
}

type TooltipSide = 'auto' | 'top' | 'bottom' | 'left' | 'right';
type TooltipAlign = 'start' | 'center' | 'end';
type IatEnter = 'fade' | 'scale' | 'up' | 'right' | 'pop';
type IatExit = 'fade' | 'scale' | 'down' | 'left' | 'shrink';
declare class AdvTooltipDirective implements OnDestroy {
    private popoverCtrl;
    private host;
    private zone;
    /** Rich content via ng-template */
    template?: TemplateRef<any>;
    /** Plain text content */
    text?: string;
    /** Optional: render a live Angular component inside the tooltip */
    iatEnableComponent: boolean;
    iatComponent?: Type<any> | null;
    iatComponentInputs?: Record<string, any> | null;
    /** Interactive tooltip (clickable) vs hover/focus preview (pointer-events: none) */
    iatInteractive: boolean;
    /** Timings (ms) */
    iatOpenDelay: number;
    iatCloseDelay: number;
    iatAutoHideMs: number;
    /** Legacy sizing (kept): forwarded to component maxWidth binding */
    iatMaxWidth: number;
    /** Positioning */
    iatDirection: TooltipSide;
    iatAlign: TooltipAlign;
    /** NEW: Popover visual customization */
    iatPopoverBg?: string;
    iatPopoverWidth?: number | string;
    iatPopoverMinWidth?: number | string;
    iatPopoverMaxWidth?: number | string;
    iatPopoverHeight?: number | string;
    iatPopoverMinHeight?: number | string;
    iatPopoverMaxHeight?: number | string;
    /** NEW: Animations */
    iatEnter?: IatEnter;
    iatExit?: IatExit;
    iatAnimDurationMs?: number;
    iatAnimEasing?: string;
    set appTooltipAlias(tpl: TemplateRef<any> | null);
    set appTooltipTextAlias(txt: string | null);
    set appTooltipDelay(v: number | null);
    set appTooltipCloseDelay(v: number | null);
    set appTooltipAutoHideMs(v: number | null);
    set appTooltipMaxWidth(v: number | null);
    set appTooltipDirection(v: TooltipSide);
    set appTooltipAlign(v: TooltipAlign);
    private popover?;
    private openTimer?;
    private closeTimer?;
    constructor(popoverCtrl: PopoverController, host: ElementRef<HTMLElement>, zone: NgZone);
    ngOnDestroy(): void;
    onMouseEnter(ev: MouseEvent): void;
    onMouseLeave(): void;
    onFocus(): void;
    onBlur(): void;
    onTouchStart(ev: TouchEvent): void;
    onClick(): void;
    onWindowScroll(): void;
    onWindowResize(): void;
    private queueOpen;
    private queueClose;
    private clearTimers;
    private toCss;
    private present;
    private dismiss;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdvTooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AdvTooltipDirective, "[iatTooltip],[iatTooltipText],[appTooltip],[appTooltipText]", never, { "template": { "alias": "iatTooltip"; "required": false; }; "text": { "alias": "iatTooltipText"; "required": false; }; "iatEnableComponent": { "alias": "iatEnableComponent"; "required": false; }; "iatComponent": { "alias": "iatComponent"; "required": false; }; "iatComponentInputs": { "alias": "iatComponentInputs"; "required": false; }; "iatInteractive": { "alias": "iatInteractive"; "required": false; }; "iatOpenDelay": { "alias": "iatOpenDelay"; "required": false; }; "iatCloseDelay": { "alias": "iatCloseDelay"; "required": false; }; "iatAutoHideMs": { "alias": "iatAutoHideMs"; "required": false; }; "iatMaxWidth": { "alias": "iatMaxWidth"; "required": false; }; "iatDirection": { "alias": "iatDirection"; "required": false; }; "iatAlign": { "alias": "iatAlign"; "required": false; }; "iatPopoverBg": { "alias": "iatPopoverBg"; "required": false; }; "iatPopoverWidth": { "alias": "iatPopoverWidth"; "required": false; }; "iatPopoverMinWidth": { "alias": "iatPopoverMinWidth"; "required": false; }; "iatPopoverMaxWidth": { "alias": "iatPopoverMaxWidth"; "required": false; }; "iatPopoverHeight": { "alias": "iatPopoverHeight"; "required": false; }; "iatPopoverMinHeight": { "alias": "iatPopoverMinHeight"; "required": false; }; "iatPopoverMaxHeight": { "alias": "iatPopoverMaxHeight"; "required": false; }; "iatEnter": { "alias": "iatEnter"; "required": false; }; "iatExit": { "alias": "iatExit"; "required": false; }; "iatAnimDurationMs": { "alias": "iatAnimDurationMs"; "required": false; }; "iatAnimEasing": { "alias": "iatAnimEasing"; "required": false; }; "appTooltipAlias": { "alias": "appTooltip"; "required": false; }; "appTooltipTextAlias": { "alias": "appTooltipText"; "required": false; }; "appTooltipDelay": { "alias": "appTooltipDelay"; "required": false; }; "appTooltipCloseDelay": { "alias": "appTooltipCloseDelay"; "required": false; }; "appTooltipAutoHideMs": { "alias": "appTooltipAutoHideMs"; "required": false; }; "appTooltipMaxWidth": { "alias": "appTooltipMaxWidth"; "required": false; }; "appTooltipDirection": { "alias": "appTooltipDirection"; "required": false; }; "appTooltipAlign": { "alias": "appTooltipAlign"; "required": false; }; }, {}, never, never, true, never>;
}

declare class AdvTooltipPopoverComponent implements AfterViewInit {
    private injector;
    /** Template content (rich HTML) */
    template?: TemplateRef<any>;
    /** Plain text fallback */
    text?: string;
    /** Max width in px (kept for backward compatibility with existing demos) */
    maxWidth: number;
    /** Optional: live component preview */
    componentType?: Type<any>;
    componentInputs?: Record<string, any>;
    /** Optional: background override coming from directive (CSS color string) */
    bg?: string;
    hostVcr?: ViewContainerRef;
    constructor(injector: Injector);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdvTooltipPopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdvTooltipPopoverComponent, "iat-popover", never, { "template": { "alias": "template"; "required": false; }; "text": { "alias": "text"; "required": false; }; "maxWidth": { "alias": "maxWidth"; "required": false; }; "componentType": { "alias": "componentType"; "required": false; }; "componentInputs": { "alias": "componentInputs"; "required": false; }; "bg": { "alias": "bg"; "required": false; }; }, {}, never, never, true, never>;
}

declare class IonicAdvancedTooltipModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<IonicAdvancedTooltipModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<IonicAdvancedTooltipModule, never, [typeof i1.CommonModule, typeof i2.IonicModule, typeof AdvTooltipDirective, typeof AdvTooltipPopoverComponent], [typeof AdvTooltipDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<IonicAdvancedTooltipModule>;
}

export { AdvTooltipDirective, IonicAdvTooltip, IonicAdvancedTooltipModule };
