import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { GridDataComponent } from 'src/app/Component/Shared/grid-data/grid-data.component';
import { ResolvePropertyPipe } from 'src/app/Component/Shared/grid-data/resolve-property.pipes';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonDirectivesModule } from 'src/app/directives/common-directive.module';

const materialModules = [
  CdkTreeModule,
  //Mat Form Controls
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,

  //Material Navigatin
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  //Material layout
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  // Material Buttons & Indicators

  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatChipsModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  //material popups & modules
  MatBottomSheetModule,
  MatDialogModule,
  MatTooltipModule,

  //material Data Tables
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatSelectModule,
  MatTabsModule,
  MatListModule,

  MatDividerModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTreeModule,
  OverlayModule,
  PortalModule,
];
@NgModule({
  declarations: [GridDataComponent,ResolvePropertyPipe],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...materialModules,
    CommonDirectivesModule,
    FormsModule,
  ],
  exports: [
    GridDataComponent,ResolvePropertyPipe,
    ...materialModules,
    CommonDirectivesModule
  ],
})
export class GridmoduleModule { }
