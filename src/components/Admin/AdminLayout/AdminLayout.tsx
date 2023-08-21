import { Outlet } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

export default function AdminLayout() {
  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <AdminSidebar />
        </Grid>
        <Grid item xs={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}
