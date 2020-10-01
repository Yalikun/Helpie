function validate()
      {
   
	var atpos = document.myform.Email.value.indexOf("@");
	var dotpos = document.myform.Email.value.lastIndexOf(".");
	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			     
	//var gender = document.getElementById('gender');
	//var genValue = false;	  
	
	
	
	//username
	if( document.myform.UserName.value == "" )
         {
            alert( "Please provide your user name!" );
            document.myform.UserName.focus() ;
            return false;
         }
		 
		 
		 		  
	if( document.myform.UserName.value.length < 5 )
         {
            alert( "at least 5 characters is required for user name!" );
            document.myform.UserName.focus() ;
            return false;
         }	  

		  
		  
		  
	//firstname
	if( document.myform.Fname.value == "" )
         {
            alert( "Please provide your firstname!" );
            document.myform.Fname.focus() ;
            return false;
         } 
		 
		 
	if( document.myform.Fname.value.length < 8 )
         {
            alert( "at least 8 characters is required for firstname!" );
            document.myform.Fname.focus() ;
            return false;
         }	 
		  
		  
	//lastname	  
	if( document.myform.Lname.value == "" )
         {
            alert( "Please provide your lastname!" );
            document.myform.Lname.focus() ;
            return false;
         } 
		 
		 
	if( document.myform.Lname.value.length < 8 )
         {
            alert( "at least 8 characters is required for lastname!" );
            document.myform.Lname.focus() ;
            return false;
         }	  
		  
		  
		  
		 
     //email   
	if( document.myform.Email.value == "" )
         {
            alert( "Please provide your email address!" );
            document.myform.Email.focus() ;
            return false;
         }  
		 
		   
	if( atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= document.myform.Email.value.length)
         {
            alert( "email adress is not valide" );
            document.myform.Email.focus() ;
            return false;
         }	

	
		  
		  
	//phone
	if( document.myform.Phone.value == "" )
         {
            alert( "Please provide your phone number!" );
            document.myform.Phone.focus() ;
            return false;
         }  
		  
	if( !document.myform.Phone.value.match(phoneno))
         {
            alert( "phone number is not valid!" );
            document.myform.Phone.focus() ;
            return false;
         }	  
		  
		  
	//date of birth	
	if( document.myform.DOB.value == "" )
         {
            alert( "Please provide your date of birth!" );
            document.myform.DOB.focus() ;
            return false;
         }
      	  
	
		  
	//gender
	if( document.myform.male.checked==false && document.myform.female.checked==false)
         {
            alert( "Please select your gender!" );
            return false;
         }   	
	
	//password
	if( document.myform.Password.value == "" )
         {
            alert( "Please provide your password!" );
            document.myform.Password.focus() ;
            return false;
         }  
	
		  
	//checkbox
	if( document.myform.mycheckbox.checked == false )
         {
            alert( "you must accept the agreement!" );
            document.myform.mycheckbox.focus() ;
            return false;
         }	   
			return( true );  
		 
      }

	