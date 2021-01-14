/**
 * 
 * @param {string} yazı yazı : Türkçe harfler kaldırılacak yazı.
 * @param {boolean} bkharf büyükküçükharf : Büyük küçük harf duyarlılığı. Default: true (Hepsini büyük harf yapar)
 */

exports.turkishToEnglish = function(yazı, bkharf = true) {
    

    if(typeof yazı !== 'string') {
        throw new SyntaxError(`Hatalı değer girişi. 1.değer string olmalı, ${typeof yazı} girildi.`)
    } 
     if(typeof bkharf !== 'boolean') 
    {
        throw new SyntaxError(`Hatalı değer girişi. 2.değer boolean(true/false) olmalı, ${typeof bkharf} girildi.`)
    }

    if(bkharf) {
        let yazı2= yazı.replace(/Ğ/gm, "G") .replace(/Ü/gm, "U") .replace(/Ş/gm, "S") .replace(/İ/gm, "I") .replace(/Ö/gm, "O") .replace(/Ç/gm, "C") .replace(/ğ/gm, "g") .replace(/ü/gm, "u") .replace(/ş/gm, "s") .replace(/ı/gm, "i") .replace(/ö/gm, "o") .replace(/ç/gm, "c");
        return yazı2;
    } else {
    
    
        let yazı2 = yazı.replace(/Ğ/gim, "G") .replace(/Ü/gim, "U") .replace(/Ş/gim, "S") .replace(/İ/gim, "I") .replace(/Ö/gim, "O") .replace(/Ç/gim, "C") .replace(/ğ/gim, "g") .replace(/ü/gim, "u") .replace(/ş/gim, "s") .replace(/ı/gim, "i") .replace(/ö/gim, "o") .replace(/ç/gim, "c");

        return yazı2;
    }
}
