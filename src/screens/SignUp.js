import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Back from "../Svgs/Back";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import Vector from "../Svgs/Vector";
import MunsTrashValet from "../Svgs/MunsTrashValet";
import { SelectList } from "react-native-dropdown-select-list";
function SignUp(props) {
  const [pickerValue, setPickerValue] = useState("JavaScript");
  const navigation = useNavigation();
  const [loaded, setloaded] = useState(false);
  const [selected, setSelected] = React.useState("");

  const data = [
    { value: "Independance Place" },
    { value: "Lake Fairway" },
    { value: "Sun Hollow" },
    { value: "Ridgemar" },
    { value: "Spring Park" },
    { value: "Cliffside at Mountain Park" },
    { value: "Desert Commons" },
  ];
  const city = [{ value: "El Paso" }];
  const state = [{ value: "Texas" }];

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
      <ScrollView>
        <View style={styles.logo}>
          <Vector />
          <View style={styles.logotext}>
            <MunsTrashValet />
          </View>
        </View>
        <View style={styles.greyline}></View>
        <View style={styles.inputview}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Back
              style={styles.back}
              onPress={() => navigation.navigate("MainPage")}
            />
            {loaded ? <Text style={styles.SignIntext}>Sign Up</Text> : ""}
          </View>
          {loaded ? (
            <Text style={styles.text2}>Get Started with Muns TrashValet</Text>
          ) : (
            ""
          )}
          {loaded ? <Text style={styles.text3}>Email Address</Text> : ""}
          <TextInput placeholder="name@example.com" style={styles.input} />
          {loaded ? <Text style={styles.text4}>Password</Text> : ""}
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />
          {loaded ? <Text style={styles.text4}>Confirm Password</Text> : ""}
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={styles.input}
          />
          {loaded ? <Text style={styles.text3}>State</Text> : ""}
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={state}
            boxStyles={styles.input}
            placeholder=" Select State"
            inputStyles={{
              fontFamily: "CircularStd",
              width: "80%",
              alignSelf: "center",
            }}
            dropdownTextStyles={{ fontFamily: "CircularStd" }}
            dropdownStyles={{
              width: "90%",
              alignSelf: "center",
            }}
          />
          {loaded ? <Text style={styles.text3}>City</Text> : ""}
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={city}
            boxStyles={styles.input}
            placeholder=" Select City"
            inputStyles={{
              fontFamily: "CircularStd",
              width: "80%",
              alignSelf: "center",
            }}
            dropdownTextStyles={{ fontFamily: "CircularStd" }}
            dropdownStyles={{
              width: "90%",
              alignSelf: "center",
            }}
          />
          {loaded ? <Text style={styles.text3}>Property</Text> : ""}
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            boxStyles={styles.input}
            placeholder="Select Property"
            inputStyles={{
              fontFamily: "CircularStd",
              width: "80%",
              alignSelf: "center",
            }}
            dropdownTextStyles={{ fontFamily: "CircularStd" }}
            dropdownStyles={{
              width: "90%",
              alignSelf: "center",
            }}
          />
          {loaded ? <Text style={styles.text4}>Apartment #</Text> : ""}
          <TextInput style={styles.input} />
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.getstarted}
              onPress={() => navigation.navigate("AccountCreated")}
            >
              {loaded ? <Text style={styles.getstartedtext}>Sign Up</Text> : ""}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={{ height: 40 }}></View>
    </SafeAreaView>
  );
}

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 80 : 50,
  },
  logotext: {
    marginTop: 10,
  },
  back: {
    marginLeft: 10,
    marginTop: 40,
  },
  greyline: {
    width: "100%",
    height: 1,
    backgroundColor: "#D6D6D6",
    marginTop: 30,
  },
  SignIntext: {
    fontSize: 28,
    fontFamily: "CircularStd",
    marginTop: 30,
    marginLeft: 10,
    letterSpacing: -1,
  },
  text2: {
    fontSize: 14,
    fontFamily: "CircularStd",
    color: "#94A1B2",
    marginTop: 10,
    left: 16,
  },
  text3: {
    fontSize: 12,
    fontFamily: "CircularStd",
    color: "#94A1B2",
    marginTop: 30,
    left: 16,
  },
  text4: {
    fontSize: 12,
    fontFamily: "CircularStd",
    color: "#94A1B2",
    marginTop: 30,
    left: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D6D6D6",
    height: 50,
    width: "90%",
    marginTop: "2%",
    borderRadius: 12,

    paddingLeft: 20,
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 14,
  },

  getstarted: {
    width: "90%",
    backgroundColor: "#246BFD",
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,

    alignSelf: "center",
  },
  getstartedtext: {
    color: "white",
    fontFamily: "CircularStd",
    fontSize: 14,
  },
});
