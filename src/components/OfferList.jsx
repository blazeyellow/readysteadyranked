import OfferCard from './OfferCard.jsx';

const OfferList = ({ offers }) => (
  <section className="offer-grid" aria-live="polite">
    {offers.length === 0 ? <p>No offers match your filters just yet.</p> : null}
    {offers.map((offer) => (
      <OfferCard key={offer.id} offer={offer} />
    ))}
  </section>
);

export default OfferList;
