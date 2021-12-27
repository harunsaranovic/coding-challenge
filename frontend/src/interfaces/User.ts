
export interface UserInterface {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface UsersInterface extends Array<UsersInterface> { }
