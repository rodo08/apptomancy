const CardHeader = ({ name, fortuneTelling }) => (
  <header className="featured-card-header">
    <h1>{name}</h1>
    <p>{fortuneTelling.join(". ")}.</p>
  </header>
);

export default CardHeader;
