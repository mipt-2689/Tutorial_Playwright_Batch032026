// Viết function sum(a: number, b: number) → trả về tổng.
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(7, 8));

// Viết arrow function multiply = (a: number, b: number) → trả về tích.
const multiply = (a: number, b: number) : number  => a * b;
console.log(multiply(7, 8));

// Viết function greet(name: string, role: string = "Guest") → in "Hello <name>, your role is <role>".
function greet(name: string, role: string = "Guest"): void {
    console.log(
        `Hello ${name}, your role is ${role}.`
    );
}
greet("Mi");

// Viết async function delayPrint(msg: string, time: number) → in message sau time ms.
async function delayPrint(msg: string, time: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, time));
    console.log(msg);
}
delayPrint("The message is delayed after 3s!", 3000);