import axiosInstance from "@network/axiosInstance";

export default async function checkExistingStore() {
  await axiosInstance
    .get("/store")
    .then((response) => {
      console.log("response", response.data);
    })
    .catch((error) => {
      console.log("error", error);
    });
}
