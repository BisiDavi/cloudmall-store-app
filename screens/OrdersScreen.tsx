import React, { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Tab, TabView } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import NewOrdersTab from "@components/NewOrdersTab";
import CompletedOrdersTab from "@components/CompletedOrdersTab";
import { RootState } from "@store/RootReducer";
import WelcomeModal from "@components/WelcomeModal";
import { CloseWelcomeModalAction } from "@store/actions/SetupStoreAction";
import { colors } from "@utils/.";
import { DrawerStackParamList } from "@customTypes/.";
import StoreProfileActions from "@store/actions/StoreProfileActions";
import { getStoreDetailsRequest } from "@network/getRequest";

type OrdersScreenNavigationProps = StackNavigationProp<
    DrawerStackParamList,
    "OrdersScreen"
>;

type Props = {
    navigation: OrdersScreenNavigationProps;
};

export default function OrdersScreen({ navigation }: Props) {
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

    useEffect(() => {
        getStoreDetailsRequest()
            .then((response) => {
                console.log("response getStoredetailsRequest", response.data);
                dispatch(StoreProfileActions(response.data.data));
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <WelcomeModal visible={welcomeModal} closeModal={closeModal} />
                <>
                    <Tab
                        indicatorStyle={{
                            backgroundColor: colors.mallBlue5,
                        }}
                        value={index}
                        onChange={setIndex}
                    >
                        <Tab.Item
                            titleStyle={styles.tabItem}
                            style={styles.tab}
                            title="New Orders"
                        />
                        <Tab.Item
                            titleStyle={styles.tabItem}
                            title="Completed Orders"
                        />
                    </Tab>
                    <TabView value={index} onChange={setIndex}>
                        <TabView.Item style={styles.TabOneView}>
                            <NewOrdersTab navigation={navigation} />
                        </TabView.Item>
                        <TabView.Item style={styles.TabTwoView}>
                            <CompletedOrdersTab navigation={navigation} />
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
    tab: {
        backgroundColor: "white",
        width: "100%",
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
