import "./Card.css";
import Button from "./Button.js";

export default function Card({ card }) {
  return (
    <li className="card-list__item">
      <article className="card">
        <h2 className="card__question">{card.question}</h2>
        <Button answer={card.answer} />
        <ul className="card__tag-list">
          {card.tags.map((tag) => {
            return (
              <li key={tag} className="card__tag-list-item">
                {tag}
              </li>
            );
          })}
        </ul>
        <div className="card__button-bookmark">
          <button className="bookmark" aria-label="bookmark" type="button">
            <svg
              className="bookmark__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            </svg>
          </button>
        </div>
      </article>
    </li>
  );
}
