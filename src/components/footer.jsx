import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BluetoothConnectedRoundedIcon from '@mui/icons-material/BluetoothConnectedRounded';
import RecyclingRoundedIcon from '@mui/icons-material/RecyclingRounded';
import LocalTaxiRoundedIcon from '@mui/icons-material/LocalTaxiRounded';


export default function Footer() {
  const [activeTab, setActiveTab] = React.useState(0); // Track selected tab

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation value={activeTab} onChange={handleTabChange}>
        <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
        <BottomNavigationAction label="Blue" icon={<BluetoothConnectedRoundedIcon />}/>
        <BottomNavigationAction label="Green" icon={<RecyclingRoundedIcon />}/>
        <BottomNavigationAction label="Yellow" icon={<LocalTaxiRoundedIcon />}/>
      </BottomNavigation>
    </Box>
  );
}
