export type UserType = {
	id: number;
	email: string;
	password: string;
	subjectIdList: number[];
};

export type UserStateType = {
	user: UserType | null;
	loginState: string;
};
