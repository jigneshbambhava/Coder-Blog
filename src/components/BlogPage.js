// src/components/BlogPage.js
import React, { useState } from 'react';
import blogPosts from '../data/blogData';
import '../css/BlogPage.css';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Function to change page
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Function to get posts for current page
  const getCurrentPagePosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return blogPosts.slice(startIndex, endIndex);
  };

  const currentPagePosts = getCurrentPagePosts();

  // Function to generate an array of page numbers to render
  const getPageNumbers = () => {
     const pageNumbers = [];
     const maxVisiblePages = 3; // Maximum visible page numbers (excluding ellipses)
 
     if (totalPages <= maxVisiblePages) {
       // If total pages are less than or equal to maxVisiblePages, show all pages
       for (let i = 1; i <= totalPages; i++) {
         pageNumbers.push(i);
       }
     } else {
       // Calculate the start and end of the range around the current page
       let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
       let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
 
       // Adjust startPage and endPage when nearing the edges
       if (endPage - startPage + 1 < maxVisiblePages) {
         startPage = endPage - maxVisiblePages + 1;
       }
 
       // Add leading ellipsis if necessary
       if (startPage > 1) {
         pageNumbers.push(1);
         if (startPage > 2) {
           pageNumbers.push('...');
         }
       }
 
       // Add page numbers within the range
       for (let i = startPage; i <= endPage; i++) {
         pageNumbers.push(i);
       }
 
       // Add trailing ellipsis if necessary
       if (endPage < totalPages) {
         if (endPage < totalPages - 1) {
           pageNumbers.push('...');
         }
         pageNumbers.push(totalPages);
       }
     }
 
     return pageNumbers;
   };

  return (
    <div className="blog-page">
      <ul>
        {currentPagePosts.map((post, index) => (
          <li key={index} className="blog-post">
            <h2>{post.title}</h2>
            <p className="author-date">
              <strong>By {post.author}</strong> on {post.date} <em>in {post.category}</em>
            </p>
            <p className="content">{post.content}</p>
            <div className="tags">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="tag">#{tag}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button
          className={`page-arrow ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {getPageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            className={`page-number ${pageNumber === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className={`page-arrow ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
