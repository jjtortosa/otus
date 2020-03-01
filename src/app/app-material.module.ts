import {NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
	exports: [
		// MatBottomSheetModule,
		// MatAutocompleteModule,
		// MatBadgeModule,
		MatButtonModule,
		// MatButtonToggleModule,
		MatCardModule,
		// MatCheckboxModule,
		// MatChipsModule,
		// MatDatepickerModule,
		// MatDialogModule,
		// MatExpansionModule,
		// MatFormFieldModule,
		MatIconModule,
		// MatInputModule,
		MatListModule,
		MatMenuModule,
		// MatNativeDateModule,
		// MatPaginatorModule,
		MatProgressBarModule,
		// MatRadioModule,
		// MatSelectModule,
		MatSidenavModule,
		// MatSliderModule,
		// MatSlideToggleModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		// MatSortModule,
		// MatStepperModule,
		// MatTableModule,
		// MatTabsModule,
		MatToolbarModule,
		// MatTooltipModule
	]
})
export class AppMaterialModule {
}
