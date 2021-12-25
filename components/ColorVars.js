import { Appearance } from "react-native";

let ColorVars =
  Appearance.getColorScheme() === "dark"
    ? {
        levels: {
          0: "#121212",
          1: "#1c1c1c",
          2: "#2e2e2e",
          3: "#3b3b3b",
          4: "#4a4a4a",
          5: "#5c5c5c",
        },
        text: "#fff",
      }
    : {
        levels: {
          0: "#fff",
          1: "#d1d1d1",
          2: "#bababa",
          3: "#a3a3a3",
          4: "#919191",
          5: "#7d7d7d",
        },
        text: "black",
      };

export default ColorVars;
