# Membuat Facebook Card Sederhana dengan React Native & Expo

![](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_500,w_300/v1500211568/fb-card/fb_card.jpg) 

Kita akan membuat aplikasi sederhana dengan menggunakan Facebook graph API, untuk mengambil foto profil kita di dari halaman Facebook.

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

### Hapus konten View dari component App:

    return (
      <View>
      
      </View>
    )

### Hapus semua style:

Kemudian simpan dan refshes, screen device akan kosong. Karena kita belum memberikan style pada View Tag.

Tambahkan style :

    const styles =  {
      cardFbStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue'
      } 
    };     

Hapus import stylesheet.

Tambahkan style property pada View Tag:

    return (
      <View style={styles.cardFbStyle}>
      
      </View>
    )

Simpan dan test pada screen! :)

Hapus width dan height, ganti dengan **flex: 1**

    const styles =  {
      cardFbStyle: {
        flex: 1,
        backgroundColor: 'skyblue'
      } 
    };

Simpan Cek screen! :)

Tambahkan **margin: 10**
Tambakan **marginTop: 100** dan **marginBottom: 100**

    const styles =  {
      cardFbStyle: {
        flex: 1,
        backgroundColor: 'skyblue',
        margin: 10,
        marginTop: 100,
        marginBottom: 100
      } 
    };

Tambahkan **borderWidth: 1**, **borderColor: 'lightgrey'**.
Kemudian ganti **backgroundColor** menjadi 'white'.

Cek di screen, cek border nya kelihatan.

Tambahkan **borderRadius: 8** untuk membuat sudut lengkung pada CardFb

Simpan dan cek! :)

### Menambahkan Image

Sisipkan Tag Image pada View Tag

    return (
      <View style={styles.cardFbStyle}>
        <Image /> 
      </View>
    )

Tambahkan propserty source:

    <Image souce={{ uri: ' ' }} />    

Ini adalah format default dalam menyisipkan link image pada React Native.

Import Image pada baris import:

    import { Text, View, Image } from 'react-native';

Coba test ambil URL image dari Google dan kopas ke dalam uri: ''.

Simpan dan cek, apa yang terjadi ??

Image tidak muncul karena kita belum memberikan dimensi (ukuran) dari Image tsb.

Sisipkan property sytle pada Image Tag dan tambahkan **flex: 1**.

    return (
      <View style={styles.cardFbStyle}>
        <Image
          style={{ flex: 1 }} 
          source={{ uri: '...' }}
        /> 
      </View>
    )

Simpan dan cek! Image sudah muncul?

Kita lihag sudut lengkung image tidak nampak / tertutup, untuk menampakkan sudut lengkung border kembali tambahkan style: overflow: 'hidden'.

Simpan dan cek!

Ganti image tersebut dengan image dari Facebook :

    const fbImage = 'https://graph.facebook.com/1376917177/picture?height=900';

gunakan ukuran height sesuai dengan selera anda.

Ganti image link menjadi fbImage:

    source={{uri: fbImage }}

Simpan dan cek! :)

### Membuat keterangan gambar.

Tambahkan sibling View Tag dibawah dan tambahkan Text hingga menjadi seperti ini:

    <View style={{margin: 20}}>
      <Text style={{fontSize: 20}}>Slamat Riyadi</Text>
      <Text style={{fontSize: 15, color: 'darkgrey'}}>Software Engineer</Text>
    </View>

Tambahkan style dengan tanpa membuat object style, const style ... seperti diatas.

Anda bisa melakukan perubahan pada style sesuka selera anda. Gunakan tutorial membuat App sebeumnya sebagai referensi.

~ Selesai ~

Info Jadwal Training hubungi: 

    Aji (WA)      : 0858 888 331 69   
    Dyo (WA only) : 0878 788 669 43
