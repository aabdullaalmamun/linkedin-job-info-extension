chrome.runtime.onMessage.addListener((message) => {
    console.log("Received message:", message);  // Log to verify receipt in the popup console

    document.getElementById("job-location").innerText = message.location || 'N/A';
    document.getElementById("job-type").innerText = message.jobType || 'N/A';
    document.getElementById("job-role").innerText = message.role || 'N/A';
    document.getElementById("job-description").innerText = message.description || 'N/A';
});
