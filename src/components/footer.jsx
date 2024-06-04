import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BluetoothConnectedRoundedIcon from "@mui/icons-material/BluetoothConnectedRounded";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import RecyclingRoundedIcon from "@mui/icons-material/RecyclingRounded";
import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState(0); // Track selected tab
  const linkHomeStyle = {
    color: "#B795BE",
  };
  const linkBlueStyle = {
    color: "#275db3",
  };
  const linkRedStyle = {
    color: "#b05f6d",
  };
  const linkGreenStyle = {
    color: "#a3b899",
  };
  const linkYellowStyle = {
    color: "#ffe39f",
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    // navigate to corresponding page based on selected tab index
    switch (newValue) {
      case 0:
        navigate("/home");
        break;
      case 1:
        navigate("/blue");
        break;
      case 2:
        navigate("/red");
        break;
      case 3:
        navigate("/green");
        break;
      case 4:
        navigate("/yellow");
        break;
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        className="footer"
        value={activeTab}
        onChange={handleTabChange}
      >
        <BottomNavigationAction label="Home" style={linkHomeStyle} icon={<HomeRoundedIcon />} />
        <BottomNavigationAction
          label="Blue"
          style={linkBlueStyle}
          icon={<BluetoothConnectedRoundedIcon />}
        />
        <BottomNavigationAction
          label="Red"
          style={linkRedStyle}
          icon={<ReportGmailerrorredIcon />}
        />
        <BottomNavigationAction label="Green" style={linkGreenStyle} icon={<RecyclingRoundedIcon />} />
        <BottomNavigationAction
          label="Yellow"
          style={linkYellowStyle}
          icon={<LocalTaxiRoundedIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
