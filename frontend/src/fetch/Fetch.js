export const PostFetch = async (url, data ) => {
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
};
