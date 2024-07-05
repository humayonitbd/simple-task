
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  Link,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
      <AppBar position="static" sx={{ marginBottom: "20px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <List
            component="nav"
            aria-labelledby="main navigation"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "40px",
            }}
          >
            <ListItem>
              <Link
                component={NavLink}
                to="/first-page"
                color="inherit"
                underline="none"
              >
                <Typography variant="body1">First-Page</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                component={NavLink}
                to="/second-page"
                color="inherit"
                underline="none"
              >
                <Typography variant="body1">Second-Page</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                component={NavLink}
                to="/userShow-page"
                color="inherit"
                underline="none"
              >
                <Typography variant="body1">UserShow-Page</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                component={NavLink}
                to="/listing-department-item"
                color="inherit"
                underline="none"
              >
                <Typography variant="body1">Department List</Typography>
              </Link>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    );
};

export default Header;