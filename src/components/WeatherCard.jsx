import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, Divider, Grid } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";

export default function WeatherCard() {
  return (
    <Container maxWidth="md">
      <Card
        variant="outlined"
        style={{
          borderRadius: "15px",
          boxShadow: "0px 11px 1px rgba(0,0,0,0.05)",
          background: "darkblue",
          color: "white",
        }}
      >
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "start",
            }}
            dir="rtl"
          >
            <Typography variant="h2" style={{ marginRight: "10px" }}>
              كراكوف
            </Typography>
            <Typography variant="h4" style={{ marginRight: "20px" }}>
              الاثنين 25-10-2025
            </Typography>
          </div>
          <Divider sx={{ background: "white" }} />
          <Grid container spacing={2} dir="rtl">
            <Grid
              size={8}
              style={{ marginTop: "20px", mt: 2, textAlign: "right" }}
            >
              <Typography variant="h1">38</Typography>
              {/* Todo: weather image */}
              <Typography variant="h6">broken clouds</Typography>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h5">الكبري:28</Typography>
                <Typography variant="h5">|</Typography>
                <Typography variant="h5">الصغري:15</Typography>
              </Box>
            </Grid>
            <Grid size={4}>
              <CloudIcon sx={{ fontSize: "200px", color: "white" }} />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="success">
            English
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
