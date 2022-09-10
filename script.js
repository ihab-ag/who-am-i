window.onload = (event) =>{
    // elements
    const input= document.getElementById('input');
    const submitBtn= document.getElementById('submitBtn');
    const gender= document.getElementById('gender');
    const age=document.getElementById('age');
    const dogImg=document.getElementById('dog-img')
    // variables
    let name = '';

    //events
    submitBtn.onclick=()=>{
        getName();
        getGender();
        getAge();
    }

    //functions
    function getName(){
        name = input.value;
    }
    async function getGender() {
        let api = 'https://api.genderize.io/?name=';
        api = api.concat(name);
        let x = await fetch(api);
        let y = await x.json();
        // capitalise first letter
        y= y["gender"].charAt(0).toUpperCase() + y["gender"].slice(1);
        gender.innerText = y;
    }
    async function getAge() {
        let api = 'https://api.agify.io/?name=';
        api = api.concat(name);
        let x = await fetch(api);
        let y = await x.json();
        // capitalise first letter
        y= y["age"]
        age.innerText = y;
    }
}