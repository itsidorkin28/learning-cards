export interface IAddedUser {
	_id: string;
	email: string;
	rememberMe: boolean;
	isAdmin: boolean;
	name: string;
	verified: boolean;
	publicCardPacksCount: number;
	created: Date;
	updated: Date;
	__v: number;
}

export interface IRegisterResponse {
	addedUser: IAddedUser;
}

export interface DeviceToken {
	_id: string;
	device: string;
	token: string;
	tokenDeathTime: any;
}

export interface IAuthResponse {
	_id: string;
	email: string;
	rememberMe: boolean;
	isAdmin: boolean;
	name: string;
	verified: boolean;
	publicCardPacksCount: number;
	created: Date;
	updated: Date;
	__v: number;
	token: string;
	tokenDeathTime: number;
	avatar: string;
	deviceTokens: DeviceToken[];
}

export interface IInitialState {
	user: IAuthResponse | null
	isLoading: boolean
}

export interface IEmailPasswordRemember {
	email: string
	password: string
	rememberMe: boolean
}

export interface IToken {
	token: string;
}
