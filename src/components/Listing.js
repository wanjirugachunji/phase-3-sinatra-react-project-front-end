import React, { useEffect, useState } from "react";
import EditListing from "./EditListing"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function Listing({ listing, onUpdateListing, listings, setListings }) {

  const styles = {
    main: {
      display: "flex",
      width: "18rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center"
    }
  }

  const { id, title, body } = listing;
  const [isEdit, setIsEdit] = useState(false);

  const handleUpdateListing = (updatedListing) => {
    setIsEdit(false);
    onUpdateListing(updatedListing);
  }


  const handleDelete = () => {
    // deleteListing(id);
    fetch(`http://localhost:9292/listings/${id}`, {
      method: 'DELETE',
    });
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
  };

  useEffect(() => {
  }, [listing])


  return (
    <Card className="card text-white bg-dark mb-3" style={styles.main}>
      <Card.Header as="h5">{title}</Card.Header>
      {isEdit ? (
        <EditListing
          listing={listing}
          handleUpdateListing={handleUpdateListing}
          setIsEdit={setIsEdit}
        />
      ) : (
          <Card.Body>
            <Card.Text>{body}</Card.Text>
            {listing.cat && listing.cat.job_type? <Card.Text>Category: {listing.cat.job_type}</Card.Text>:<Card.Text>Category: other</Card.Text>}
            <Button 
              onClick={() => setIsEdit((isEdit) => !isEdit)}
              type="button" 
              variant="outline-secondary"
              >Edit
            </Button>
            <Button onClick={handleDelete} variant="outline-secondary">🗑</Button>
          </Card.Body>
      )}
    </Card>
  );
}

export default Listing;