import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Avatar, Image } from "react-native-elements";
import AppModal from "@components/AppModal";
import clipboard from "@assets/clipboard.png";
import colors from "@utils/colors";

export default function OrdersListItem({ item }: OrdersViewProps) {
  const [visible, setVisible] = useState(false);

  const toggleModal = (item: any) => {
    console.log("item", item);
    return setVisible(!visible);
  };

  return (
    <>
      <ListItem
        key={item?.id}
        style={styles.listItem}
        onPress={toggleModal}
        bottomDivider
      >
        <Avatar avatarStyle={styles.avatar} rounded />
        <ListItem.Content>
          <View style={styles.row}>
            <Text>{item?.name}</Text>
            <Text>{item?.code}</Text>
          </View>
          <View style={styles.row}>
            <Text>{item?.time}</Text>
            <Image style={styles.clipboard} source={clipboard} />
            <Text style={styles.status}>{item?.status}</Text>
          </View>
        </ListItem.Content>
      </ListItem>
      <AppModal
        style={styles.appModal}
        visible={visible}
        toggleOverlay={() => setVisible(!visible)}
      >
        <Text>Hello David</Text>
      </AppModal>
    </>
  );
}

interface OrdersViewProps {
  item: {
    id: number;
    name: string;
    code: string;
    time: string;
    status: string;
  };
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  clipboard: {
    height: 20,
    width: 20,
  },
  avatar: {
    height: 50,
    backgroundColor: "#C4C4C4",
    width: 100,
  },
  status: {
    backgroundColor: colors.cloudOrange5,
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
    fontSize: 12,
    color: colors.neutralWhite,
  },
  appModal: {
    flex: 1,
  },
});
