import TextPressure from "../components/TextPressure";

export const Home = () => {
  return (
    <div style={{ textAlign: "center", flexShrink: 0 }}>
      <TextPressure
        text="STAR WARS"
        flex
        alpha={false}
        stroke
        width
        weight
        italic
        minFontSize={200}
        textColor="#FFD700"
        strokeColor="#000000"
      />
      <TextPressure
        text="EXPLORER"
        flex
        alpha={false}
        stroke
        width
        weight
        italic
        minFontSize={200}
        textColor="#FFD700"
        strokeColor="#000000"
      />
    </div>
  );
};
