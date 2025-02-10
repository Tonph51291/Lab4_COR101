import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Bai1 from "../Bai1";
import Bai2 from "../Bai2";
import Bai3 from "../Bai3";
import Bai4 from "../Bai4";
import Bai5 from "../Bai5";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Bai5 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
