export class SayHello {
	constructor(userName = 'default') {
		this.name = userName;
	}
	greeting() {
		return `${this.name} hello`
	}
	emergencyWarning() {
		return `GET OUT ${this.name}`
	}
}