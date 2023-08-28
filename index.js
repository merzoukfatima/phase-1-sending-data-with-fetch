// Add your code here
const body =document.querySelector("body")
const submitData=((name,email)=>{
    return fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
        },
        body:JSON.stringify({name:`${name}`,email:`${email}`})
    }).then(res => res.json())
      .then(data => body.textContent=data.id
      )
      .catch(error => body.textContent=error.message)
})
