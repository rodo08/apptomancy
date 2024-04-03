import "./CardTarotDetails.css";

export const CardTarotDetails = ({
  title,
  description = [],
  className,
  keywords = [],
  light = [],
  shadow = [],
}) => {
  return (
    <div className="card-details">
      <h1>{title}</h1>
      <p>{description?.join(". ") + "."}</p>
      <fieldset>
        <article>
          <details>
            <h2>Keywords</h2>
            <p>{keywords?.join(". ") + "."}</p>
            <summary className={className}>Read </summary>
            <h2>Meanings:</h2>
            <h3>Light</h3>
            <p>{light?.join(". ") + "."}</p>
            <h3>Shadow</h3>
            <p>{shadow?.join(". ") + "."}</p>
          </details>
        </article>
      </fieldset>
    </div>
  );
};
