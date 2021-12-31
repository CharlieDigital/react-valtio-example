import { Employee } from "./Employee";

/**
 * Model class for companies.
 */
export class Company
{
    /**
     * The employees associated with the company.
     */
    public employees: Employee[] = [];

    /**
     * Constructor which creates a new Company with a given name.
     * @param name The name of the company.
     */
    constructor(public name: string)
    {

    }

    /**
     * Returns the computed value representing the salaries for all employees.
     */
    public get salaries(): string
    {
      let total = 0;

      for(const employee of this.employees)
      {
        let salary = employee.compensation
          .replace('$', '')
          .replace(',', '');

        if (!employee.compensation)
        {
          continue;
        }

        total += Number.parseInt(salary);
      }

      return `\$${total}`;
    }
}