export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  age: number;
  avatar: string;


  constructor(id: number, firstname: string, lastname: string, email: string, username: string, password: string, age: number, avatar: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.username = username;
    this.password = password;
    this.age = age;
    this.avatar = avatar;
  }
}
