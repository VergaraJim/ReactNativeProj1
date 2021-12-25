import { Text, View } from "react-native";
import Header from "../Header";

export default function PageBase(props) {
  return (
    <>
      <Header {...props}></Header>
      {props.children}
    </>
  );
}
