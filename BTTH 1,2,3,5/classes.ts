// Tạo interface IUser với name, email, isAdmin.
interface IUser {
  name: string;
  email: string;
  isAdmin: boolean;
}

// Tạo class User implements IUser:
class User implements IUser {
  name: string;
  email: string;
  isAdmin: boolean;

// Constructor nhận giá trị
  constructor(name: string, email: string, isAdmin: boolean) {
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
  }

 // Method getInfo()
  getInfo(): string {
    return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`;
  }
}

// Tạo class AdminUser kế thừa User
class AdminUser extends User {
    constructor(name: string, email:string) {
        super(name, email, true);
    }

// method deleteUser
// Mong muốn xử lý trả list user sau khi xóa sẽ không hiển thị user đã xóa trước đó
  deleteUser(user: User, users: User[]): User[] {
    console.log(`User ${user.name} has been deleted by Admin ${this.name}!`);
    return users.filter((u) => u !== user);
  }
}

// Tạo instance
const user1 = new User("Cherry", "cherry@example.com", false);
const user2 = new User("Johny", "johny@example.com", false);
const admin1 = new AdminUser("Alex", "alex@example.com");
const admin2 = new AdminUser("Linda", "linda@example.com");

// Tạo mảng users & AdminUser
let users: User[] = [user1, user2, admin1, admin2];

// In trước khi xóa
console.log("=== BEFORE DELETE ===");
users.forEach((u) => console.log(u.getInfo()));

// Gọi method deleteUser
console.log("=== DELETE PROCESS ===");
users = admin1.deleteUser(user1, users);

// Duyệt mảng và in info sau xóa
console.log("=== AFTER DELETE ===");
users.forEach((u) => console.log(u.getInfo()));