# YsDashboard ![Code Coverage](https://codecov.io/gh/YuShuanHsieh/ys-dashboard/branch/master/graph/badge.svg) ![Build](https://api.travis-ci.org/YuShuanHsieh/ys-dashboard.svg?branch=master) [![Code Coverage](https://badge.fury.io/js/ys-pie.svg)](https://www.npmjs.com/package/ys-pie)
This component is only for `angular N` framework, not for `angularJS`
  
[Demo Page](https://htmlpreview.github.io/?https://github.com/YuShuanHsieh/ys-dashboard/blob/master/dist/ys-dashboard/index.html) (I use htmlpreview to show the page, so it may take some time to load the page.)

![ys-pie](https://storage.googleapis.com/ys-dashboard/ys-pie.png)
## Pie / Spin / Speed / Measure UI
### Required Libs
- @angular/core 
- @angular/common

### Usage
#### 1. Import module
```typescript
import { YsPieModule } from 'ys-pie';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    YsPieModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

#### 2. Use component
```html
<ys-pie [size]="100" [percentage]="20" [direction]="top" color="#23a7d7" [label]="20"></ys-pie>
```

### API Document
| Attribute | Type | Description
---|---|---
| size | integer number | The size of the component. It will change both height and width with same value.
| percentage | number `(0-100)` | The UI will be filled color based on the percentage.
| color | Hex Color Codes | Define a filled color.
| label | string | The label will be showed on the center of UI
| direction | string: `bottom` `top` | The start point will be `bottom` or `top`.
