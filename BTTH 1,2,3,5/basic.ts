// Khai báo các biến:
const username: string = "MipT";
let age: number;
const isActive: boolean = true;
const roles: string[] = ["Admin", "Tester"];
const user : {name: string, email: string, isAdmin: boolean} =
    { name : "Pham Thao Mi", email: "pham.thao.mi@sun-asterisk.com", isAdmin: true};

// In thông tin user
console.log(
    `User: ${user.name} (email: ${user.email}), Roles: ${roles.join(", ")}, Active: ${isActive}`
);
age = 0;

// Function check Age
function checkAge(age: number) :void {
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Under 18");
    }
}

checkAge(age);