var godine = 25;
var ime = 'ana';
var studira = true;
var predmeti = ["EPOS", "CLOUD", "p1"];
var brojevi = [1, 23, 4, 35];
var entorka = ["ana", 45];
var Modul;
(function (Modul) {
    Modul[Modul["TEP"] = 0] = "TEP";
    Modul[Modul["IS"] = 1] = "IS";
    Modul[Modul["SI"] = 2] = "SI";
})(Modul || (Modul = {}));
var konkretniModul = Modul.IS;
var student = {
    ime: "ana",
    godine: 23,
    studira: true
};
var brojIliString = 10;
var n = null;
var u = undefined;
var nesto = "ovo je string";
var duzinaStringa = nesto.length;
console.log(godine, ime, studira);
console.log(predmeti, brojevi);
console.log(entorka);
console.log(konkretniModul);
console.log(student);
console.log(brojIliString);
