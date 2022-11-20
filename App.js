import React from "react";
import ReactNative, { SafeAreaView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

const components = {
  type: "View",
  props: {
    styles: {
      flex: 1,
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  children: [
    {
      key: 1,
      type: "Text",
      children: "Hello",
    },
    {
      key: 2,
      type: "Image",
      props: {
        source: {
          uri: "https://reactnative.dev/img/tiny_logo.png",
        },
        style: {
          width: 66,
          height: 58,
        },
      },
    },
  ],
};

const RuntimeComponent = ({ key, type, props, children }) => {
  if (typeof type != "undefined") {
    let style = StyleSheet.create(props?.styles ? props.styles : {});
    return React.createElement(
      ReactNative[type],
      {
        key: key,
        style,
        ...props,
      },
      children &&
        (typeof children == "string"
          ? children
          : children.map((c) => RuntimeComponent(c)))
    );
  }

  return <></>;
};

export default function App() {
  return (
    <SafeAreaView
      style={StyleSheet.create({
        flex: 1,
        backgroundColor: "white",
      })}
    >
      {RuntimeComponent(components)}
    </SafeAreaView>
  );
}
