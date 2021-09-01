import axiosInstance from "@network/axiosInstance";

export default async function checkExistingStore() {
  await axiosInstance
    .get("/store")
    .then((response) => {
      console.log("response checkExistingStore", response.data);
    })
    .catch((error) => {
      console.log("error checkExistingStore", error);
    });
}
