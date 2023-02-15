import { useState, useEffect, ReactElement } from "react";
import { ReactCookieProps, useCookies } from "react-cookie";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navbar } from "./Navbar";
import { BottomBar } from "./BottomBar";
import { Grid } from "@mui/material";
import { Sidebar } from "./Sidebar";
import { Feed } from "./Feed";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fb4620",
      light: "#ffffff",
      dark: "#9eb1c4",
      contrastText: "#000000",
    },
    secondary: {
      main: "#0000ff",
      light: "#ffffff",
      dark: "#9eb1c4",
      contrastText: "#000000",
    },
  },
  typography: {
    fontFamily: ["verdana", "arial", "helvetica", "sans-serif"].join(","),
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          justifyContent: "flex-end",
        },
      },
    },
  },
});

interface ComponentProps {
  selectedTab: number;
}

interface Props {
  Component: (props: ComponentProps) => ReactElement;
}

export default function HomePage({ Component }: Props) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Grid container flexDirection={"column"}>
        <Grid item>
          <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </Grid>
        <Grid item>
          <Grid container flexDirection="row" wrap="nowrap">
            <Grid item>
              <Sidebar />
            </Grid>
            <Grid>
              <Component selectedTab={selectedTab} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <BottomBar />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
