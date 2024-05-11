import Login from "../pages/Login";

// pages/Signup
export const PostFetch = async (url, data) => {

  try {
    const formDataJSON = JSON.stringify(data); 
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formDataJSON 
  });
    const content = await rawResponse.json();

  
  console.log(content);
  } catch (error) {
    console.log(error)
  } 

};

// pages/Login
export const LoginFetch = async (url, data) => {
  try {
      const formDataJSON = JSON.stringify(data); 
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formDataJSON 
  });
    content = await rawResponse.json();
    console.log(content)
    return content

    // Redux TRUE statement

  } catch (err) {
    console.log(err)

    // Redux FALSE statement
  }}

