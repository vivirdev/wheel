import couplePhoto from "./assets/lital-nadav.jpg";
import bitIcon from "./assets/bit-icon.png";
import payboxIcon from "./assets/paybox-icon.png";
import amexIcon from "./assets/card-icons/americanexpress.svg";
import dinersIcon from "./assets/card-icons/dinersclub.svg";
import mastercardIcon from "./assets/card-icons/mastercard.svg";
import visaIcon from "./assets/card-icons/visa.svg";

const giftLinks = [
  {
    label: "מתנה באשראי",
    note: "כרטיס אשראי",
    cards: [
      { label: "Visa", src: visaIcon },
      { label: "Mastercard", src: mastercardIcon },
      { label: "American Express", src: amexIcon },
      { label: "Diners Club", src: dinersIcon },
    ],
    href: "https://gift.rsvpevents.co.il/events/11feeee7-f3ca-45b5-8a49-6fe860b191af",
    tone: "credit",
  },
  {
    label: "מתנה בביט",
    note: "bit",
    icon: bitIcon,
    href: "https://www.bitpay.co.il/app/me/D46964C1-24C8-714B-6882-168E3E8AB98054E4",
    tone: "bit",
  },
  {
    label: "מתנה ב-PayBox",
    note: "PayBox",
    icon: payboxIcon,
    href: "https://links.payboxapp.com/uo74O2jLv3b",
    tone: "paybox",
  },
];

export function App() {
  return (
    <main className="page-shell" dir="rtl">
      <img className="backdrop" src={couplePhoto} alt="" aria-hidden="true" />
      <div className="backdrop-shade" />

      <section className="content" aria-labelledby="page-title">
        <div className="event-mark">
          <span>23.6.2026</span>
          <span>מערבה געש</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">החתונה של</p>
          <h1 id="page-title">ליטל ונדב</h1>
          <p className="thanks">שמחים שאתם איתנו. תודה על האהבה ועל המתנה.</p>
        </div>

        <nav className="gift-panel" aria-label="אפשרויות למתנה">
          <p className="panel-title">לבחירת אמצעי תשלום</p>
          <div className="gift-actions">
            {giftLinks.map((link) => (
              <a
                className={`gift-button gift-button--${link.tone}`}
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                <span className="gift-label">{link.label}</span>
                <span
                  className={`gift-note${link.icon ? " gift-note--icon" : ""}${
                    link.cards ? " gift-note--cards" : ""
                  }`}
                >
                  {link.cards ? (
                    <span className="card-stack" aria-label="כל כרטיסי האשראי">
                      {link.cards.map((card) => (
                        <span className="card-brand" key={card.label}>
                          <img src={card.src} alt={card.label} />
                        </span>
                      ))}
                    </span>
                  ) : link.icon ? (
                    <img src={link.icon} alt={link.note} />
                  ) : (
                    link.note
                  )}
                </span>
              </a>
            ))}
          </div>
          <p className="panel-thanks">תודה שבאתם לחגוג איתנו</p>
        </nav>
      </section>
    </main>
  );
}
