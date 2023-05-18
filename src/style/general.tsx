import { StyleSheet } from "react-native";

export const generalStyle = StyleSheet.create({
  roundBtn:{
    alignItems: 'center',
    borderRadius: 10,
  },
  btnBigSize :{
    paddingVertical: 20,
  },
  btnSmallSize :{
    width : 120,
    paddingHorizontal :30,
    paddingVertical: 10,
  },
  btnNormalSize :{
    width : 120,
    paddingHorizontal :30,
    paddingVertical: 10,
  },
  btnSmallSizeNoWidth :{

    paddingHorizontal :40,
    paddingVertical: 10,
  },
  btnNormalSizeNoWidth :{

    paddingHorizontal :40,
    paddingVertical: 30,
  },
  generalBtn:{
    alignItems: 'center',
    borderRadius: 5,

  },
  generalInput:{

    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 12,
    margin:0,
    paddingLeft:10,
    color: '#FFFFFF'
  },
  shadow : {
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowColor : 'rgba(0,0,0,0.25)',
    shadowOpacity : 0.5,
    shadowRadius : 5,
  },
  greyArea : {
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#D2D2D2",
    backgroundColor: "#E6E6E6",
    flexDirection: "column"
  },
  simpleGreyArea : {
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    width : 120,
    backgroundColor: "#E6E6E6",
    flexDirection: "column"
  }

});
