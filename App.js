import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect, Provider as ReduxProvider } from "react-redux";
import MainStore from "./components/Reducer/Reducer";

export default function App() {
  return (
    <ReduxProvider store={MainStore}>
      <MainContainer/>
    </ReduxProvider>
  );
}

function MainContainer(){
  return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
  };
};

function mapStateToProps(state) {
  return {
    var: state.var,
  };
}

const MainContainerBound = connect(mapStateToProps, mapDispatchToProps)(MainContainer)
