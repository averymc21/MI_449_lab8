// Import Supabase client
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://fxgexffrvlsounxjxutv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4Z2V4ZmZydmxzb3VueGp4dXR2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDUyMDI4NiwiZXhwIjoyMDI2MDk2Mjg2fQ.HW74UaLkWI1o-DdChriSKbYTo_rWYu8j6x5hvG1nAms'

const supabase = createClient(supabaseUrl, supabaseKey);

// Function to fetch books from Supabase and populate the table   
async function displayBooks() {
    console.log ("hello");
    try {
        // Fetch books data from Supabase
        const { data: favorite_books, error } = await supabase.from('favorite_books').select('*');
        if (error) {
            throw error;
        }

        // Get table element
        const booksTable = document.getElementById('books-table');

        // Clear existing table rows
        booksTable.innerHTML = '';

        // Populate table with books data
        favorite_books.forEach(book => {
            // Create a new row
            const row = document.createElement('tr');

            // Populate row with book data
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
            `;

            // Append row to table
            booksTable.querySelector('tbody').appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching books:', error.message);
    }
}

// Call the function to display books
displayBooks();