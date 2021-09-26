import React, { useState, useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { ListItem, Switch, Image } from "react-native-elements";
import productContent from "@json/products.json";
import { DrawerStackParamList } from "@customTypes/.";
import colors from "@utils/colors";
import Fab from "@components/Fab";
import displayAsset from "@utils/displayAsset";
import {
    getAllProductsRequest,
    toggleSpecificationStatusRequest,
} from "@network/postRequest";
import { RootState } from "@store/RootReducer";
import showToast from "@utils/showToast";

type ProductScreenNavigationProps = StackNavigationProp<
    DrawerStackParamList,
    "ProductScreen"
>;

type ProductScreenRouteProps = RouteProp<DrawerStackParamList, "ProductScreen">;

type Props = {
    route: ProductScreenRouteProps;
    navigation: ProductScreenNavigationProps;
};

interface productType {
    products: [] | null;
}

function ListView({ item }: any) {
    const [toggle, setToggle] = useState(false);

    function postSpecificationStatus() {
        toggleSpecificationStatusRequest({
            specificationId: item._id,
            status: toggle,
        })
            .then((response) => {
                showToast(`${item.name}, ${response.data.message}`);
            })
            .catch((error) => {
                if (error.response) {
                    showToast(error.response.data.message);
                } else if (error.request) {
                    showToast("Oops, unable to update, due to poor network");
                }
            });
    }

    return (
        <ListItem bottomDivider style={styles.listItem}>
            <ListItem.Content>
                <View style={styles.listViewContent}>
                    <Text style={styles.meal}>{item.name}</Text>
                    <Text style={styles.edit}>
                        <Image
                            source={displayAsset("editIcon")}
                            style={styles.editIcon}
                        />
                    </Text>
                    <Switch
                        value={toggle}
                        onValueChange={() => {
                            setToggle(!toggle);
                            postSpecificationStatus();
                        }}
                        style={styles.switch}
                        color={colors.cloudOrange5}
                    />
                </View>
            </ListItem.Content>
        </ListItem>
    );
}

function ProductListView({ products }: productType) {
    return (
        <>
            {products?.map((item: any) => (
                <ListView item={item} key={item._id} />
            ))}
        </>
    );
}

export default function ProductScreen({ navigation }: Props) {
    const [storeProducts, setStoreProducts] = useState(null);
    const { storeProfile }: any = useSelector(
        (state: RootState) => state.storeProfile,
    );

    useEffect(() => {
        getAllProductsRequest({ storeId: storeProfile.id })
            .then((response: any) => {
                const { products } = response.data.data;
                console.log("products", products);
                setStoreProducts(products);
            })
            .catch((error: any) => {
                console.log("error", error);
            });
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.productView}>
                    {storeProducts ? (
                        <ProductListView products={storeProducts} />
                    ) : (
                        <Text style={styles.indicator}>
                            Fetching Products...
                        </Text>
                    )}
                </View>
            </ScrollView>
            <View style={styles.fabView}>
                <Fab
                    onPress={() =>
                        navigation.navigate("AddProductScreenMethod")
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: colors.neutralWhite,
        flexDirection: "column",
        width: Dimensions.get("window").width,
    },
    meal: {
        width: 100,
    },
    indicator: {
        marginLeft: 30,
        marginTop: 20,
    },
    edit: {
        color: colors.mallBlue5,
    },
    switch: {
        display: "flex",
    },
    editIcon: {
        height: 15,
        width: 15,
    },
    listItem: {
        width: Dimensions.get("window").width,
    },
    listViewContent: {
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
        width: Dimensions.get("window").width * 0.9,
    },
    fabView: {
        height: 70,
    },
    productView: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    category: {
        color: colors.mallBlue5,
        padding: 15,
    },
    textView: {
        height: 50,
        width: Dimensions.get("window").width,
        borderWidth: 1,
        borderBottomColor: colors.neutral3,
        borderLeftColor: "transparent",
        borderTopColor: "transparent",
        borderRightColor: "transparent",
    },
});
