export interface User {
  id: number;
  username: string;
}

export type Details = User & {
  firstName: string;
  lastName: string;
  aboutMe: string;
};
