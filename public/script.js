document.getElementById('seoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const url = document.getElementById('urlInput').value;
    
    fetch('/seoInfo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // You can access the JSON data in the 'data' variable
        const seoResultPre = document.getElementById('seoResult');
        seoResultPre.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});