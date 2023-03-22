import {StyleSheet} from 'react-native'


export const appStyles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
    
    },

    title:{
        fontSize:50,
        marginBottom:5,
        color:"red",
        fontWeight:1000,
    
    },
    input:{
        backgroundColor: 'white',
        padding:16,
        borderRadius:10,
        borderWidth: 3,
        borderColor:"yellow",
        width:500,
    
    },
    button:{
        backgroundColor: 'blue',
        marginTop:15,
        fontSize:18,
        padding:10,
        borderRadius:6,
        marginLeft:450,    
   
    
    },
    text:{
        backgroundColor: 'green',
        marginTop:25,
        fontSize:17,
        borderRadius:4,
        width:200,
        textAlign:"center",
        padding:10
    
    },
   
    itemContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      borderBottomWidth:1,
      borderColor:"orange",
      paddingVertical:12,
    
    },

    itemText:{
     fontSize:18
    },

    itemDelete:{
     width:23,
     height:23,
     borderRadius:13,
     backgroundColor:"red",
     justifyContent:"center",
     alignItems:"center"
    },

    itemDeleteText:{
      fontSize:18,
      color:"white"
    },
  });
  
  
  