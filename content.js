console.log("content.js is running");
function fetchJobDetails() {
    const location = document.querySelector('.job-details-jobs-unified-top-card__primary-description-container')?.innerText || 'N/A';
    const jobType = document.querySelector('.job-details-jobs-unified-top-card__job-insight--highlight')?.innerText || 'N/A';
    const role = document.querySelector('.job-details-jobs-unified-top-card__job-title')?.innerText || 'N/A';
    const description = document.querySelector('.jobs-box__html-content')?.innerText || 'N/A';

    console.log("Location:", location);
    console.log("Job Type:", jobType);
    console.log("Role:", role);
    console.log("Description:", description);

    // Send data to popup.js
    chrome.runtime.sendMessage({ location, jobType, role, description });
}


const jobDetailsObserver = new MutationObserver(fetchJobDetails);
jobDetailsObserver.observe(document.body, { childList: true, subtree: true });

// Initial fetch for the currently open job
fetchJobDetails();

//job location class
//.job-details-jobs-unified-top-card__primary-description-container


//job type class
//.job-details-jobs-unified-top-card__job-title


//job role class
//.job-details-jobs-unified-top-card__job-title