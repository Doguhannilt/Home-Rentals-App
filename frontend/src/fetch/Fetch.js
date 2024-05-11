export const PostFetch = async (url, data ) => {
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
    const content = await rawResponse.json();
    console.log(content)
  } catch (err) {
    console.log(err)
  }


}

 