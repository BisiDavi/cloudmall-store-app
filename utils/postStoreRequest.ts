import axiosInstance from "@network/axiosInstance";

export default async function formRequest() {
  await axiosInstance
    .post("/store", state)
    .then((response) => {
      const data: any = response.data;
      console.log("data", data);
      setLoading(false);
      if (response.status === 200) {
        showToast(`${data.storeName} stores created`);
        onBoardingNextScreen(4, true);
        navigation.navigate("BottomNav");
      } else {
        showToast(data);
      }
    })
    .catch((error) => {
      setLoading(false);
      showToast(error.response.data);
    });
}
