import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, Divider, Grid } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "moment/min/locales";
import { useTranslation } from "react-i18next";

moment.locale("ar");

export default function WeatherCard() {
  // STATES
  const { t, i18n } = useTranslation();

  const [temp, setTemp] = useState({
    number: null,
    description: "",
    min: null,
    max: null,
    icon: null,
  });
  const [dateAndTime, setDateAndTime] = useState("");

  const [locale, setLocale] = useState("ar");
  const direction = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    i18n.changeLanguage("ar");
  }, [i18n]);

  useEffect(() => {
    setDateAndTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    const controller = new AbortController();

    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=50.04&lon=19.94&appid=d97daca08149d36f95a0388af8c69642",
        {
          signal: controller.signal,
        }
      )
      .then(function (response) {
        const responseTemp = Math.round(response.data.main.temp - 272.15);
        const min = Math.round(response.data.main.temp_min - 272.15);
        const max = Math.round(response.data.main.temp_max - 272.15);
        const description = response.data.weather[0].description;
        const responseIcon = response.data.weather[0].icon;
        setTemp({
          number: responseTemp,
          min,
          max,
          description,
          icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
        });
      })
      .catch(function (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.log("Error:", error);
        }
      })
      .finally(function () {}, []);

    return () => {
      controller.abort("Component unmounted");
    };
  }, [i18n]);

  //   Event Handlers
  function handleLanguageClick() {
    if (locale === "en") {
      setLocale("ar");
      i18n.changeLanguage("ar");
      moment.locale("ar");
    } else {
      setLocale("en");
      i18n.changeLanguage("en");
      moment.locale("en");
    }

    setDateAndTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }
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
            dir={direction}
          >
            <Typography variant="h2" style={{ marginRight: "10px" }}>
              {t("Kraków")}
            </Typography>
            <Typography variant="h5" style={{ marginRight: "20px" }}>
              {dateAndTime}
            </Typography>
          </div>
          <Divider sx={{ background: "white" }} />
          <Grid container spacing={2} dir={direction}>
            <Grid
              size={8}
              style={{
                marginTop: "20px",
                mt: 2,
                textAlign: locale === "ar" ? "right" : "left",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography variant="h1">{temp.number}</Typography>
                <img src={temp.icon} alt="Temperature Icon" />
              </Box>
              <Typography variant="h6">{t(temp.description)}</Typography>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h5">
                  {t("min")}: {temp.min}{" "}
                </Typography>
                <Typography variant="h5">|</Typography>
                <Typography variant="h5">
                  {t("max")}: {temp.max}
                </Typography>
              </Box>
            </Grid>
            <Grid size={4}>
              <CloudIcon sx={{ fontSize: "200px", color: "white" }} />
            </Grid>
          </Grid>
        </CardContent>

        <CardActions dir={direction}>
          <Button
            variant="contained"
            color="success"
            onClick={handleLanguageClick}
          >
            {locale === "en" ? "Arabic" : "انجليزي"}
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
