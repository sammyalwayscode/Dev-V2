import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import storage from "local-storage-fallback";

import HomeMain from "./Components/Home/HomeMain/HomeMain";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnboardingOne from "./Components/Onboarding/OnboardingOne";
import OnbordingTwo from "./Components/Onboarding/OnbordingTwo";
import OnboardingThree from "./Components/Onboarding/OnboardingThree";
import OnboardingFour from "./Components/Onboarding/OnboardingFour";

const LightTheme = {
  pageBackground: "white",
  textColor: "#071E48",
  gradentBackground: "linear-gradient(to right, #EEEEEE, #FBFBFB)",
  compGradent: "linear-gradient(to right, #ffffff, #f6f9ff, #ffffff)",
  footerBgColor: "#f6f9ff",
  footerTextTitleColor: "#273B60",
  footerTextNavColor: "#273B60",
};

const DarkTheme = {
  pageBackground: "#212429",
  textColor: "#fff",
  gradentBackground:
    "linear-gradient(to bottom right, #2d2f33, #2c2e32, #222529)",
  compGradent:
    "linear-gradient(to bottom right, #222529, #272A2F, #2A2D31, #2A2C31, #272A2F, #222529)",
  footerBgColor: "linear-gradient(to bottom, #212429, #1A1C20  )",
  footerTextTitleColor: "#fafafa",
  footerTextNavColor: "#D1E0FB",
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
      <BrowserRouter>
        <ThemeProvider theme={themes[theme]}>
          <Routes>
            <Route
              path="/"
              element={<HomeMain theme={theme} setTheme={setTheme} />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/onboardingone" element={<OnboardingOne />} />
            <Route path="/onboardingtwo" element={<OnbordingTwo />} />
            <Route path="/onboardingthree" element={<OnboardingThree />} />
            <Route path="/onboardingfour" element={<OnboardingFour />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
