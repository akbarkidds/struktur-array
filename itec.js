let dataBarang = [];
let i = 1;
let config = [10, {
    text: ["Masukan Nama Barang :","Harap Input Nama barang.","Anda Yakin Ingin Keluar", "Owh Ada Yang Kelupaan yah ?\n Ok Lanjut","Pencarian Barang", "Anda Ingin Mencari Sesuatu ?"]
},1];
function thanks(barang1,barang2){
        i = 0;
        alert("Terima Kasih Bossku");
        return barang1=barang2.length;
}
while(dataBarang.length < config[0]){
    if(i == 0) break; else {
        let command = config[0] > 0 ? prompt(config[1].text[0]) : 0;
        i++
        console.log(command)
        command = (command != null && command != "") ? 
            dataBarang.splice(i, 0, command) :
            command == "" ? 
                alert(config[1].text[1]) : 
                command == null ? 
                    confirm(config[1].text[2]) == true ? 
                        thanks(config[0],dataBarang.length):
                        alert(config[1].text[3])  :
                    command = prompt(config[1].text[0]);
    }
}
function pencarian(){
    let command = prompt(config[1].text[5])
    let cari = dataBarang.filter((data) => { return data == command})
    cari = cari.length > 0 ? document.getElementById("result").innerHTML = `<h4>Barang Yang Anda Cari Adalah ${cari}</h4>` : document.getElementById("result").innerHTML = `<h4>Barang ${command} Tidak Dapat Di Temukan</h4>`
}
document.write(`<button onclick="pencarian()">${config[1].text[4]}</button>`)
dataBarang.map((e, i) => document.write(`<h2>${i+1}. Nama Barang ${e}</h2>`));
document.write(`<div id="result"></div>`)