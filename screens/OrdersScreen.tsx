import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Tab, TabView } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import NewOrdersTab from "@components/NewOrdersTab";
import CompletedOrdersTab from "@components/CompletedOrdersTab";
import { RootState } from "@store/RootReducer";
import WelcomeModal from "@components/WelcomeModal";
import { CloseWelcomeModalAction } from "@store/actions/SetupStoreAction";

export default function OrdersScreen() {
    const [index, setIndex] = useState(0);
    const [welcomeModal, setWelcomeModal] = useState(false);
    const dispatch = useDispatch();

    const { completed, isWelcomeModalShown } = useSelector(
        (state: RootState) => state.setupStore,
    );

    function closeModal() {
        return setWelcomeModal(false);
    }

    useEffect(() => {
        completed && !isWelcomeModalShown && setWelcomeModal(true);
        dispatch(CloseWelcomeModalAction());
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <WelcomeModal visible={welcomeModal} closeModal={closeModal} />
                <>
                    <Tab
                        indicatorStyle={{ backgroundColor: "red" }}
                        value={index}
                        onChange={setIndex}
                    >
                        <Tab.Item
                            titleStyle={styles.tabItem}
                            title="New Orders"
                        />
                        <Tab.Item
                            titleStyle={styles.tabItem}
                            title="Completed Orders"
                        />
                    </Tab>
                    <TabView value={index} onChange={setIndex}>
                        <TabView.Item style={styles.TabOneView}>
                            <NewOrdersTab />
                        </TabView.Item>
                        <TabView.Item style={styles.TabTwoView}>
                            <CompletedOrdersTab />
                        </TabView.Item>
                    </TabView>
                </>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TabOneView: {
        width: "100%",
    },
    tabItem: {
        color: "black",
        fontSize: 12,
        marginBottom: 0,
    },
    TabTwoView: {
        width: "100%",
    },
});
