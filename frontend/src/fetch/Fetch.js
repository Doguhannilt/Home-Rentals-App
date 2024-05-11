import Login from "../pages/Login";
import { falseStatement, trueStatement } from "../redux/features/booleanStatement";
import { useDispatch, useSelector } from "react-redux";

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
    const content = await rawResponse.json();
    console.log(content)
    
  } catch (err) {
    console.log(err)

  }}

