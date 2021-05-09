import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/homejam-logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import bagIcon from "../../assets/bag-icon.png";
import CloseIcon from "@material-ui/icons/Close";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const handleOnClick = () => {
    setOpenSearch(true);
  };

  const handleSearchClose = () => {
    setOpenSearch(false);
  };
  const handleMenuBar = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="appbar-container">
      <AppBar position="static">
        <Toolbar className="toolbar">
          <div className="appbar-left">
            <Link to="/">
              <img src={logo} alt="homejam-logo" />
            </Link>
          </div>

          <div className="appbar-right">
            {!openSearch && (
              <div className="search-icon">
                <SearchIcon fontSize="small" onClick={handleOnClick} />
                <span className="search-text">Search </span>
              </div>
            )}
            <div className={classes.search}>
              {openSearch && (
                <div>
                  <InputBase
                    placeholder="Search...."
                    autoFocus
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                  <CloseIcon
                    className="closeIcon"
                    onClick={handleSearchClose}
                  />
                </div>
              )}
            </div>
            <div className="appbar-link ">
              <Link to="/"> Help </Link>
            </div>
            <div className="appbar-link">
              <Link to="/"> Account </Link>
            </div>
            <div className="bag-icon">
              <Link to="/">
                <img src={bagIcon} alt="" />
              </Link>
            </div>
            <div className="hamburger-menu">
              <IconButton
                onClick={handleMenuBar}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer">
                <MenuIcon />
              </IconButton>
              <Menu
                color="transparent"
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem>Help</MenuItem>
                <MenuItem>Account</MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
