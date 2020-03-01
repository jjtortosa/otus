import {Injectable} from '@angular/core';
import {User} from '../classes/user';
import {BackendService} from './backend.service';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	public server: string;
	public ready: boolean;
	private queue = [];
	public user: User;

	constructor(private backend: BackendService, private router: Router, private _snackBar: MatSnackBar) {
	}

	async login() {
		await this.backend.loginInfo()
			.then(result => {
				this.user = new User(result.user);
				this.queue.forEach(q => q());
			})
			.catch(err => {
				this.openSnackBar(err.message);
				return this.router.navigate(['/login']);
			});

		this.ready = true;
	}

	openSnackBar(
		message: string,
		duration: number = 3000,
		action: string = "OK",
		// class_: snackBarClasses = "cm-snack-bar"
	): MatSnackBarRef<SimpleSnackBar> {
		return this._snackBar.open(message, action, {
			// panelClass: [class_],
			duration: duration || 0
		});
	}
}
