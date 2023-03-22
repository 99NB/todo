import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput,TouchableOpacity, FlatList } from 'react-native';
import {appStyles as styles} from './styles'

export default function App() {
  
  const [text,setText]=useState("");
  const [items,setItems]=useState([]);

  const addPress=()=>{

    if(!text ){
      alert("enter an item");
      return;
    
    }

    setItems([...items,text]);
    setText("");

  };

  
  const deletePress=(index)=>{
    const newItems=[...items];
    newItems.splice(index,1);
    setItems(newItems);
   };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <StatusBar style="auto" />
   
   <TextInput 
   onChangeText={setText}
   style={styles.input} 
   value={text}
   placeholder="Enter your item here"/>
   <TouchableOpacity onPress={addPress} 
   style={styles.button}>
    <Text>Add</Text>
   </TouchableOpacity>
   
   <View />

   <FlatList 
    data={items}
    renderItem={({item , index})=>(
 <View style={styles.itemContainer}>
  <Text style={styles.itemText}>
    {item}
  </Text>
<TouchableOpacity style={styles.itemDelete} onPress={()=>deletePress(index)}>
  <Text style={styles.itemDeleteText}>X</Text>
  </TouchableOpacity>
  
   </View>

    )}
     
    keyExtractor={(item)=>item + Date.now()+ Math.random()} 
   
   />
    </View>
  );
}


