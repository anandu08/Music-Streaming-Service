//Reset Inputfield code.
function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}
    function clearFunc2()
    {
        document.getElementById("username").value="";
		document.getElementById("pswd2").value="";
	    document.getElementById("pswd3").value="";
		
    }
function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd1=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 6 || pwd.length > 6)
		{
			alert("Password min and max length is 6.");
		}
		else
		{
	alert('Thank You for Login ' ,);
        clearFunc();
        }
	}
    function matchPassword() {  
        var pw1 = document.getElementById("pswd2");  
        var pw2 = document.getElementById("pswd3"); 
        if(pw1=='')
        {
            alert("Enter the password");
        } 
        else if(pw2=='')
        {
            alert("Enter the password again");
        }
         else if(pw1 != pw2)  
        {   
          alert("Passwords did not match");  
          clearFunc2();
          
        } else {  
          alert("Password created successfully");  
        }  
      }
	
		