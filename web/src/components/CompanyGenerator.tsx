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
import { Company } from "../model/Company";
import { appState } from "../store/AppState";

// Random array of company names.
const companies = [
  "Amazon.com",
  "General Motors",
  "Aramark",
  "HollyFrontier",
  "Clorox",
  "Westlake Chemical",
  "Gilead Sciences",
  "Las Vegas Sands",
  "CHS",
  "Hewlett Packard Enterprise",
  "iHeartMedia",
  "Coca-Cola",
  "Verizon Communications",
  "AutoZone",
  "SunTrust Banks",
  "Performance Food Group",
  "Advance Auto Parts",
  "Post Holdings",
  "Lear",
  "McDonald's",
];

/**
 * This function randomly generates an employee.
 */
function generateCompany() {
  const random = Math.floor(Math.random() * 20);

  appState.companies.push(new Company(companies[random]));
}

/**
 * This component displays the count of employees and companies.
 */
export default function CompanyGenerator() {
  const { companies } = useSnapshot(appState);

  return (
    <Card sx={{ maxWidth: 600, m: 2 }}>
      <CardContent>
        <List dense>
          {companies.map((c) => (
            <ListItem key={Math.floor(Math.random() * 1000000)}>
              <ListItemText>
                Company Name:{" "}
                <b>
                  {c.name} ({c.employees.length} employees; {c.salaries})
                </b>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button onClick={generateCompany}>ADD ({companies.length})</Button>
      </CardActions>
    </Card>
  );
}
