export default function RatingFormButton({ value, rating, setRating }) {
  function handleRating(value) {
    setRating(value);
  }

  return (
    <div
      className={
        rating === value
          ? "card__main__ratings__item --selected"
          : "card__main__ratings__item"
      }
      onClick={() => handleRating(value)}
    >
      {value}
    </div>
  );
}
