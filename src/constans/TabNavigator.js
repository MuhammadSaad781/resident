import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PickupRequest from "../screens/PickupRequest";
import Setting from "../screens/Setting";
import Notification from "../screens/Notification";
import { AntDesign } from "@expo/vector-icons";
import WelcomePage from "../screens/WelcomePage";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "WelcomePage") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Pickup Request") {
            iconName = focused ? "filetext1" : "filetext1";
          } else if (route.name === "Notification") {
            iconName = focused ? "bells" : "bells";
          } else if (route.name === "Setting") {
            iconName = focused ? "setting" : "setting";
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#246BFD",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="WelcomePage"
        component={WelcomePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Pickup Request"
        component={PickupRequest}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
