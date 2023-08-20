document.addEventListener('DOMContentLoaded', function() {
    const jobSection = document.getElementById('template-work-experience');

    jobSection.addEventListener('click', function(event) {
        // Handle addition
        if (event.target.classList.contains('add-job')) {
            // If the closest parent is 'job-template', clone the entire job block
            if (event.target.closest('.job-template')) {
                const jobTemplate = event.target.closest('.job-template');
                const clonedJobTemplate = jobTemplate.cloneNode(true); // Deep clone
                jobTemplate.parentNode.insertBefore(clonedJobTemplate, jobTemplate.nextSibling);
            }
            // If the closest parent is 'li', clone the li
            else if (event.target.closest('li')) {
                const li = event.target.closest('li');
                const clonedLi = li.cloneNode(true); // Deep clone
                li.parentNode.insertBefore(clonedLi, li.nextSibling);
            }
        }
        // Handle removal
        else if (event.target.classList.contains('remove-job')) {
            const itemToRemove = event.target.closest('.job-template') || event.target.closest('li');
            itemToRemove.parentNode.removeChild(itemToRemove);
        }
    });
});
