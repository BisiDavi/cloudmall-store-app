export default function screenNavigate(page: number, navigation: any) {
  switch (page) {
    case 0: {
      return navigation.navigate("StoreDetailsScreenOne");
    }
    case 1: {
      return navigation.navigate("StoreDetailsScreenTwo");
    }
    case 2: {
      return navigation.navigate("SettlementDetailsScreen");
    }
    case 3: {
      return navigation.navigate("UploadStoreLogoScreen");
    }
    case 4: {
      return navigation.navigate("UploadStoreImageScreen");
    }
    case 5: {
      return navigation.navigate("Orders");
    }

    default:
      return null;
  }
}
