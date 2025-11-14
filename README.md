# Ionic Advanced Tooltip (`@phazric/ionic-adv-tooltip`)

> Rich, media-friendly tooltip/popover for **Ionic Angular**: render templates, images, videos, or even a live component preview inside a lightweight tooltip.  
> Works on any host (`span`, `ion-item`, `ion-chip`, `ion-button`, ...).  
> **Angular 16–20** · **Ionic 6–8**

[![npm version](https://img.shields.io/npm/v/ionic-adv-tooltip.svg?color=45CE6A&logo=npm)](https://www.npmjs.com/package/ionic-adv-tooltip)
![Angular](https://img.shields.io/badge/Angular-16--20-red?logo=angular)
![Ionic](https://img.shields.io/badge/Ionic-6--8-blue?logo=ionic)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 🧩 **Drop-in directive**: `iatTooltip` (template) or `iatTooltipText` (plain text)
- 🖼️ **Rich content**: images, videos, GIFs, arbitrary HTML
- 🧪 **Component preview**: render any Angular component inside the tooltip
- 🎯 **Positioning**: `top | bottom | left | right | auto`, with `start | center | end` alignment
- 🕒 **Timings**: open delay, close delay, optional auto-hide on touch
- 🖱️ **Click-through by default** (tooltips don’t block target clicks)
- 🧱 **Standalone or NgModule** friendly
- ⚙️ **Type-safe API** and **small footprint**

---

## 📦 Installation

```bash
npm i ionic-adv-tooltip
```

Then import the directive:

```ts
import { AdvTooltipDirective } from 'ionic-adv-tooltip';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [AdvTooltipDirective],
  templateUrl: './demo.component.html',
})
export class DemoComponent {}
```

---

## 🚀 Usage Examples

### 1️⃣ Simple text tooltip
```html
<ion-button iatTooltipText="Save changes">
  <ion-icon name="save-outline"></ion-icon>
</ion-button>
```

### 2️⃣ Template-based tooltip
```html
<ion-chip [iatTooltip]="tpl">Hover me</ion-chip>

<ng-template #tpl>
  <img src="assets/preview.png" width="120">
  <div>Preview image</div>
</ng-template>
```

### 3️⃣ Component tooltip 
```html
<div
  [iatEnableComponent]="true"
  [iatComponent]="TestComponent"
  [iatComponentInputs]="{ title: 'Hello Tooltip' }"
  [iatDirection]="'right'"
  [iatMaxWidth]="260"
  >
  Hover here
</div>
```

```ts
import { Component} from '@angular/core';
import { AdvTooltipDirective } from 'ionic-adv-tooltip';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AdvTooltipDirective], 
  templateUrl: './home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  protected  TestComponent = TestComponent

}

```

```ts

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  standalone: true,
  styleUrls: ['./test.component.scss'],
})
export class TestComponent  implements OnInit {
  @Input() title: string = 'Default title';

  constructor() { }

  ngOnInit() {}

}

```

>If you are using NgModules instead of standalone components, make sure you also import the directive and the preview component in the parent module where the tooltip is used:

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { AdvTooltipDirective } from 'ionic-adv-tooltip';
import { TestComponent } from '../test/test.component';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvTooltipDirective,
    TestComponent
  ]
})
export class HomePageModule {}


```


---

## ⚙️ Directive Inputs

| Parameter | Description |
| ---------- | ------------ |
| `iatTooltip` | Rich content via Angular `ng-template` (images, HTML, etc.). Use `[iatTooltip]="myTpl"`. |
| `iatTooltipText` | Plain text tooltip content. |
| `iatEnableComponent` | Enables live Angular component rendering inside tooltip. |
| `iatComponent` | Component type to render when `iatEnableComponent` is `true`. |
| `iatComponentInputs` | Object containing inputs for the rendered component. |
| `iatInteractive` | If `true`, tooltip is clickable; otherwise pointer-events are disabled (default). |
| `iatOpenDelay` | Delay before opening (ms). Default: `150`. |
| `iatCloseDelay` | Delay before closing (ms). Default: `0`. |
| `iatAutoHideMs` | Auto-hide timeout (ms) after touch open. Use `0` to disable. Default: `1800`. |
| `iatMaxWidth` | Legacy width (px). Prefer `iatPopoverWidth` for precise sizing. Default: `280`. |
| `iatDirection` | Tooltip side: `'auto'`, `'top'`, `'bottom'`, `'left'`, `'right'`. Default: `'auto'`. |
| `iatAlign` | Alignment: `'start'`, `'center'`, `'end'`. Default: `'center'`. |
| `iatPopoverBg` | Background color (e.g., `'#222'`, `rgba(...)`, or `var(--ion-color-light)`). |
| `iatPopoverWidth` | Tooltip width (number = px, or string with CSS units like `'28rem'`, `'80vw'`). |
| `iatPopoverMinWidth` | Minimum width. |
| `iatPopoverMaxWidth` | Maximum width. |
| `iatPopoverHeight` | Tooltip height (number or CSS string). |
| `iatPopoverMinHeight` | Minimum height. |
| `iatPopoverMaxHeight` | Maximum height. |
| `iatEnter` | Enter animation: `'fade'`, `'scale'`, `'up'`, `'right'`, `'pop'`. |
| `iatExit` | Exit animation: `'fade'`, `'scale'`, `'down'`, `'left'`, `'shrink'`. |
| `iatAnimDurationMs` | Animation duration (ms). Default: `180`. |
| `iatAnimEasing` | Animation easing (e.g., `'cubic-bezier(.2,.8,.2,1)'`). |

---

## 🧱 Backward Compatibility

| Alias | Maps to |
| ------ | -------- |
| `appTooltip` | → `iatTooltip` |
| `appTooltipText` | → `iatTooltipText` |
| `appTooltipDelay` | → `iatOpenDelay` |
| `appTooltipCloseDelay` | → `iatCloseDelay` |
| `appTooltipAutoHideMs` | → `iatAutoHideMs` |
| `appTooltipMaxWidth` | → `iatMaxWidth` |
| `appTooltipDirection` | → `iatDirection` |
| `appTooltipAlign` | → `iatAlign` |

---

## 🧩 Compatibility

- ✅ Angular **16 → 20**
- ✅ Ionic **6 → 8**
- ✅ Works in **Standalone Components** and **NgModules**
- ✅ SSR-safe (no direct DOM assumptions)

---

## 📜 License

MIT © [Phazric](https://github.com/phazric)
