import { Outlet } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import UserSidebar from "../UserSidebar/UserSidebar";

export default function UserLayout() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <UserSidebar />
        </Grid>
        <Grid item xs={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}
