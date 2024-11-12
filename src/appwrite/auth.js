import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appWriteUrl).setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  // Create a new user account and login
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        return this.login({ email, password });
      }
      return null;
    } catch (error) {
      console.error("Error creating account:", error);
      throw new Error("Account creation failed. Please try again.");
    }
  }

  // Login with email and password
  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(email, password);
      // Store session or JWT token if necessary for persistent login
      localStorage.setItem("session", JSON.stringify(session));
      return session;
    } catch (error) {
      console.error("Error logging in:", error);
      throw new Error("Invalid credentials. Please try again.");
    }
  }

  // Retrieve the current user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Error while fetching user details from Appwrite:", error.message);
      if (error.code === 401) {
        console.warn("User is unauthorized. Redirecting to login...");
        // Optionally, you can redirect here
        return null;
      }
      throw new Error("Failed to fetch user details. Please try again.");
    }
  }

  // Log the user out
  async logout() {
    try {
      await this.account.deleteSessions();
      localStorage.removeItem("session");
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Error while logging out from Appwrite:", error.message);
      throw new Error("Logout failed. Please try again.");
    }
  }

  // Check if user is authenticated
  isAuthenticated() {
    const session = localStorage.getItem("session");
    return session ? true : false;
  }

  // Reset password (optional feature)
  async resetPassword(email) {
    try {
      await this.account.createRecovery(email, `${window.location.origin}/reset-password`);
      console.log("Recovery email sent.");
    } catch (error) {
      console.error("Error sending recovery email:", error.message);
      throw new Error("Failed to send recovery email. Please try again.");
    }
  }

  // Update user profile
// Updated version of the updateUserProfile method to use the correct Appwrite methods.
// Update user profile in AuthService
async updateUserProfile({ name, email, password }) {
  try {
    // Update email if it's different from the current email
    if (email && email !== this.account.currentEmail) {
      await this.account.updateEmail(email, password); // Requires password to change email
    }

    // Update name if it's different from the current name
    if (name && name !== this.account.currentName) {
      await this.account.updateName(name);
    }

    console.log("User profile updated successfully");
  } catch (error) {
    console.error("Error updating user profile:", error.message);
    throw new Error("Failed to update profile. Please try again.");
  }
}


}

const authService = new AuthService();
export default authService;
