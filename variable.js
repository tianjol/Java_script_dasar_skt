// var, let, const
var global ='Hello';
console.log(global);


var nama = "jilli hadi tian";
nama="jil"
console.log(nama);



const varc="17"
// varc="bulan"
console.log("nama saya ")



let datasaya=`Nama saya adalah ${nama} dan umur saya adalah ${varc}`
//console.log(datasaya)



function printDatasaya(nama, umur){
    let data_saya = `nama saya ${nama}, dan umur saya ${umur}`
    console.log(data_saya)
}

// printDatasaya("jil",13)



const dataSayaConst = {
    nama:'jil0',
    umur :'10',
    printDatanamasaya_:(nama ="nama Lengkap", umur="waji diatas 17") => {
        var data = `nama saya adalassh ${nama} adn umur saya dalah ${umur}`;
        console.log(data);
    }
}

dataSayaConst.printDatanamasaya_;