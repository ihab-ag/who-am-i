window.onload = (event) =>{
    // elements
    const input= document.getElementById('input');
    const submitBtn= document.getElementById('submitBtn');
    // variables
    let name = '';

    //events
    submitBtn.onclick=()=>{
        getName();
    }

    //functions
    function getName(){
        name = input.value;
    }
}