// agar 404 error bhi aayega to network pae request gae
// to hi pata laga to wo response mai aayga na ki 
// reject mai

const response = await fetch("https://api.github.com/users/Bhawneet1", {
    method: "POST",
    // ...
  });
  

  const request1 = new Request("https://api.github.com/users/Bhawneet1", {
    method: "POST",
    body: JSON.stringify({ username: "example" }),
  });
  
  const request2 = request1.clone();
  
  const response1 = await fetch(request1);
  console.log(response1.status);
  
  const response2 = await fetch(request2);
  console.log(response2.status);



  //We can pass header along with fetch
  