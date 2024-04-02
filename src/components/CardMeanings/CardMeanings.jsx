const CardMeanings = ({ meanings }) => (
  <aside className="card-meanings">
    <fieldset>
      <legend>
        <h2>Meanings</h2>
      </legend>
      <h3>Light:</h3>
      <p>{meanings.light.join(". ")}.</p>
      <h3>Shadow:</h3>
      <p>{meanings.shadow.join(". ")}.</p>
    </fieldset>
  </aside>
);

export default CardMeanings;
