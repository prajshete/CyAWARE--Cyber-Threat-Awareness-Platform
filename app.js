// Fetch blogs from the backend and render them
async function fetchCSBlogs() {
    try {
        // Fetch data from the API
        const response = await fetch('http://localhost:3000/api/get-cs-blogs');
        const blogs = await response.json();
        //console.log('Fetched blogs:', blogs);

        // Select the blog container
        const blogContainer = document.getElementById('cs-blog-container');
        blogContainer.innerHTML = ''; // Clear any existing content

        const topBlogs = blogs.slice(0, 6); // Get the first 5 blogs
        //console.log('Top blogs:', topBlogs);

        // Loop through blogs and create blog cards
        topBlogs.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';

             // Add provider logo
             const logo = document.createElement('img');
             logo.src = './imgs/cs.jpg'; // Replace with the actual path to the logo
             logo.alt = 'CrowdStrike Logo';
             logo.style.width = '80px';
             logo.style.height = '60px';
             logo.style.marginRight = '10px';

            const blogLink = document.createElement('a');
            blogLink.href = blog.url;
            blogLink.textContent = blog.title;
            blogLink.target = '_blank'; // Open in a new tab
            
            blogCard.appendChild(logo);
            blogCard.appendChild(blogLink);
            blogContainer.appendChild(blogCard);
        });
    } catch (error) {
        console.error('Error fetching or rendering blogs:', error);
    }
}

async function fetchMandiantBlogs() {
    try {
      
        const response = await fetch('http://localhost:3000/api/get-mandiant-blogs');
        const blogs = await response.json();

        const blogContainer = document.getElementById('mandiant-blog-container');
        blogContainer.innerHTML = ''; 

        const topBlogs = blogs.slice(0, 6); 
        console.log('Top blogs:', topBlogs);

        
        topBlogs.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';

            const logo = document.createElement('img');
            logo.src = './imgs/mandiant.png'; // Replace with the actual path to the logo
            logo.alt = 'Mandiant Logo';
            logo.style.width = '60px';
            logo.style.height = '60px';
            logo.style.marginRight = '10px';

            const blogLink = document.createElement('a');
            blogLink.href = blog.url;
            blogLink.textContent = blog.title;
            blogLink.target = '_blank'; // Open in a new tab
            
            blogCard.appendChild(logo);
            blogCard.appendChild(blogLink);
            blogContainer.appendChild(blogCard);
        });
    } catch (error) {
        console.error('Error fetching or rendering blogs:', error);
    }
}


async function fetchDFIRBlogs() {
    try {
        // Fetch data from the API
        const response = await fetch('http://localhost:3000/api/get-dfir-blogs');
        const blogs = await response.json();
        console.log('Fetched blogs:', blogs);

        // Select the blog container
        const blogContainer = document.getElementById('dfir-blog-container');
        blogContainer.innerHTML = ''; // Clear any existing content

        const topBlogs = blogs.slice(0, 6); // Get the first 5 blogs
        console.log('Top blogs:', topBlogs);

        // Loop through blogs and create blog cards
        topBlogs.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';

            const logo = document.createElement('img');
            logo.src = './imgs/dfir.jpeg'; // Replace with the actual path to the logo
            logo.alt = 'Mandiant Logo';
            logo.style.width = '60px';
            logo.style.height = '60px';
            logo.style.marginRight = '10px';

            const blogLink = document.createElement('a');
            blogLink.href = blog.url;
            blogLink.textContent = blog.title;
            blogLink.target = '_blank'; // Open in a new tab

            blogCard.appendChild(logo)
            blogCard.appendChild(blogLink);
            blogContainer.appendChild(blogCard);
        });
    } catch (error) {
        console.error('Error fetching or rendering blogs:', error);
    }
}


async function fetchDRBlogs() {
    try {
        // Fetch data from the API
        const response = await fetch('http://localhost:3000/api/get-dr-blogs');
        const blogs = await response.json();

        // Select the blog container
        const blogContainer = document.getElementById('dr-blog-container');
        blogContainer.innerHTML = ''; // Clear any existing content

        const topBlogs = blogs.slice(0, 6); // Get the first 5 blogs

        // Loop through blogs and create blog cards
        topBlogs.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';

            const logo = document.createElement('img');
            logo.src = './imgs/dr.jpg'; // Replace with the actual path to the logo
            logo.alt = 'Mandiant Logo';
            logo.style.width = '60px';
            logo.style.height = '60px';
            logo.style.marginRight = '10px';

            const blogLink = document.createElement('a');
            blogLink.href = `https://www.darkreading.com${blog.url}`;;
            blogLink.textContent = blog.title;
            blogLink.target = '_blank'; // Open in a new tab

            blogCard.appendChild(logo)
            blogCard.appendChild(blogLink);
            blogContainer.appendChild(blogCard);
        });
    } catch (error) {
        console.error('Error fetching or rendering blogs:', error);
    }
}



async function fetchCVE() {
    try {
        // Fetch data from the API
        const response = await fetch('http://localhost:3000/api/get-cve-feed');
        const cves = await response.json();

        // Select the CVE container (where the table will be displayed)
        const cveContainer = document.getElementById('cves-container');
        cveContainer.innerHTML = ''; // Clear any existing content

        // Create a table
        const table = document.createElement('table');
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        table.style.marginTop = '20px';
        table.style.animation = 'fadeIn 1s ease'; // Add animation for the table

        // Create the table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        const headers = ['CVE', 'Severity', 'Score']; // Table headers
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            th.style.border = '1px solid #ddd';
            th.style.padding = '12px';
            th.style.backgroundColor = '#f3f4f6';
            th.style.textAlign = 'left';
            th.style.fontWeight = 'bold';
            th.style.color = '#1e293b'; // Dark text for headers
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create the table body
        const tbody = document.createElement('tbody');

        cves.forEach(cve => {
            const row = document.createElement('tr');
            row.style.transition = 'background-color 0.3s ease'; // Row hover effect

            // CVE column (as a clickable link)
            const cveCell = document.createElement('td');
            const cveLink = document.createElement('a');
            cveLink.href = cve.url; // Use the URL from the API
            cveLink.textContent = cve.title;
            cveLink.target = '_blank'; // Open in a new tab
            cveLink.style.color = '#007bff'; // Link color
            cveLink.style.textDecoration = 'none';
            cveLink.addEventListener('mouseover', () => {
                cveLink.style.textDecoration = 'underline';
            });
            cveLink.addEventListener('mouseout', () => {
                cveLink.style.textDecoration = 'none';
            });
            cveCell.appendChild(cveLink);
            cveCell.style.border = '1px solid #ddd';
            cveCell.style.padding = '12px';

            // Severity column
            const severityCell = document.createElement('td');
            severityCell.textContent = cve.severity;
            severityCell.style.border = '1px solid #ddd';
            severityCell.style.padding = '12px';
            severityCell.style.color =
                cve.severity === 'CRITICAL'
                    ? '#660000' // Dark red for critical
                    : cve.severity === 'HIGH'
                    ? '#ff1a1a' // red for high
                    : '#28a745'; // Green for others
            severityCell.style.fontWeight = 'bold';

            // Score column
            const scoreCell = document.createElement('td');
            scoreCell.textContent = cve.score;
            scoreCell.style.border = '1px solid #ddd';
            scoreCell.style.padding = '12px';
            scoreCell.style.color =
                cve.severity === 'CRITICAL'
                    ? '#660000' // Dark red for critical
                    : cve.severity === 'HIGH'
                    ? '#ff1a1a' // Red for high
                    : '#28a745'; // Green for others
            scoreCell.style.fontWeight = 'bold';

            // Append cells to the row
            row.appendChild(cveCell);
            row.appendChild(severityCell);
            row.appendChild(scoreCell);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        cveContainer.appendChild(table);
    } catch (error) {
        console.error('Error fetching or rendering CVE feed:', error);
    }
}




// Fetch and render blogs when the page loads
fetchCSBlogs();
fetchMandiantBlogs();
fetchDFIRBlogs();
fetchDRBlogs();
fetchCVE();
