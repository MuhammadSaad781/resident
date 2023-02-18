import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import Vector from "../Svgs/Vector";
import MunsTrashValet from "../Svgs/MunsTrashValet";
import { colors } from "../constans/colors";
import VectorMainPage from "../Svgs/VectorMainPage";
import MainPageMunsLogo from "../Svgs/MainPageMunsLogo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
function WelcomePage(props) {
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
      <View style={styles.parentcontainer}>
        <View style={styles.container1}>
          <ImageBackground
            source={require("../../assets/Dust.png")}
            style={styles.dust}
          >
            <View style={styles.logo}>
              <Vector />
              <View style={styles.logotext}>
                <MunsTrashValet />
              </View>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View style={styles.bannertext}>
                <View style={styles.secondtext}>
                  {loaded ? <Text style={styles.hitext}>Hello There</Text> : ""}
                </View>
                {loaded ? (
                  <Text style={styles.welcometext}>Welcome to Munsapp!</Text>
                ) : (
                  ""
                )}
              </View>
              <Image
                source={require("../../assets/man.png")}
                style={styles.man}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.container2}>
          <View style={styles.parent}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                backgroundColor: colors.lightgreen,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginRight: 15,
              }}
            >
              <MaterialCommunityIcons
                name="bell-ring-outline"
                size={24}
                color={colors.green}
              />
            </View>
            <Text style={styles.description} numberOfLines={3}>
              Munsapp help residents with daily notifications and reminders, so
              they don’t miss their scheduled pick up time from our valets
            </Text>
          </View>
        </View>
        {loaded ? (
          <Text style={styles.recentnoti}>Recent Notifications</Text>
        ) : (
          ""
        )}
        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() => navigation.navigate("Notification")}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                backgroundColor: colors.lightblue,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
              }}
            >
              <MaterialCommunityIcons
                name="timer-sand-empty"
                size={24}
                color="#24A2FD"
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {loaded ? (
                <Text style={styles.text4}>View All Notifications</Text>
              ) : (
                ""
              )}
              {loaded ? (
                <Text style={styles.text5}>
                  See All the previous notifications
                </Text>
              ) : (
                ""
              )}
            </View>
          </View>
          <Ionicons
            name="chevron-forward"
            size={24}
            color="#94A1B2"
            style={{
              position: "absolute",
              alignSelf: "flex-end",
              right: 20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bluebox}
          onPress={() => navigation.navigate("GenerateRequest")}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              {loaded ? <Text style={styles.text6}>Request Pickup</Text> : ""}
              {loaded ? (
                <Text style={styles.text7}>Ask for Muns TrashValet pickup</Text>
              ) : (
                ""
              )}
            </View>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: colors.lightblue,
                marginRight: 20,
                borderWidth: 1,
                borderColor: colors.grey,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="bus-school"
                size={24}
                color="white"
              />
            </View>
          </View>
        </TouchableOpacity>
        {loaded ? <Text style={styles.recentnoti}>Follow Us On</Text> : ""}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            alignSelf: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity style={styles.social}>
            <FontAwesome5 name="facebook" size={30} color={colors.grey} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social}>
            <Entypo
              name="instagram-with-circle"
              size={32}
              color={colors.grey}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social}>
            <Entypo name="twitter-with-circle" size={32} color={colors.grey} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social}>
            <Entypo name="youtube-with-circle" size={32} color={colors.grey} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default WelcomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    left: 40,
    top: 20,
  },
  logotext: {
    marginTop: 10,
  },
  bannertext: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  parentcontainer: {
    marginTop: 50,
  },
  container1: {
    width: "90%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 16,
    marginTop: 15,
    display: "flex",
    alignSelf: "center",
    elevation: 1,
  },
  container2: {
    width: "90%",
    height: 120,
    backgroundColor: "white",
    borderRadius: 16,
    marginTop: 15,
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    elevation: 1,
  },

  dust: {
    width: "100%",
    height: "100%",
  },

  man: {
    width: 70,
    height: 90,

    marginLeft: 60,
  },
  hitext: {
    fontSize: 24,
    fontFamily: "CircularStd-Bold",
    color: "black",
    marginTop: 15,
  },

  welcometext: {
    fontSize: 14,
    left: 10,
    fontFamily: "CircularStd",
    color: colors.grey,
  },

  parent: {
    display: "flex",
    left: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  description: {
    fontSize: 12,
    fontFamily: "CircularStd",
    flexWrap: "wrap",
    width: "80%",
    lineHeight: 15,
  },
  recentnoti: {
    fontSize: 18,
    fontFamily: "CircularStd-Bold",

    marginTop: 15,
    marginLeft: 10,
  },
  buttoncontainer: {
    width: "90%",
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 16,
    backgroundColor: "white",

    elevation: 1,
    marginTop: 10,
  },
  text4: {
    fontFamily: "CircularStd",
    fontSize: 14,
    marginLeft: 20,
    marginTop: 1,
  },
  text5: {
    fontFamily: "CircularStd",
    fontSize: 12,
    marginLeft: 20,
    marginTop: 5,
    color: "#94A1B2",
  },
  bluebox: {
    height: 100,
    width: "90%",
    backgroundColor: colors.primary,
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 16,
    justifyContent: "center",
  },
  text6: {
    color: "white",
    fontSize: 16,
    fontFamily: "CircularStd",
    marginLeft: 20,
    marginTop: 5,
  },
  text7: {
    color: "white",
    fontSize: 12,
    fontFamily: "CircularStd",
    marginLeft: 20,
    marginTop: 5,
  },
  social: {
    display: "flex",
    height: 80,
    width: "20%",
    borderRadius: 16,
    elevation: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
