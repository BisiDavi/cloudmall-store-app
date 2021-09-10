import axiosInstance from "@network/axiosInstance";
import screenNavigate from "./screenNavigate";

export default async function checkExistingStore(
  navigation: any,
  email: string
) {
  await axiosInstance
    .get("/store")
    .then((response) => {
      const { availableStores } = response.data;
      const currentUserStore = availableStores.filter((store: any) =>
        new RegExp(email, "i").test(store.adminEmail)
      );
      console.log("currentUserStore", currentUserStore);
      if (currentUserStore.length > 0) {
        screenNavigate(5, navigation);
      }
    })
    .catch((error) => {
      console.log("error checkExistingStore", error);
    });
}
