###### Tr-To-Eng

Tr-to-eng, Türkçe karakterleri (ü gibi) İngilizce hallerine (ü -> u) dönüstürmenizi sağlar.

Kullanım:
```javascript
const donustur = require('tr-to-eng');

let ingilizceText = donustur.turkishToEnglish('Bak ben Çok Güzel bir kelebeğim', true)
console.log(ingilizceText)

//Bak ben Cok Guzel bir kelebegim
//eğer true ise, büyük küçük harfe dikkat edilir.

let ingilizceText2 = donustur.turkishToEnglish('Bak ben Çok Güzel bir kelebeğim', false)
console.log(ingilizceText2)

//Bak ben Cok GUzel bir kelebeGim
//eğer false ise, bütün durumlar büyük harf olur.
```

