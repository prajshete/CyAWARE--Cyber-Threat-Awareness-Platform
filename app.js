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

// Fetch and render blogs when the page loads
fetchCSBlogs();
fetchMandiantBlogs();
fetchDFIRBlogs();
fetchDRBlogs();
