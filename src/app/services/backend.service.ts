import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

class ResponseError extends Error {

	public code: number;

	constructor(err: any) {
		super(err.message || err);

		if (err.code)
			this.code = err.code;
	}
}

@Injectable({
	providedIn: 'root'
})
export class BackendService {

	private server: string;
	public path = '/backend/';
	public fetching: boolean;
	public httpOptions: any;
	private jwt = localStorage.getItem("jwt");

	constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
	}

	init(server: string) {
		this.server = server;
		this.setJWT();
		return this;
	}

	loginInfo() {
		return this.handleRequest(this.http.get(this.server + '/auth/user-info', this.httpOptions));
	}

	get(method: string, params: any = null): Promise<any> {
		let q = '';

		if (params) {
			q += '?a=' + JSON.stringify(Array.isArray(params) ? params : [params]);
		}

		return this.handleRequest(this.http.get(this.server + this.path + method + q, this.httpOptions));
	}

	post(method: string, params: any = null) {
		return this.handleRequest(this.http.post(this.server + this.path + method, params, this.httpOptions));
	}

	setJWT(jwt?: string) {
		if (jwt) {
			localStorage.setItem('jwt', jwt);
		} else {
			jwt = localStorage.getItem('jwt');
		}

		this.jwt = jwt;

		const headerParams: any = {
			'Content-Type': 'application/json'
		};

		if (jwt) {
			headerParams.Authorization = 'Bearer ' + jwt;
		}

		this.httpOptions = {
			headers: new HttpHeaders(headerParams), withCredentials: false
		};
	}

	private handleRequest(a: Observable<any>) {
		this.fetching = true;

		return a.toPromise()
			.then(this.handleResponse.bind(this))
			.catch(this.handleError.bind(this));
	}

	private handleResponse(res: any) {
		this.fetching = false;

		if (res.error)
			return Promise.reject(new ResponseError(res.error));

		return res;
	}

	private async handleError(err: HttpErrorResponse): Promise<HttpErrorResponse> {
		console.log(err);
		this.fetching = false;
		let retError: any = err;

		if (err.error && err.error.error)
			retError = new ResponseError(err.error.error);
		else if (err.name === "HttpErrorResponse")
			retError = new ResponseError("El servidor no responde");

		this._snackBar.open(err.message);

		return err;
	}
}
