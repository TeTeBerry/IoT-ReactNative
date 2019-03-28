import { StyleSheet } from 'react-native'

let inputGap = 15
let mainColor = '#3F51B5'
let borderRadius = 6

 export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
},
     submitBtn: {
      marginTop: 56 - inputGap,
      backgroundColor: mainColor,
      borderRadius: borderRadius
  },
     disabledBtn: {
      backgroundColor: '#d1d1d1'
  },
     sbmtBtnText: {
      height: 45,
      lineHeight: 45,
      textAlign: 'center',
      color: '#fff',
      fontSize: lFontSize,
      fontWeight: '700'
  },
})