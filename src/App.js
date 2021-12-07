import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import storage from "local-storage-fallback";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { GlobalProvider } from "./Components/Global/GlobalState";
import HomeMain from "./Components/HomeMain/HomeMain";

const LightTheme = {
  pageBackground: "white",
  textColor: "#071E48",
};

const DarkTheme = {
  pageBackground: "#212429",
  textColor: "#fff",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const storeThemeChoice = () => {
    const saveTheme = storage.getItem("theme");
    return saveTheme
      ? JSON.parse(saveTheme)
      : { themes: "light", myTheme: "light" };
  };

  const [theme, setTheme] = useState(storeThemeChoice);
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <div>
      <GlobalProvider>
        <ThemeProvider theme={themes[theme]}>
          <Header theme={theme} setTheme={setTheme} />
          {/* <Home theme={theme} setTheme={setTheme} /> */}
          <HomeMain theme={theme} setTheme={setTheme} />
        </ThemeProvider>
      </GlobalProvider>
    </div>
  );
}

export default App;

// const Container = styled.div`
//   height: 100%;
//   width: 100%;
//   background-color: ${(mt) => mt.theme.pageBackground};
// `;
