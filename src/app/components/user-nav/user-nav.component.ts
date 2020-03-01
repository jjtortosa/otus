import {Component} from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
	selector: 'app-user-nav',
	templateUrl: './user-nav.component.html',
	styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent {

	constructor(public app: AppService) {
	}
}
