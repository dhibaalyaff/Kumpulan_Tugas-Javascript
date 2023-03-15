function tambah()
{
 a=eval(kalkulator.satu.value);
 b=eval(kalkulator.dua.value);
 c=a+b;
 kalkulator.hasil.value = c;
 if(kalkulator.satu.value == "" || kalkulator.satu.value == ""){
    alert("Silahkan angka diisi terlebih dahulu!");
 }else{
    kalkulator.hasil.value = total;
}
}

function kosong()
{
 kalkulator.satu.focus();
 kalkulator.satu.value="";
 kalkulator.dua.value="";
 kalkulator.hasil.value="";
}

function kurang()
{
a=eval(kalkulator.satu.value);
b=eval(kalkulator.dua.value);
c=a-b;
kalkulator.hasil.value = c;
if(kalkulator.satu.value == "" || kalkulator.satu.value == ""){
    alert("Silahkan angka diisi terlebih dahulu!");
 }else{
    kalkulator.hasil.value = total;
}
}

function pangkat()
{
a=eval(kalkulator.satu.value);
b=eval(kalkulator.dua.value);
c=Math.pow(a, b); // khusus huruf M pada Math dengan huruf besar
kalkulator.hasil.value = c;
if(kalkulator.satu.value == "" || kalkulator.satu.value == ""){
    alert("Silahkan angka diisi terlebih dahulu!");
 }else{
    kalkulator.hasil.value = total;
}
}

function bagi()
{
a=eval(kalkulator.satu.value);
b=eval(kalkulator.dua.value);
c=a/b;
kalkulator.hasil.value = c;
if(kalkulator.satu.value == "" || kalkulator.satu.value == ""){
    alert("Silahkan angka diisi terlebih dahulu!");
 }else{
    kalkulator.hasil.value = total;
}
}

function perkalian()
{
a=eval(kalkulator.satu.value);
b=eval(kalkulator.dua.value);
c=a*b;
kalkulator.hasil.value = c;
if(kalkulator.satu.value == "" || kalkulator.satu.value == ""){
    alert("Silahkan angka diisi terlebih dahulu!");
 }else{
    kalkulator.hasil.value = total;
}
}


