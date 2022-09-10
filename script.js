window.onload = (event) =>{
    // elements
    const input= document.getElementById('input');
    const submitBtn= document.getElementById('submitBtn');
    // variables
    let name = '';
    let gender='';

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
        gender = y["gender"];
    }
}