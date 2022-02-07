import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 200,
    paddingLeft: 10,
    paddingRight: 5,
  },
  fullList: {
    width: "auto",
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

export default function SwipeableTemporaryDrawer({ setCategory }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    categroies: [
      { id: "business", text: "Business" },
      { id: "entertainment", text: "Entertainment" },
      { id: "general", text: "General" },
      { id: "health", text: "Health" },
      { id: "science", text: "Science" },
      { id: "sports", text: "Sports" },
      { id: "technology", text: "Technology" },
    ],
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
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="categories">
          <ListItemText primary="Categories" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {state.categroies.map((item) => (
          <ListItem style={{height:40,borderRadius:3}} button key={item.id} onClick={() => setCategory(item.id)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>
        <ThemeProvider theme={darkTheme}>
          <SwipeableDrawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </ThemeProvider>
      </React.Fragment>
    </div>
  );
}
