function random(){

    document.getElementById("randomTruth").innerHTML = Math.floor(Math.random()*10);
    test()
    
    stop()
}

function random1(){

    document.getElementById("randomDare").innerHTML = Math.floor(Math.random()*10);
    test1()
    playAudio()
    stop2()
    
}
function random3(){
let numbers = document.getElementById("jmlPlayer").value;
// console.log(number);
    document.getElementById("number").innerHTML = Math.ceil(Math.random()*numbers);
    test1()
   
}

  function test(){
  let Truth = document.getElementById("randomTruth").textContent;
  // console.log(Truth);
  var text;
  
  switch(Truth) {
    case "0":
      text = "Truth#1 Siapa orang diantara kita yang kira kira kamu bakalan naksir??";
    break;
    case "1":
    text = "Truth#2 kamu yakin ga sih sama pasangan kamu saat ini??,, sebutin juga alesannya";
    break;
    case "2":
    text = "Truth#3 Kamu pernah sebel ga sama orang di ruangan ini??";
    break;
    case "3":
    text = "Truth#4 Kapan Terakhir Kali Kamu Ngompol??";
    break;
    case "4":
    text = "Truth#5 Apa ketakutan terbesar kamu??";
    break;
    case "5":
    text = "Truth#6 Kapan Terakhir kali kamu Nangis dan kenapa??";
    break;
    case "6":
    text = "Truth#7 pernah ga sih kamu selingkuh??";
    break;
    case "7":
    text = "Truth#8 Hal terbodoh yang kamu lakuin Bulan ini??";
    break;
    case "8":
    text = "Truth#9 Apa yang kamu sembunyiin dari orang sebelah kamu??";
    break;
    case "9":
    text = "Truth#10 Apa penyesalah terbesar kamu??";
    break; 
  }
  document.getElementById("hasil").innerHTML = text;
  }

  function test1(){
  let Dare = document.getElementById("randomDare").textContent;
  
  var text;
  
  switch(Dare) {
    case "0":
      text = "Dare#1 Update IG story pake filter 'Ampun Bang Jago'";
    break;
    case "1":
    text = "Dare#2 Update IG story pake filter 'CALON MANTU'";
    break;
    case "2":
    text = "Dare#3 Update IG story terus bilang KANGEN SAMA MANTAN HAHAHAHA";
    break;
    case "3":
    text = " Dare#4 kenalan sama orang yang depan yang lewat depan rumah";
    break; 
    case "4":
    text = "Dare#5 main tik tok lalu masukin di feed IG 1x24jam";
    break;
    case "5":
    text = "Dare#6 ";
    break;
    case "6":
    text = " Dare#7 Jalan kedepan rumah Terus nyanyi lagu masa kecil favorit kamu";
    break;
    case "7":
    text = "Dare#8 Update IG story pake filter 'CALON MANTU'";
    break;
    case "8":
    text = "Dare#9 Update IG story terus bilang KANGEN SAMA MANTAN HAHAHAHA";
    break;
    case "9":
    text = " Dare#10 Jalan kedepan rumah Terus nyanyi lagu masa kecil favorit kamu";
    break; 
  }
  document.getElementById("hasil2").innerHTML = text;
  }



function playAudio() {
  backSound.play();
 }
 function playAudio2() {
  backSound2.play();
 }
 function stop(){
   backSound.pause()
 }
 function stop1(){
  backSound2.pause()
}