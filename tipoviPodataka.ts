let godine:number = 25;
let ime:string='ana';
let studira:boolean=true;

let predmeti:string[]=["EPOS","CLOUD","p1"];
let brojevi:number[]=[1,23,4,35];
let entorka:[string,number]=["ana",45];
enum Modul{
    TEP, IS, SI
}

let konkretniModul:Modul=Modul.IS;

let student:{ime:string, godine:number, studira:boolean}={
    ime:"ana",
    godine:23,
    studira:true
};

let brojIliString:number|string=10;

let n:null=null;
let u:undefined=undefined;

let nesto:any="ovo je string";
let duzinaStringa:number=(nesto as String).length;

console.log(godine,ime,studira);
console.log(predmeti,brojevi);
console.log(entorka);
console.log(konkretniModul);
console.log(student);
console.log(brojIliString);