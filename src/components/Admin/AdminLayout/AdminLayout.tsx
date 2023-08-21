import { Outlet } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

export default function AdminLayout() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2} >
          <AdminSidebar />
        </Grid>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}
