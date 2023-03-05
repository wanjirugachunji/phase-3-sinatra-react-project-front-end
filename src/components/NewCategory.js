import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function NewCategory({ cats, addNewCategory }) { 
  const [jobType, setJobType] = useState("");


  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      job_type: jobType
    }),
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9292/cats", configObj)
      .then((r) => r.json())
      .then((cat) => {
        addNewCategory(cat);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Add a new job category:</Form.Label>
            <Form.Control
            id="jobType" 
            type="text" 
            name="jobType" 
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            />
          <Button type="submit">Add</Button>
        </Form.Group>
    </Form>
    </>
  )
}

export default NewCategory