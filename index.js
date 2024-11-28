const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const RSSParser = require('rss-parser');


const app = express();
const PORT = 3000;
const parser = new RSSParser();
app.use(cors()); 

async function fetchCrowdstrikeBlogs() {
    try {
        const url = 'https://www.crowdstrike.com/en-us/blog/category.counter-adversary-operations/';
        const { data } = await axios.get(url); // Fetch the HTML page
        const $ = cheerio.load(data); // Load HTML into Cheerio

        let blogs = [];

        // Select each blog entry using the appropriate container class
        $('.cmp-wp-blog-listing .row.category_article').each((_, el) => {
            const title = $(el).find('h3').text().trim(); // Extract blog title
            const link = $(el).find('h3 a').attr('href'); // Extract blog link from anchor inside <h3>

            if (title && link) {
                blogs.push({
                    title,
                    url: link.startsWith('http') ? link : `https://www.crowdstrike.com${link}`, // Ensure full URL
                });
            }
        });

        return blogs;
    } catch (error) {
        console.error('Error fetching CrowdStrike blogs:', error.message);
        return [];
    }
}


async function fetchMandiantBlogs() {
    try {
        const feed = await parser.parseURL('https://feeds.feedburner.com/threatintelligence/pvexyqv7v0v');
        const blogs = feed.items.map(item => ({
            title: item.title,
            url: item.link
        }));
        return blogs;
    } catch (error) {
        console.error('Error fetching RSS feed:', error.message);
        return [];
    }
}

async function fetchDFIRBlogs() {
    try {
        const url = 'https://thedfirreport.com/'; // Replace with the exact URL
        const { data } = await axios.get(url); // Fetch the HTML page
        const $ = cheerio.load(data); // Load HTML into Cheerio

        let blogs = [];

        // Select each blog entry using the <article> tag
        $('article').each((_, el) => {
            const title = $(el).find('h2.entry-title a').text().trim(); // Extract the blog title
            const link = $(el).find('h2.entry-title a').attr('href'); // Extract the URL

            if (title && link) {
                blogs.push({
                    title,
                    url: link,
                });
            }
        });

        return blogs;
    } catch (error) {
        console.error('Error fetching blogs:', error.message);
        return [];
    }
}

async function fetchDRBlogs() {
    try {
        const url = 'https://www.darkreading.com/threat-intelligence'; // Replace with the exact URL
        const { data } = await axios.get(url); // Fetch the HTML page
        const $ = cheerio.load(data); // Load HTML into Cheerio

        let blogs = [];

        // Select each blog entry using the <article> tag
        $('div.ListPreview-MobileTitleWrapper').each((_, el) => {
            const title = $(el).find('a.ListPreview-Title').text().trim(); // Extract the blog title
            const link = $(el).find('a.ListPreview-Title').attr('href'); // Extract the URL

            if (title && link) {
                blogs.push({
                    title,
                    url: link,
                });
            }
        });

        return blogs;
    } catch (error) {
        console.error('Error fetching blogs:', error.message);
        return [];
    }
}



app.get('/api/get-cs-blogs', async (req, res) => {
    try {
        const [crowdstrikeBlogs] = await Promise.all([
            fetchCrowdstrikeBlogs(),
        ]);

        res.json([...crowdstrikeBlogs]);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

app.get('/api/get-mandiant-blogs', async (req, res) => {
    try {
        const [mandiantBlogs] = await Promise.all([
            fetchMandiantBlogs(),
        ]);

        res.json(mandiantBlogs);
    } catch (error) {
        console.error('Error in API:', error.message);
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

app.get('/api/get-dfir-blogs', async (req, res) => {
    try {
        const [dfirBlogs] = await Promise.all([
            fetchDFIRBlogs(),
        ]);

        res.json(dfirBlogs);
    } catch (error) {
        console.error('Error in API:', error.message);
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

app.get('/api/get-dr-blogs', async (req, res) => {
    try {
        const [drBlogs] = await Promise.all([
            fetchDRBlogs(),
        ]);

        res.json(drBlogs);
    } catch (error) {
        console.error('Error in API:', error.message);
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
