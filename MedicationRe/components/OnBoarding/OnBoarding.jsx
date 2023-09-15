import * as React from "react";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "./GlobalStyles";

const OnBoarding = ({handlechange}) => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.content1Parent}>
        <View style={[styles.content1, styles.content1Position]}>
          <Text style={styles.expressYourCreativityContainer}>
            {`Express your `}creativity
          </Text>
          <Text style={[styles.loremIpsumDolor, styles.skipTypo]}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur,.
          </Text>
        </View>
        <Image
          style={styles.image1Icon}
          contentFit="contain"
          source={require("../../assets/logoLoader.png")}
        />
        <View style={[styles.actions1, styles.content1Position]}>
          <View style={styles.buttonlink}>
            <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
          </View>
          <TouchableHighlight
           activeOpacity={0.6}
           underlayColor="#DDDDDD"
           onPress={() => handlechange()}
          >
            
          <View  style={styles.wrapper}>
            <Image
              style={styles.arrowRightIcon}
              contentFit="cover"
              source={require("../../assets/arrow-right.png")}
              />
          </View>
              </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content1Position: {
    left: 0,
    right: 13,
    position: "absolute",
  },
  skipTypo: {
    fontSize: FontSize.otherStylesBody16pxBold140_size,
    textAlign: "left",
  },
  expressYourCreativityContainer: {
    fontSize: 32,
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "700",
  },
  loremIpsumDolor: {
    alignSelf: "stretch",
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 16,
    color: Color.colorBlack,
    fontSize: FontSize.otherStylesBody16pxBold140_size,
  },
  content1: {
    bottom: 83,
  },
  image1Icon: {
    top: 0,
    left: 68,
    borderRadius: 60,
    width: 230,
    height: 274,
    position: "absolute",
  },
  skip: {
    lineHeight: 22,
    fontFamily: FontFamily.otherStylesBody16pxBold140,
    color: Color.colorGray,
    fontSize: FontSize.otherStylesBody16pxBold140_size,
    fontWeight: "700",
  },
  buttonlink: {
    height: 40,
    padding: 8,
    flexDirection: "row",
  },
  arrowRightIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  wrapper: {
    borderRadius: 8,
    backgroundColor: Color.colorGray,
    padding: 12,
    flexDirection: "row",
    overflow: "hidden",
  },
  actions1: {
    bottom: 0,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  content1Parent: {
    right: 57,
    bottom: 56,
    left: 57,
    height: 574,
    position: "absolute",
  },
  groupParent: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 732,
    overflow: "hidden",
  },
});

export default OnBoarding;
