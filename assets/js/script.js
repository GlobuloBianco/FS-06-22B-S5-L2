var btnBudget=document.getElementById("btnBudget");

btnBudget.addEventListener("click",startSpese);

function startSpese(){
    let msg=document.getElementById("msg");
    let lista=document.getElementById("lista");
    let budget=document.getElementById("budget").value;
    let spesa=[];
    let i=0;

    do {
        spesa[i]=Math.floor(Math.random()*100)+1;
        spesaTot=spesa.reduce(somma);
        lista.innerHTML+=`<li>Ammontare della spesa: &#8364; ${spesa[i]}</li>
        <li>Nuovo budget aggiornato: &#8364; ${budget-spesaTot}</li><br>`;
        i++;
    } while(spesaTot<=budget-200)
    msg.innerHTML=`<li>Hai acquistato: ${i} oggetti</li><br>
    Hai meno di 200&#8364;. Ora basta stai spendendo troppo.`;
}

function somma(total,num){
    return total+num;
}