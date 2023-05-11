import React from "react";
import { faTriangleExclamation, faChartLine, faAddressBook, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssessmentIcon from '@mui/icons-material/Assessment';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import InfoIcon from '@mui/icons-material/Info';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import '../Content/content.css'
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

// import "./style.css";

function Content() {
  const { collapseSidebar } = useProSidebar()

  const items = [
    { title: "Dashborad", icon:faChartSimple},
    { title: "All Issue", icon: faTriangleExclamation},
    { title: "Report", icon: faChartLine},
    { title: "Contact", icon: faAddressBook },
    { title: "About", icon: faAddressCard}
  ]

  return (
      <div id="app" style={{height: "100vh", display: "flex"}}>
        <Sidebar style={{ height: "100vh" }}>
          <Menu>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={() => {
                collapseSidebar();
              }}
              style={{ textAlign: "center" }}
            >
              <span className="fs-5">System Support</span>
            </MenuItem>
            <hr />
          <Link to='/'><div><MenuItem icon={<LeaderboardIcon />}> Dashboard </MenuItem></div></Link>
          <Link to='/home'><div><MenuItem  icon={<HomeOutlinedIcon />}>  All Issue </MenuItem> </div> </Link>
          <Link to='/report'><div><MenuItem icon={<AssessmentIcon />}>Report</MenuItem></div></Link>
          <Link to='/'><div><MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem></div></Link>
          <Link><div><MenuItem icon={<InfoIcon />}>About</MenuItem></div></Link>
          </Menu>          
        </Sidebar>
      </div>
  );
}
export default Content;
