window.onload = (event) =>{
    // elements
    const input= document.getElementById('input');
    const submitBtn= document.getElementById('submitBtn');
    const gender= document.getElementById('gender');
    // variables
    let name = '';

    //events
    submitBtn.onclick=()=>{
        getName();
        getGender();
    }

    //functions
    function getName(){
        name = input.value;
    }
    async function getGender(name) {
        let api = 'https://api.genderize.io/?name=';
        api = api.concat(name);
        let x = await fetch(api);
        let y = await x.json();
        gender.innerText = y["gender"];

    }
}