import { proxy } from "valtio";
import { Company } from "../model/Company";
import { Employee } from "../model/Employee";

/**
 * State class for company information.
 */
class AppState {
  public employees: Employee[] = [];
  public companies: Company[] = [];

  /**
   * Returns a random company.
   * @returns A random Company entity.
   */
  public randomCompany(): Company {
    return appState.companies[Math.floor(Math.random() * this.companies.length)];
  }
}

export const appState = proxy(new AppState());