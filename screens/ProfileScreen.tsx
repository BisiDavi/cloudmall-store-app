import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem, Avatar, Image } from "react-native-elements";
import { Button, Overlay } from "react-native-elements";
import profileJson from "@json/profile.json";
import { SafeAreaView } from "react-native-safe-area-context";
import JollofRice from "@assets/jollofRice.png";

export default function ProfileScreen() {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    console.log("overlay working");
    setVisible(!visible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileDetails}>
        <Image style={styles.profileImage} source={JollofRice} />
        <View>
          <Text>Ongbonna</Text>
          <Text>Store ID: 11</Text>
        </View>
        <Button title="In review" />
      </View>
      <View>
        {profileJson.map((profile, index) => (
          <ListItem key={index} bottomDivider>
            <ListItem.Content>
              <Text style={styles.profileText}>{profile.title}</Text>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  profileText: {
    color: "black",
  },
  profileImage: {
    height: 50,
    width: 50,
  },
  profileDetails: {
    flexDirection: "row",
  },
});
