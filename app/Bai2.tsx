import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StatusBar,
  StyleSheet,
} from "react-native";

const App = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [statusBarColor, setStatusBarColor] = useState("#6200EE"); // Màu mặc định

  const onRefresh = () => {
    setRefreshing(true);
    setStatusBarColor("#4CAF50"); // Đổi màu khi kéo xuống

    setTimeout(() => {
      setRefreshing(false);
      setStatusBarColor("#6200EE"); // Trả lại màu gốc sau khi tải xong
    }, 2000);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#4CAF50"]}
        />
      }
    >
      {/* Thay đổi màu StatusBar */}
      <StatusBar backgroundColor={statusBarColor} barStyle="light-content" />

      <Text style={styles.text}>Kéo xuống để thay đổi màu StatusBar</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
