import { useEffect, useState } from "react";

const APIComponent = () => {
  const [topicIds, setTopicIds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use the Fetch API to make an API request
    fetch("http://localhost:5000/progress/get-progress")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTopicIds(data.topicIds);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>User's Visited Topics:</h1>
      <ul>
        {error ? (
          <li>Error fetching user's visited topics</li>
        ) : (
          topicIds.map((topicId, index) => (
            <li key={index}>{topicId}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default APIComponent;