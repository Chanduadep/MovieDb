import '../styles/Pagination.css'
const Pagination = ({ page, onPageChange }) => {
    return (
      <div className="pagination">
        <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>Previous</button>
        <span>Page {page}</span>
        <button onClick={() => onPageChange(page + 1)}>Next</button>
      </div>
    );
  };
  
  export default Pagination;