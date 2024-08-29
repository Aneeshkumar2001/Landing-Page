import React, { useState } from 'react';

const AnotherPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
  });

  const [submissions, setSubmissions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions([...submissions, formData]);
    setFormData({
      name: '',
      age: '',
      location: '',
    });
    setCurrentPage(1); 
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSubmissions = submissions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(submissions.length / itemsPerPage);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Form Page</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>

      {submissions.length > 0 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>Submitted Details</h2>
          {currentSubmissions.map((submission, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <p><strong>Name:</strong> {submission.name}</p>
              <p><strong>Age:</strong> {submission.age}</p>
              <p><strong>Location:</strong> {submission.location}</p>
            </div>
          ))}

        
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  style={{
                    padding: '10px',
                    margin: '0 5px',
                    backgroundColor: pageNumber === currentPage ? '#4CAF50' : '#f0f0f0',
                    color: pageNumber === currentPage ? 'white' : 'black',
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                  }}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AnotherPage;
