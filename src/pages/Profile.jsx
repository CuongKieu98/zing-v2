import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Playlist from "../components/playlist/Playlist";

const Profile = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container-main">
      <div className="profile">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "var(--border-primary)" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="secondary"  indicatorColor="secondary">
              <Tab label="Bài Hát" value="1" sx={{ fontSize: "14px", color: "var(--text-item-hover)" }}/>
              <Tab label="PODCAST" value="2" sx={{ fontSize: "14px", color: "var(--text-item-hover)" }}/>
              <Tab label="ALBUM" value="3" sx={{ fontSize: "14px", color: "var(--text-item-hover)" }}/>
              <Tab label="MV" value="4" sx={{ fontSize: "14px", color: "var(--text-item-hover)" }}/>
            </TabList>
          </Box>
          <TabPanel value="1">{<Playlist />} </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item Three</TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default Profile;
