const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const country = document.getElementById('country');
const subject = document.getElementById('subject');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    //get the value from the checkInputs
   const fnameValue= fname.value.trim();
   const lnameValue= lname.value.trim();
    
    const subjectValue=subject.value.trim();

    if(fnameValue === '') {
		setErrorFor(fname, 'First Name cannot be blank');
	} else {
		setSuccessFor(fname);
	}
	
	if(lnameValue === '') {
		setErrorFor(lname, 'Last Name cannot be blank');
	} else {
		setSuccessFor(lname);
	}
	
	if(subjectValue === '') {
		setErrorFor(subject, 'It cannot be blank');
	}  else{
		setSuccessFor(subject);
	}
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	