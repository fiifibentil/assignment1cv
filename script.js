function store() {
    const firstname= document.getElementById('fname').value;
    const middlename= document.getElementById('mname').value;
    const lastname= document.getElementById('lname').value;

    localStorage.setItem('Fname',firstname);
    localStorage.setItem('Mname',middlename);
    localStorage.setItem('Lname',lastname);
    
    return;
    }

function editinfo() {
    const Firstname = localStorage.getItem('Fname');
    const Middlename = localStorage.getItem('Mname');
    const Lastname = localStorage.getItem('Lname');

    document.getElementById("cvname").innerHTML=Firstname +' '+ Middlename+ ' '+ Lastname;
    return;
    } 
