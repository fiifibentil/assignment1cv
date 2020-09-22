function store() {
    const firstname= document.getElementById('fname').value;
    const middlename= document.getElementById('mname').value;
    const lastname= document.getElementById('lname').value;
    const phonenumber= document.getElementById('number').value;
    const email= document.getElementById('email').value;
    const address= document.getElementById('address').value;

    localStorage.setItem('Fname',firstname);
    localStorage.setItem('Mname',middlename);
    localStorage.setItem('Lname',lastname);
    localStorage.setItem('number',phonenumber);
    localStorage.setItem('email',email);
    localStorage.setItem('address',address);

    return;
    }

function editinfo() {
    const Firstname = localStorage.getItem('Fname');
    const Middlename = localStorage.getItem('Mname');
    const Lastname = localStorage.getItem('Lname');
    const fullname= Firstname +' '+ Middlename+ ' '+ Lastname;
    const Address= localStorage.getItem('address');
    const Phonenumber= localStorage.getItem('number');
    const Email= localStorage.getItem('email');

    document.getElementById("cvname").innerHTML= '<strong> '+ fullname +' </strong> ' +' <br> '+ Address+' <br> ' + Phonenumber+' <br> '+Email;
    
    
    
    
    return;
    } 


