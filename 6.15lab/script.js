
function isStrongPassword(password){
	if(password.length >= 8){
		if(password.indexOf("password") == -1){
			upperCount = 0;
			for( i = 0; i < password.length; i++){
				if((password.charCodeAt(i) >= 65) && (password.charCodeAt(i) <= 90)){
					upperCount++;
				}
			}
			if(upperCount > 0){
				return true;
			}
		}
	}
	return false;
}

