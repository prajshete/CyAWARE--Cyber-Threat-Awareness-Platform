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



async function fetchCVEFeed() {
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

        // Create the table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        const cveHeader = document.createElement('th');
        cveHeader.textContent = 'CVE';
        cveHeader.style.border = '1px solid #ccc';
        cveHeader.style.padding = '10px';
        cveHeader.style.backgroundColor = '#f3f4f6';

        const descHeader = document.createElement('th');
        descHeader.textContent = 'Description';
        descHeader.style.border = '1px solid #ccc';
        descHeader.style.padding = '10px';
        descHeader.style.backgroundColor = '#f3f4f6';

        headerRow.appendChild(cveHeader);
        headerRow.appendChild(descHeader);
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create the table body
        const tbody = document.createElement('tbody');

        cves.forEach(cve => {
            const row = document.createElement('tr');

            // CVE column (as a clickable link)
            const cveCell = document.createElement('td');
            const cveLink = document.createElement('a');
            cveLink.href = cve.link; // Replace with the actual feed link
            cveLink.textContent = cve.title;
            cveLink.target = '_blank'; // Open in a new tab
            cveCell.appendChild(cveLink);
            cveCell.style.border = '1px solid #ccc';
            cveCell.style.padding = '10px';

            // Description column
            const descCell = document.createElement('td');
            descCell.textContent = cve.description;
            descCell.style.border = '1px solid #ccc';
            descCell.style.padding = '10px';

            row.appendChild(cveCell);
            row.appendChild(descCell);
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
