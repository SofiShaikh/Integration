import React, { useState } from "react";
import '../styles/community.css'

const Community = () => {
  const [tips, setTips] = useState([]);
  const [newTip, setNewTip] = useState({ type: "", title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTip((prevTip) => ({ ...prevTip, [name]: value }));
  };

  const handleAddTip = () => {
    if (newTip.title && newTip.description && newTip.type) {
      setTips([...tips, newTip]);
      setNewTip({ type: "", title: "", description: "" }); // Clear the form after adding
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="community-container">
      <h1>Community Tips & Recommendations</h1>

      {/* Form to Add New Tip */}
      <div className="add-tip-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newTip.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newTip.description}
          onChange={handleInputChange}
        />
        <select
          name="type"
          value={newTip.type}
          onChange={handleInputChange}
        >
          <option value="">Select Type</option>
          <option value="Do">Do</option>
          <option value="Don't">Don't</option>
        </select>
        <button onClick={handleAddTip}>Add Tip</button>
      </div>

      {/* Displaying the Tips */}
      <div className="tip-cards-container">
        {tips.map((tip, index) => (
          <div key={index} className={`tip-card ${tip.type.toLowerCase()}`}>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
            <span className={`tip-type ${tip.type.toLowerCase()}`}>
              {tip.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
