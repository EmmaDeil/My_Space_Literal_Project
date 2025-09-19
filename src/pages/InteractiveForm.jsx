import React, {useState} from 'react';
function InteractiveForm() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    priority: 'normal'
  });
  const [eventLog, setEventLog] = useState([]);

  // Log event details
  const logEvent = (eventType, details, event) => {
    const eventInfo = {
      type: eventType,
      timestamp: new Date().toLocaleTimeString(),
      details: details,
      target: event.target.tagName,
      coordinates: event.clientX ? `(${event.clientX}, ${event.clientY})` : 'N/A'
    };
    setEventLog(prev => [eventInfo, ...prev.slice(0, 4)]); // Keep last 5 events
  };

  // Handle input changes with event logging
  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    
    logEvent('Input Change', {
      field: fieldName,
      value: value,
      keyPressed: event.nativeEvent.inputType
    }, event);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    
    logEvent('Form Submit', {
      formData: formData,
      isValid: formData.email && formData.message
    }, event);

    if (formData.email && formData.message) {
      alert(`Form submitted successfully!
Email: ${formData.email}
Message: ${formData.message}
Priority: ${formData.priority}`);
    } else {
      alert('Please fill in all required fields!');
    }
  };

  // Handle special key presses
  const handleKeyDown = (fieldName, event) => {
    if (event.key === 'Enter' && event.ctrlKey) {
      event.preventDefault();
      handleSubmit(event);
    }
    
    logEvent('Key Press', {
      field: fieldName,
      key: event.key,
      ctrlKey: event.ctrlKey,
      shiftKey: event.shiftKey
    }, event);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Interactive Form with Event Tracking</h2>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e)}
            onKeyDown={(e) => handleKeyDown('email', e)}
            placeholder="Enter your email"
            style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e)}
            onKeyDown={(e) => handleKeyDown('message', e)}
            placeholder="Enter your message (Ctrl+Enter to submit)"
            rows="4"
            style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Priority:</label>
          <select
            value={formData.priority}
            onChange={(e) => handleInputChange('priority', e)}
            style={{ padding: '8px', borderRadius: '4px' }}
          >
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </div>

        <button type="submit" style={{
          backgroundColor: '#0090fc',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Submit Form
        </button>
      </form>

      {/* Event Log Display */}
      <div style={{ 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        padding: '15px',
        backgroundColor: '#f9f9f9'
      }}>
        <h3>Event Log (Last 5 Events):</h3>
        {eventLog.map((event, index) => (
          <div key={index} style={{
            padding: '8px',
            margin: '5px 0',
            backgroundColor: 'white',
            borderRadius: '4px',
            fontSize: '14px'
          }}>
            <strong>{event.timestamp}</strong> - {event.type}
            <br />
            Target: {event.target} | Coordinates: {event.coordinates}
            <br />
            Details: {JSON.stringify(event.details)}
          </div>
        ))}
      </div>
    </div>
  );
}
export default InteractiveForm;