// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     }).catch(function (error) {
//         alert("Bad things! Ragnarők!")
//         console.log(error.message);
//     })

     function submitData(username, useremail) {
         const users={
         name: username,
         email: useremail
         }

        return fetch('http://localhost:3000/users',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                  Accept: "application/json",

            },
            body:JSON.stringify(users)

         }).then(function (response) {
             return response.json();
         }).then(function (object) {
             console.log(object);
             document.body.innerHTML = object.id
         }).catch(error => {
            document.body.innerHTML=error.message
        })
        
     }
    

