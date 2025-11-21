import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  searchGroup: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "white",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    backgroundColor: "#FAFAFA",
    borderRadius: 14,
    padding: 12,
  },
  searchControlGroup: {
    flex: 1,
    rowGap: 6,
  },
  searchFormText: {
    fontSize: 14,
    color: "#7B7B7B",
  },
  searchControl: {
    height: 32,
  },
  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#34967C",
    alignItems: "center",
    justifyContent: "center",
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: 6,
    width: 96,
  },
  listingContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  showMoreButton: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  showMoreButtonText: {
    fontSize: 16,
    color: "#34967C",
  },
});

export { styles };