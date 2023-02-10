export type UserInfo = {
	avatar_url: string;
	login: string;
	bio: string;
	name: string;
	followers: number;
	following: number;
	company: string;
	location: string;
	email: string;
	blog: string;
	twitter_username: string;
};

export type MessageError = {
	message: string;
};

export type Repository = {
	name: string;
};
