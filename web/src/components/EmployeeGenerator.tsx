import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useSnapshot } from "valtio";
import { Employee } from "../model/Employee";
import { appState } from "../store/AppState";

// Array of first names.
const firstNames = [
  "Aidan",
  "Sharon",
  "Leonidas",
  "Mikaela",
  "Chase",
  "Kathleen",
  "Zaid",
  "Paul",
  "Issac",
  "Ethen",
  "Vaughn",
  "Chasity",
  "Magdalena",
  "Coleman",
  "Sofia",
  "Cecelia",
  "Alannah",
  "Moses",
  "Irvin",
  "Ayana",
];

// Array of surnames.
const lastNames = [
  "Vasquez",
  "Abbott",
  "Preston",
  "Ashley",
  "Yu",
  "Avila",
  "Douglas",
  "Strickland",
  "Yoder",
  "Todd",
  "Alexander",
  "Kim",
  "Garrett",
  "Boyle",
  "Combs",
  "Macdonald",
  "Johnson",
  "Cobb",
  "Choi",
  "Kelley",
];

// Random list of job titles
const titles = [
  "CEO",
  "President",
  "Vice President of Marketing",
  "Vice President of Engineering",
  "Vice President of HR",
  "Director of Engineering",
  "Director of Marketing",
  "Director of HR",
  "Senior Software Engineer",
  "Senior Sales Engineer",
  "Senior Support Analyst",
];

/**
 * This function randomly generates an employee.
 */
function generateEmployee() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const title = titles[Math.floor(Math.random() * titles.length)];

  const newEmployee = new Employee(firstName, lastName, title);

  appState.employees.push(newEmployee);

  // Randomly pick a company and add the employee to the company.
  const company = appState.randomCompany();

  company.employees.push(newEmployee);

  // This works
  // appState.employees[appState.employees.length - 1].compensation = '$140,000';

  // This does NOT work
  // newEmployee.loadCompensation();

  // This works.
  // appState.employees[appState.employees.length - 1].loadCompensation();

  // This works
  // const proxiedEmployee = appState.employees[appState.employees.length - 1];

  // proxiedEmployee.loadCompensation();
}

/**
 * This component displays the count of employees and companies.
 */
export default function EmployeeGenerator() {
  const { employees, companies } = useSnapshot(appState);

  return (
    <Card sx={{ maxWidth: 600, m: 2 }}>
      <CardContent>
        <List dense>
          {employees.map((e: Employee) => (
            <ListItem key={Math.floor(Math.random() * 1000000)}>
              <ListItemText>
                Employee Name:{" "}
                <b>
                  {e.fullName}, {e.title}
                </b>{" "}
                @
                {e.compensation ? (
                  e.compensation
                ) : (
                  <Button
                    size="small"
                    onClick={async () => await e.loadCompensation()}
                  >
                    Get $$
                  </Button>
                )}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button onClick={generateEmployee} disabled={companies.length === 0}>
          ADD ({employees.length})
        </Button>
      </CardActions>
    </Card>
  );
}
