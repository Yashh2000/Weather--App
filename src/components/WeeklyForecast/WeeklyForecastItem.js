import React from "react";
import { Box, SvgIcon, Typography } from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { ReactComponent as HumidityIcon } from "../../assets/humidity.svg";

const WeeklyForecastItem = ({ value, type }) => {
  let iconContent;

  if (type === "temperature")
    iconContent = (
      <ThermostatIcon
        sx={{ fontSize: { xs: "15px", sm: "16px", md: "18px" } }}
      />
    );
  else if (type === "wind")
    iconContent = (
      <AirIcon sx={{ fontSize: { xs: "15px", sm: "16px", md: "18px" } }} />
    );
  else if (type === "clouds")
    iconContent = (
      <FilterDramaIcon
        sx={{ fontSize: { xs: "15px", sm: "16px", md: "18px" } }}
      />
    );
  else if (type === "humidity")
    iconContent = (
      <SvgIcon
        component={HumidityIcon}
        inheritViewBox
        sx={{
          fontSize: { xs: "15px", sm: "16px", md: "18px" },
        }}
      />
    );
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "31px",
        color: "rgba(255, 255, 255, .9)",
        gap: { xs: "3px", sm: "4px", md: "6px" },
        width: "100%",
        backgroundColor: "#1a1a1a", // Dark background for the icon and text
        borderRadius: "6px",
        padding: "0.5rem",
      }}
    >
      {iconContent}
      <Typography
        variant="p"
        component="p"
        sx={{
          fontSize: { xs: "12px", sm: "13px" },
          fontWeight: { xs: "400", sm: "600" },
          color: "#ffffff",
          fontFamily: "Poppins",
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default WeeklyForecastItem;
