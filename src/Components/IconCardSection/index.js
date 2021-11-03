import React from "react";
import Card from "./IconCard/index";
// import CardContent from "./Content/Homepage/CardContent";
// import TitleContent from "./Content/Homepage/Title";
import "./IconCards.css";
const IconCards = ({ title, content }) => {
  // const [cardContent, setCardContent] = useState([]);
  // useEffect(() => {
  //   setCardContent(CardContent);
  // });
  // const [titleContent, setTitleContent] = useState([]);
  // useEffect(() => {
  //   setTitleContent(TitleContent);
  // });
  return (
    <div className="cards">
      {title?.map((title, i) => (
        <div className="cardSec-title" key={title.id}>
          <h2>{title.Title}</h2>
          <h5>{title.SubTitle}</h5>
        </div>
      ))}
      <section className="card-section">
        {content?.map((card, i) => (
          <div key={card.id}>
            <Card
              Icon={card.Icon}
              Header={card.Header}
              Paragraph={card.Paragraph}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default IconCards;
