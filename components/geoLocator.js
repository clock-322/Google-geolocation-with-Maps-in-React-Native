import React,{Component} from 'react';
import { View, Image,Text,StyleSheet, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import Geocode from "react-geocode"
import MapView from 'react-native-maps'


Geocode.setApiKey("***********ENTER YOUR GOOGLE-API HERE**************")

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
 
class GooglePlacesInput extends Component {
   constructor(){
     super()
     this.state={
       latitude:0,
       longitude:0
     }
   }
  
   componentWillMount = () => {
    navigator.geolocation.getCurrentPosition(
       (position) => {
          var lat=parseFloat(position.coords.latitude)
          var lon=parseFloat(position.coords.longitude)
          this.setState({ longitude:lon,latitude:lat })
      }
    )
 }
   
render(){
  return (
          <View style={styles.container}>
              <View style={styles.loginbox} >
                    <Text style= {{color:"#000",fontSize:16, marginLeft:5, marginTop:0}}>lattitude==>  {this.state.latitude}  longitude==>  {this.state.longitude}</Text>
              </View>
          <View style={{ flex: 1 }}>
              <MapView
                  style={{ flex: 1 }}
                  initialRegion={{
                    latitude: this.state.latitude,
                    longitude:this.state.longitude ,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                >
                <MapView.Marker
                    coordinate={{latitude: this.state.latitude, longitude: this.state.longitude}}
                    title={'Here you are'}/>
                </MapView>
            </View>
          <View  style={styles.search_box}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	marginTop:24,
  },
  loginbox:{
		backgroundColor: "#fff",
		flexDirection:"row",
		padding:15,
		//height:65
	},
  map: {
    flex:1,
    height: screenHeight,
    //marginTop: 120
 },
 search_box: {
	 position: 'absolute',
	 top: 50,
	 left: 0,
	 width: '100%'
 },
   loginScreenButton:{
    fontSize:16,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#004f9a',
    borderRadius:4,
    borderWidth: 1,
    borderColor: '#004f9a',
    
  },
  loginText:{
      color:'#ffffff',
      textAlign:'center',
      fontSize: 20,
    padding: 2,
    //fontFamily: "Poppins"
  },
  button_gap: {
	padding: 10,
	position:'absolute',
	left:0,
	bottom: 10,
	width:'100%'
  }
})
export default GooglePlacesInput
 
 
