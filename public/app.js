const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('Name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let address = document.getElementById('address')
let comments= document.getElementById('comment')

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    

    let formData= {
        name: Name.value,
        email:email.value,
        phone:phone.value,
        address:address.value,
        comments:comments.value

    }
    console.log(formData)
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type', 'application/json');
    // xhr.onload = function(){
    //     console.log(xhr.responseText)
    //     if(xhr.responseText == 'success'){
            
    //         fname.value = '';
    //         lname.value = '';
    //         address.value = '';
    //         phone.value = '';
    //         email.value = '';
    //         comment.value = ''
    //         alert('Email Sent');
    //     }else{
    //         alert('Something went Wrong');
    //     }
    // }

    xhr.send(JSON.stringify(formData));
    // //contactForm.reset();
    alert('Email Sent');


    
})