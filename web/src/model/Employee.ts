import { CompensationService } from "../services/clients";
import { appState } from "../store/AppState";

/**
 * Class for modelling employees.
 */
export class Employee
{
  // The employee compensation.
  public compensation: string = '';

  /**
   * Creates a new instance of the employee object.
   * @param firstName The first name of the employee
   * @param lastName The last name of the employee
   * @param title The title of the employee
   */
  constructor(
    public firstName: string,
    public lastName: string,
    public title: string)
    {

  }

  /**
   * Returns the full display name of the employee.
   */
  public get fullName(): string
  {
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * Loads the employee's compensation from the server.
   */
  public async loadCompensation()
  {
    const compensation = await CompensationService.getCompensation();

    // This doesn't work and throws an error: TypeError: 'set' on proxy: trap returned falsish for property
    // This is because the instance here is from useSnapshot and is thus frozen.
    // See: https://github.com/pmndrs/valtio/issues/205
    // this.compensation = compensation;

    // This works by finding the instance from state and mutating that instance.
    const employee = appState.employees.find(e => e.fullName === this.fullName);

    if(employee)
    {
      employee.compensation = compensation;
    }
  }
}