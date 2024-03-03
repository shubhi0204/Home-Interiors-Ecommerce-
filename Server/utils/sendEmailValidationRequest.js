 
   const apiKey = 'e47e42a2b956487b90801626dfcfe88a';
   const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey
 
 const sendEmailValidationRequest = async (email) => {
       try {
           const response = await fetch(apiURL + '&email=' + email);
           const data = await response.json();
           const isValidSMTP = data.is_smtp_valid.value;
 
           if (isValidSMTP) {
               // use the email address in the mailto link
           } else {
               // show the user an error
           }
       } catch (error) {
           throw error;
       }
   }

export default sendEmailValidationRequest;