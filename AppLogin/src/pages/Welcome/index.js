import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
  
  } from 'react-native';

  import * as Animatable from 'react-native-animatable'

export default function Welcome() {
 return (
   <View style={styles.container}>

    <View style={styles.containerLogo}>
      <Image 
      source={require('../../assets/logo.png')}
      style={{width:"100%"}}
      resizeMode='contain' // pega todo o tamanho da imagem, mesmo com 100% de largura
      />
    </View>

    <View style={styles.containerForm}>
      <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
      <Text style={styles.text}>Faça login para começar</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
    </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#38a69d"
  },
  containerLogo:{
    flex:2,
    backgroundColor:"#38a69d",
    justifyContent:  'center',
    alignItems: "center"
  },
  containerForm:{
    flex:1,
    backgroundColor: "#FFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingStart: "5%",
    paddingEnd:'5%'
  },
  title:{
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12
  },
  text:{
    color:"#a1a1a1"
  },
  button:{
    position: "absolute",
    backgroundColor: "#38a69d",
    borderRadius: 50,
    paddingVertical:8,
    width: "60%",
    alignSelf: "center", // para alinhar individualmente um item flex.
    justifyContent: "center",
    alignItems: "center", 
    bottom: "15%"
  },
  buttonText:{
    fontSize: 18,
    color:"#FFF",
    fontWeight: "bold"
  }
})








///  vamos instalar uma biblioteca de animações, chamada: Animatable 
/// instalar: npm install react-native-animatable 
