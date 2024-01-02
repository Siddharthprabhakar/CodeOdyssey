import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const ClearAllProgressButton = () => {
  const [clearing, setClearing] = useState(false);

  const handleClearAllProgress = () => {
    if (clearing) return; // Prevent multiple clicks while the request is being made
    setClearing(true);

    fetch("http://localhost:5000/progress/clear-all", {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("All progress has been cleared successfully.");
        } else if (response.status === 404) {
          alert("No progress found to clear.");
        } else {
          alert("Failed to clear progress data.");
        }
      })
      .catch((error) => {
        console.error("Error clearing progress:", error);
        alert("An error occurred while clearing progress data.");
      })
      .finally(() => {
        setClearing(false);
      });
  };

    return (
     <>
     <div>
      <Button variant="danger" onClick={handleClearAllProgress} disabled={clearing}>
        {clearing ? "Clearing..." : "Clear All Progress"}
      </Button>
    </div>
     </>
    )
  }

export default ClearAllProgressButton;