export default function screenNavigate(page: number, navigation: any) {
  switch (page) {
    case 1: {
      return navigation.navigate("StoreDetailsScreenTwo");
    }
    case 2: {
      return navigation.navigate("SettlementDetailsScreen");
    }
    case 3: {
      return navigation.navigate("UploadStoreImage");
    }
    case 4: {
      return navigation.navigate("BottomNav");
    }
   
    default:
      return null;
  }
}
