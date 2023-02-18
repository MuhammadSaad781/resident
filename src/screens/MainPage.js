import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";

import Vector from "../Svgs/Vector";
import MunsTrashValet from "../Svgs/MunsTrashValet";
import { colors } from "../constans/colors";

const MainPage = () => {
  const navigation = useNavigation();
  const [loaded, setloaded] = useState(false);

  const loadfonts = async () => {
    await Font.loadAsync({
      CircularStd: require("../../assets/CircularStd.ttf"),
      "CircularStd-Bold": require("../../assets/CircularStd-Bold.otf"),
      Montserrat: require("../../assets/Montserrat.ttf"),
    });
    setloaded(true);
  };
  useEffect(() => {
    loadfonts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Vector />
        <View style={styles.MunsTrashValettext}>
          <MunsTrashValet />
        </View>
      </View>
      <View style={styles.image}>
        <Image
          source={require("../../assets/Frame.png")}
          style={styles.frame}
        />
      </View>
      <View style={styles.title}>
        {loaded ? <Text style={styles.welcometext}>Welcome to </Text> : ""}
        <View style={styles.secondtext}>
          {loaded ? <Text style={styles.welcometext}>Munsapp!</Text> : ""}
        </View>
        {loaded ? (
          <Text style={styles.description1}>
            Muns provides door pickup trash valet
          </Text>
        ) : (
          ""
        )}
        {loaded ? (
          <Text style={styles.description2}>
            services to apartment complexes
          </Text>
        ) : (
          ""
        )}
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.getstarted}
          onPress={() => navigation.navigate("SignIn")}
        >
          {loaded ? <Text style={styles.getstartedtext}>Sign In</Text> : ""}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.getstarted2}
          onPress={() => navigation.navigate("SignUp")}
        >
          {loaded ? <Text style={styles.getstartedtext2}>Sign Up</Text> : ""}
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  MunsTrashValettext: {
    marginTop: 10,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 80 : 50,
  },
  frame: {
    width: "100%",
    height: "80%",
  },
  image: {
    width: "100%",
    height: "50%",
    marginTop: 30,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
  },
  welcometext: {
    fontSize: 32,
    fontFamily: "CircularStd-Bold",
  },
  secondtext: {
    display: "flex",
    flexDirection: "row",
  },
  hand: {
    marginLeft: 10,
  },
  description1: {
    fontSize: 16,
    color: "#94A1B2",
    marginTop: 20,
    fontFamily: "CircularStd",
  },
  description2: {
    fontSize: 16,
    color: "#94A1B2",
    fontFamily: "CircularStd",
  },
  button: {
    justifyContent: "space-evenly",

    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  getstarted: {
    width: "40%",
    backgroundColor: "#246BFD",
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  getstarted2: {
    width: "40%",
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  getstartedtext: {
    color: "white",
    fontFamily: "CircularStd",
    fontSize: 14,
  },
  getstartedtext2: {
    color: colors.primary,
    fontFamily: "CircularStd",
    fontSize: 14,
  },
});
