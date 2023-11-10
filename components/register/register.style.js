import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    minheight: "100%",
    marginHorizontal: 16,
    justifyContent: "space-between",
  },
  header: {
    fontFamily: FONT.regular,
    fontSize: 16,
    marginBottom: 12,
  },
  textContainer: {
    flexDirection: "row",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    padding: 10,
    marginBottom: 18,
  },
  text: {
    fontFamily: FONT.bold,
    fontSize: 12,
    color: COLORS.drakGray,
  },
  inputText: {
    fontFamily: FONT.regular,
    fontSize: 16,
  },
  labelText: {
    fontFamily: FONT.regular,
    fontSize: 16,
  },
  start: {
    fontFamily: FONT.bold,
    color: "#ff0000",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    marginBottom: 18,
  },
  picker: {
    borderRadius: 10,
    padding: 8,
  },
  image: (h, w) => ({
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    width: w,
    height: h,
    marginBottom: 8,
  }),
  imagePicker: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    marginBottom: 10,
  },
  bottomContainer: {
    height: 32,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomText: {
    fontFamily: FONT.bold,
    fontSize: 16,
    color: COLORS.white,
  },
  container2: {
    // React Native does not use text-align; you can use alignItems to center
    alignItems: "center",
  },
  rectangle: {
    // These are React Native styles
    width: 564,
    height: 43.27,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 1)",
    borderRadius: 15,
  },
  icon: {
    padding: 10,
  },
  text_box_input: {
    // These are React Native styles
    margin: 10,
  },
});

export default styles;
