import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function NewListing({ cats, listings, setListings }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState("");
  const [cat, setCat] = useState("");

  const navigate = useNavigate();
 
  const styles = {
    img: {
      height: '210px',
      width: '210px',
    },
    form: { 
      backgroundColor: '',
      maxWidth: "420px",
      margin: "50px auto",
      padding: "0px",
      borderSize: "border box",
      alignItems: "center",
      justifyContent: "center"
    }
  }
  


  const newList = {
    title,
    body,
    user,
    cat_id: cat,
    completed: false
  };

  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newList),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9292/listings", configObj)
      .then((r) => r.json())
      .then((listing) => {
        addNewListing(listing);
        navigate("/listings");
      });
  };

  const addNewListing = (listing) => {
    setListings([...listings, listing])
  }

  // const handleDelete = () => {
  //   deleteListing(id);
  //   fetch(`http://localhost:9292/listings/${id}`, {
  //     method: 'DELETE',
  //   });
  // };

  return (
    <div>
      <h3 style={styles.form}>Create a new listing:</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        <label>
          Category:
          <select
            placeholder="Select a job category"
            onChange={(e) => setCat(e.target.value)}
          >
            <option value="none">Select a job category:</option>
            {cats.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.job_type}
              </option>
            ))}
          </select>
        </label>  
        <button type="submit">Create Listing</button>
      </form>
    </div>
  )

}

export default NewListing;