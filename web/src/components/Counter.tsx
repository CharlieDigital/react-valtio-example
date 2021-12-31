import { Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import { useSnapshot } from "valtio";
import { appState } from "../store/AppState"

/**
 * This component displays the count of employees and companies.
 */
export default function Counter()
{
  const { employees, companies } = useSnapshot(appState);

  return (
    <Card sx={{maxWidth: 600, m: 2}}>
      <CardContent>
        <List dense>
          <ListItem>
            <ListItemText>Employees: <b>{ employees.length }</b></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Companies: <b>{ companies.length }</b></ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
