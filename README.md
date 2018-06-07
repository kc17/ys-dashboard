# YsDashboard 
This component is only for `angular N` framework, not for `angularJS`
## Pie / Spin / Speeder / Measure UI
### Required Libs
- @angular/core 
- @angular/common

### Usage
#### 1. Import module
```
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
<ys-pie [size]="100" [percentage]="20" color="#23a7d7" [label]="20"></ys-pie>
```

### API Document
| Attribute | Type | Description
---|---|---
| size | integer number | Define the size of the component. It will change the height and width.
| percentage | number (0-100) | The UI will be filled color based on percentage.
| color | Hex Color Codes | Define the filled color.
| label | string | The label will be showed on the center of UI


