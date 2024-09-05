import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import { DisNavMenu, DisNavMenu2, MenuButton } from "../style";
import { Link } from "react-router-dom";
import { SLink } from "../page/linkStyle";
import BasicModalSide from "./signModal -side";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          paddingTop: "30px",
        }}
      >
        <SLink to="/motor">
          {
            <DisNavMenu>
              <svg
                style={{ transform: "rotate(90deg)" }}
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="gray"
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
              Motor
            </DisNavMenu>
          }
        </SLink>
        <SLink to="/caravan">
          {
            <DisNavMenu>
              <svg
                style={{ transform: "rotate(90deg)" }}
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="gray"
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
              Caravan
            </DisNavMenu>
          }
        </SLink>
        <SLink to="/tuning">
          {
            <DisNavMenu>
              <svg
                style={{ transform: "rotate(90deg)" }}
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="gray"
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
              Tuning
            </DisNavMenu>
          }
        </SLink>
        <SLink to="/usedCar">
          {
            <DisNavMenu>
              <svg
                style={{ transform: "rotate(90deg)" }}
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="gray"
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
              Used Cars
            </DisNavMenu>
          }
        </SLink>
        <SLink to="/camping">{<DisNavMenu2>Camping Place</DisNavMenu2>}</SLink>
        {
          <DisNavMenu2>
            <BasicModalSide />
          </DisNavMenu2>
        }
        {<DisNavMenu2>My Orders</DisNavMenu2>}
        {<DisNavMenu2>Log out</DisNavMenu2>}
        {<DisNavMenu2>Setting</DisNavMenu2>}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuButton onClick={toggleDrawer(anchor, true)} />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
