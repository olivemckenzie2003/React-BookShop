import PropTypes from "prop-types";

function Book({ bookProps, addBook, isInTheBookcase }) {
  const {
    volumeInfo: { title, authors, description },
    price,
  } = bookProps;

  return (
    <div>
      <h2>
        {title ? title : "No Title Here"}
        &nbsp; by {authors ? authors.join(",") : "No authors Listed"}
      </h2>

      <p>{description}</p>
      <span>{price ? `£${price}` : "No Price Listed"}</span>

      {isInTheBookcase === true ? (
        ""
      ) : (
        <button className="btn-add" onClick={() => addBook(title)}>
          Add +
        </button>
      )}
      <p></p>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  authors: PropTypes.array,
  description: PropTypes.string,
};

export default Book;
