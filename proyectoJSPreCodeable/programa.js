// Data Base:
let notes = [];
r= notes.length 


// Functions:
   
function printUI() {
    console.clear();
    let r= notes.length; 
    console.log(`usted tiene ${r} notas.`);

    printNotes();
}
function printNotes() {
        
    if(notes.length >=1) {
                     
        for (let n = 0; n < notes.length; n++) {
            console.log(`${n+1}. ${notes[n]}`);
          
        } 
    }
}
function crear() {    
    
    const noteName = prompt("Ingrese la nueva nota:");
    notes.push(noteName);
     
    printUI() 
}  

function editar() {
    const indexNote = Number(prompt("Ingrese el numero de la lista de la nota que desea modificar:"));
    editNote=prompt("Por favor ingrese la nota que quedará en el numero:" + indexNote);
    notes[indexNote-1]=editNote; 
    printUI()
}

function eliminar() {
    const indexNote = Number(prompt("Ingrese el numero de la lista de la nota que desea eliminar:"));
    notes.splice(indexNote-1, 1);
    printUI()
}
// Void

printUI()