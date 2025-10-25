const OfferCard = ({ offer }) => (
  <article className="card" data-offer-id={offer.id}>
    {offer.featured ? <span className="badge">Featured</span> : null}
    <div>
      <h2>{offer.merchant}</h2>
      <p>{offer.headline}</p>
    </div>

    <div>
      <strong>Payout:</strong> {offer.payout}
    </div>
    <div>
      <strong>Conversion Window:</strong> {offer.conversionWindow}
    </div>

    <div>
      <strong>Why it converts</strong>
      <ul>
        {offer.sellingPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>

    <button
      type="button"
      className="cta"
      onClick={() => {
        // TODO: integrate with tracking API once available
        console.log(`Track click for offer ${offer.id}`);
      }}
    >
      Promote {offer.merchant}
    </button>
  </article>
);

export default OfferCard;
