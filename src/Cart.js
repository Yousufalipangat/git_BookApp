
import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Button,
  Pressable
} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons';

import { store, changeItemNumber } from './Store'
import { useSelector, useDispatch } from 'react-redux';



export default function Cart() {

  const count = useSelector((state) => state.count)
  const items = useSelector((state) => state.items)
 

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View style={{ width: '100%', height: 80, backgroundColor: 'white', elevation: 5, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
        <Text style={{ margin: 10, fontSize: 24 }}>Books</Text>
        <View>
          <View style={{ backgroundColor: '#FA7070', borderRadius: 15, width: 30, height: 30, justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 1, left: -10 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{count}</Text>
          </View>
          <Icon name='shopping-cart' size={35} style={{ margin: 10 }} />
        </View>
      </View>
      <View style={{ width: '100%',flex:1 }}>
        
         <ShowItemList items={items}/>
      </View>
    </View>

  )
}

function ShowItemList({items}){

  const dispatch = useDispatch();
  if(items.length === 0)
  {
    return <View style={{ backgroundColor: 'white', height: '100%', width: '100%',justifyContent:'center',alignItems:'center' }} >
      <Text style={{fontSize:30}}>Your Cart is empty :(</Text>
      </View>
  }
  else
  {
 return(
  <ScrollView style={{ width: '100%', height: '100%' }} contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
            {

              items.map((book) => (
                <View key={book.id} style={{ width: '100%', height: 200, flexDirection: 'row' }}>
                  <Image style={{ width: 150, height: 180, resizeMode: 'contain' }} source={{ uri: book.coverPage }} />
                  <View style={{ width: 225, justifyContent: 'space-between', padding: 15 }}>
                    <View>
                      <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{book.title}</Text>
                      <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>{'by ' + book.author}</Text>
                    </View>
                    <Pressable style={{}} onPress={() => { dispatch(changeItemNumber('REMOVE', book)) }}>
                      <View style={{ borderRadius: 10, width: 80, height: 55, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: 'white' }}>Remove - </Text>
                      </View>
                    </Pressable>
                  </View>

                </View>

              ))

            }
          </ScrollView>
 )
}
}
