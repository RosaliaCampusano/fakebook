import React from "react";
import Home from "./screens/Home";
import Menu from "./screens/Menu";
import Groups from "./screens/Groups";
import "react-native-gesture-handler";
import Profile from "./screens/Profile";
import Friends from "./screens/Friends";
import Header from "./components/Header";
import Notification from "./screens/Notification";
import { StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffffffff" barStyle="dark-content" />;
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName: String = "";
              if (route.name === "Home") iconName = "home";
              else if (route.name === "Friends")
                iconName = "account-multiple-outline";
              else if (route.name === "Groups") iconName = "account-group";
              else if (route.name === "Profile")
                iconName = "account-circle-outline";
              else if (route.name === "Notification") iconName = "bell-outline";
              else if (route.name === "Menu") iconName = "menu";
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={26}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: "#3a86e9",
            tabBarInactiveTintColor: "#9F9F9F",
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "#ffffffff",
            },
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Friends" component={Friends} />
          <Tab.Screen name="Groups" component={Groups} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Notification" component={Notification} />
          <Tab.Screen name="Menu" component={Menu} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
