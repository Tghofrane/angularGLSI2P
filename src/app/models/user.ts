enum UserRole {
  Admin = "Admin",
  User = "Client",
  Owner = "Owner",
}

export class User {
  _id?: string;
  token?: string;
  email?:string;
  password? :string;
  firstName?: string;
  lastName?: string;
  role?: UserRole;
  joinedAt?: Date;
  isActive?: boolean;
  constructor(
  ) {}
}
