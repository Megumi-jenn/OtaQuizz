const form=document.querySelector('.form-quizz');
let tableauResultats=[];
const reponses=['c','a','b','c'];
const titreResulat=document.querySelector('.resultats h2');
const texteResulat=document.querySelector('.note');
const aideResulat=document.querySelector('.aide');
const toutesLesQuestions=document.querySelectorAll('.question-block');
let verifTableau=[];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i=1; i <=4; i++)  {
       tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    //console.log(tableauResultats);
    verifFunc(tableauResultats);
    tableauResultats=[];
})

function verifFunc(tabResultats){
    for (let a=0; a<4; a++){
        if(tabResultats[a]===reponses[a]){
        verifTableau.push(true);
    } else {
        verifTableau.push(false);
    }
}
//console.log(verifTableau);
afficherResultats(verifTableau);
couleursfonction(verifTableau);
verifTableau=[];
 }
 function afficherResultats(tabCheck){
    const nbdFautes=tabCheck.filter(el => el !== true).length;
    //console.log(nbdFautes);
    switch(nbdFautes){
        case 0:
            titreResulat.innerText=` Omedetto!`
            aideResulat.innerText=''
            texteResulat.innerText='4/4'
            break;
            case 1:
            titreResulat.innerText=`Vous y êtes presque! UwU`
            aideResulat.innerText='Retentez une autre réponse dans la case rouge ,puis re-validez!'
            texteResulat.innerText='1/4'
            break;
            case 2:
            titreResulat.innerText=`Encore un effort TwT`
            aideResulat.innerText='Retentez une autre réponse dans les cases rouges ,puis re-validez!'
            texteResulat.innerText='2/4'
            break;
            case 3:
            titreResulat.innerText=`Vous allez y arriver "-"`
            aideResulat.innerText='Retentez une autre réponse dans les cases rouges ,puis re-validez!'
            texteResulat.innerText='3/4'
            break;
            default:
                'oops cas inattendu';
    }
 }
 function couleursfonction(tabValBool){
    for (let j=0; j<tabValBool.length; j++) {
 if(tabValBool[j]===true){
    toutesLesQuestions[j].style.background="lightgreen";
    } else{
        toutesLesQuestions[j].style.background="#ffb8b8";
        toutesLesQuestions[j].classList.add('echec');

        setTimeout(()=> {
            toutesLesQuestions[j].classList.remove('echec');  //add,remove:API
        }, 500)
    }
}
}
toutesLesQuestions.forEach(item=> {
item.addEventListener('click', () =>{
 item.style.background="white";
})
})
  