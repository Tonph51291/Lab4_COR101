import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Bai3() {
  const [showPass, setShowPass] = useState(true);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={{ padding: 10 }}>
        <Text style={styles.textWelcome}>Hi welcome back</Text>
        <Text>Hello again you have been missed !</Text>
        <Image
          style={styles.styleImage}
          source={require("../assets/images/welcome.jpg")}
        />
        <View>
          <Text style={{ fontSize: 18, marginTop: 10 }}>Email :</Text>
          <TextInput style={styles.styleTextInput} />
        </View>
        <View>
          <Text style={{ fontSize: 18, marginTop: 10 }}>Password :</Text>
          <TextInput style={styles.styleTextInput} secureTextEntry={showPass} />
          <TouchableOpacity
            onPress={() => {
              setShowPass(!showPass);
            }}
            style={{
              position: "absolute",
              top: 50,
              right: 10,
            }}
          >
            <Image
              source={
                showPass === false
                  ? require("../assets/images/hide.png")
                  : require("../assets/images/view.png")
              }
            />
          </TouchableOpacity>
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>Or Login with</Text>
            <View style={styles.divider} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {/* Nút Facebook */}
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../assets/images/facebook.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>

          {/* Nút Google */}
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../assets/images/google.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textWelcome: {
    fontWeight: "bold",
    fontSize: 20,
  },
  styleImage: {
    width: 400,
    height: 200,
    marginTop: 20,
  },
  styleTextInput: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
    marginStart: 30,
    marginTop: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
  },
});
