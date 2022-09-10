window.onload = (event) =>{
    // elements
    const input= document.getElementById('input');
    const submitBtn= document.getElementById('submitBtn');
    const gender= document.getElementById('gender');
    const age=document.getElementById('age');
    const dogImg=document.getElementById('dog-img');
    const colorPrimary=document.querySelectorAll('* .primary-bg');
    const nationalities=document.getElementById('nationalities');
    // variables
    let name = '';

    //events
    
    getDog();
    submitBtn.onclick=()=>{
        getName();
        getGender();
        getAge();
        getNat();
    }
    //functions
    function getName(){
        name = input.value;
    }
    // get gender from api
    async function getGender() {
        let api = 'https://api.genderize.io/?name=';
        api = api.concat(name);
        let x = await fetch(api);
        let y = await x.json();
        // capitalise first letter
        y= y["gender"].charAt(0).toUpperCase() + y["gender"].slice(1);
        gender.innerText = y;
        if(y=='Male'){
            changeColor("#3B89FE");
        }
        else{
            changeColor('#feb6ff');
        }
    }
    // get age from api
    async function getAge() {
        let api = 'https://api.agify.io/?name=';
        api = api.concat(name);
        let x = await fetch(api);
        let y = await x.json();
        y=y["age"];
        age.innerText = y;
    }
    // get dog pic from api
    async function getDog(){
        let api= 'https://dog.ceo/api/breeds/image/random';
        let x = await fetch(api);
        let y = await x.json();
        let url = y["message"];
        dogImg.style.backgroundImage="url('"+url+"')";
    }
    // change primary color
    function changeColor(color){
        for(let i=0; i<colorPrimary.length; i++) {
            colorPrimary[i].style.background = color;
          }
    }
    // get nationality from api
    async function getNat(){
        let api = "https://api.nationalize.io/?name="+name;
        let x= await fetch(api);
        let y= await x.json();
        let nats=y["country"];
        console.log(nats);
        createNats(nats);
    }
    // create nationality elements
    function createNats(nats){
        nationalities.innerHTML="";
        nats.forEach(nat => {
            // declare needed elements
            let natCode=nat['country_id'];
            let containerNat= document.createElement('div');
            let imgNat= document.createElement('div');
            let pNat=document.createElement('p');
            let url="https://countryflagsapi.com/svg/"+natCode;
            // add needed classes to elements
            containerNat.classList="split nationality";
            imgNat.classList="nationality-img";
            pNat.classList="normal-text bold-text";
            // add content to elements
            imgNat.style.backgroundImage="url('"+url+"')";
            pNat.innerText=natCode;
            // append to container
            containerNat.appendChild(imgNat);
            containerNat.appendChild(pNat);
            // append to dom
            nationalities.appendChild(containerNat);

        });
            
        
        
    }
}