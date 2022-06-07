import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/98673058?s=400&u=498e755ee8b0e3d441cec3a1aa25ce4a70b2bb5b&v=4';
const urlToMyGithub = 'https://github.com/mayara-guedes'
const App = () => {

  const handlePressGoToGithub = async() => {
    console.log('Verificando Link');
   const res = await Linking.canOpenURL(urlToMyGithub);
   
    if(res){console.log('Link aprovado');
    console.log('Abrindo link...');

     await Linking.openURL(urlToMyGithub)
    }
    

  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle = 'light-content'/> 
      <View style={style.content}>
        <Image accessibilityLabel='Foto: Mayara com fundo branco' style ={style.avatar} source={{uri:imageProfileGithub}}/>
        <Text accessibilityLabel='Nome: Mayara Guedes' style={[style.defaultText, style.name]}> Mayara Guedes</Text>
        <Text accessibilityLabel='Nickname: mayara-guedes' style={[style.defaultText, style.nickName]}> mayara-guedes </Text>
        <Text accessibilityLabel='Descrição: Front-end developer' style={[style.defaultText, style.description]}> Front-end developer </Text>

        <Pressable onPress={handlePressGoToGithub}>
        <View style={style.button}>
          <Text style={[style.defaultText, style.textButton]}> Open in Github </Text>
        </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
    alignItems: 'center',
    padding: 20,

  },
    avatar:{

        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    } ,
    defaultText: {color: colorFontGithub,
  },
  name:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  nickName: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description:{
    fontSize: 14,
    fontWeight: 'bold',

  },
  button:{
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  textButton:{
    fontSize: 16,
    fontWeight: 'bold',

  },


});
