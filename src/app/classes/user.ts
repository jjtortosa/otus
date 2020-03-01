export class User {
	_id: string;
	email: string;
	familyName: string;
	givenName: string;
	locale: string;
	name: string;
	picture: string;
	provider: string;
	thirdPartyId: string;

	constructor(p: User) {
		Object.keys(p).forEach(k => this[k] = p[k]);
	}

	shortName(): string {
		return this.givenName || this.name.replace(/\s\w+$/, '') || this.name;
	}
}
