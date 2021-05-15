import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import axios from 'axios';

function Home (props) {
  const [url , setUrl] = useState("");
  const [faq, setFaq] = useState([]);
  
  const searchP = () => {
     axios
      .get('https://voot_api.gdas2927.workers.dev/?q=https://www.voot.com/movies/k-g-f-chapter-1-hindi/965391', {
        headers: {
            'Content-Type': 'application/json',
        }
    })
      .then((response) => {
        setFaq(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
   }
   console.log(faq)
  return (
    <>
    <Form.Group>
      <Form.Control 
        size="lg" 
        type="text"
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Large text" />
      </Form.Group>
      <button 
        className="btn btn-primary mt-2"
        onClick={searchP}>Search</button>
      <h2 className="mt-3">{faq.title}</h2>
    </>
    )
}
export default Home;