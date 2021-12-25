import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { connect, Provider as ReduxProvider } from "react-redux";
import ColorVars from "./components/ColorVars";
import PageHome from "./components/Pages/Home";
import { setPageAction, toggleSideMenuAction } from "./components/Reducer/Actions";
import { PAGE_HOME, PAGE_TEST } from "./components/Reducer/Constants";
import MainStore from "./components/Reducer/Reducer";

export default function App() {
  return (
    <ReduxProvider store={MainStore}>
      <PaperProvider>
        <MainContainerBound/>
      </PaperProvider>
    </ReduxProvider>
  );
}

function MainContainer(props){

  let page = null;

  switch(props.currentPage){
    case PAGE_HOME:
      page = (<PageHome {...props}></PageHome>);
      break;
    case PAGE_TEST:
      page = (<Text>{PAGE_TEST}</Text>);
      break;
    default:
      page = (<Text>Default</Text>);
      break;
  }

  return (
      <View style={styles.container}>
        <SafeAreaView>
          {page}
        </SafeAreaView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorVars.levels["0"],
  },
  body: {
    flex: 1,
    backgroundColor: "blue",
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch(toggleSideMenuAction()),
    setPage: (page) => dispatch(setPageAction(page)),
  };
};

function mapStateToProps(state) {
  return {
    sidebarActive: state.isSideMenuOpen,
    currentPage: state.currentPage,
  };
}

const MainContainerBound = connect(mapStateToProps, mapDispatchToProps)(MainContainer)
