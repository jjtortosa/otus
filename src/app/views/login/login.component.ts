import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendService} from '../../services/backend.service';
import {AppService} from '../../services/app.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loaded: boolean;

	constructor(public app: AppService, private route: ActivatedRoute, private api: BackendService, private router: Router) {
	}

	ngOnInit(): void {
		setTimeout(() =>
			this.route.queryParams.subscribe(async params => {
				if (params.jwt) {
					this.api.setJWT(params.jwt);

					await this.app.login();

					if (this.app.user)
						await this.router.navigate(['/']);
				}

				this.loaded = true;
			}), 0);
	}

}
