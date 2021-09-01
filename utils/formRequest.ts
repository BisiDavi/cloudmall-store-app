import axiosInstance from "@network/axiosInstance";

export default async function formRequest() {
  await axiosInstance;
  // .post("/store", values)
  // .then((response) => {
  //   const data: any = response.data;
  //   console.log("data", data);
  //   setLoading(false);
  //   if (response.status === 200) {
  //     setStoreId(data?._id);
  //     showToast(`${data.storeName} stores created`);
  //     onBoardingNextScreen(1, false);
  //     navigation.navigate("StoreDetailsScreenTwo");
  //     dispatch(StoreDetailsSubmittedAction(values));
  //   } else {
  //     showToast(data);
  //   }
  // })
  // .catch((error) => {
  //   setLoading(false);
  //   showToast(error.response.data);
  // });
}
