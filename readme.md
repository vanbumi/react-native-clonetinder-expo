# Membuat Facebook Card Sederhana dengan React Native & Expo

![](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_500,w_300/v1500211568/fb-card/fb_card.jpg) 

### Ikuti langkah dibawah ini bila anda belum menginstall apapun :

* Install [Expo Desktop](https://docs.expo.io/versions/v16.0.0/introduction/installation.html).
* Install Expo App -> Google Play Store or iOS App Store.
* Install [Genymotion].(https://docs.expo.io/versions/v16.0.0/guides/genymotion.html) (Opsional), [Cara Install disni].(https://docs.genymotion.com/Content/01_Get_Started/Installation.htm)
 
### Get Start.

PadaExpo Desktop: **Create New Project**

Atau dengan Commandline sbb: 
    
    exp init fbCard

Simpan di folder kerja anda, misalnya e:/workspace/latihan-react-native/fbCard. 

Tunggu proses building package selesai pada expo anda.

Bila sudah selesai Klik **tombol share** pada kanan atas, buka expo app di device anda dan lakukan scan,Aplikasi akan terbuka pada device anda.

Buka folder fbCard dengan VSCode anda, dan rubah pada kode tesebut dengan kalimat:

    Hello, world!

Dan simpan dengan ctrl + s, device akan merefresh sendiri untuk update.

Dan update kode pada App.js seperti dibawah ini:

    import React from 'react';
    import { StyleSheet, Text, View, Image } from 'react-native';

    //rubah ini dengan facebook ID anda.
    const fbImage = 'https://graph.facebook.com/1376917177/picture?height=900'

    export default class App extends React.Component {
      render() {
        return (
          <View style={styles.card}>
            <View style={{margin: 10}}>
              <Text style={{fontSize: 20}}>FB Profile</Text>
            </View>
            <Image
              style={{flex: 1}} 
              source={{uri: fbImage }}
            />
            <View style={{margin: 20}}>
              <Text style={{fontSize: 20}}>Dyo Bumi</Text>
              <Text style={{fontSize: 15, color: 'darkgrey'}}>Application Developer</Text>
            </View>
          </View>
            
        );
      }
    }

    const styles = StyleSheet.create({
      card: {
        flex: 1,
        overflow: 'hidden',
        margin: 10,
        backgroundColor: 'white',
        marginTop: 50,
        marginBottom: 100,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
      },
    });    

Jangan lupa untuk merubah facebook ID anda untuk menampilkan profil foto anda dari facebook.

Anda bisa melakukan perubahan pada style sesuka hati anda. Gunakan membuat App sebeumnya sebagai referensi.





