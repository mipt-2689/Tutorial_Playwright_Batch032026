export class LoginPage {

  async gotoLoginPage(): Promise<void> {
    console.log("Navigate to login page...");
  }

  async login(username: string, password: string): Promise<void> {
    console.log(`Login with ${username} - ${password}`);
  }
}