//SVG de un loading animado
//Se muestra mientras se cargan los datos de la API
const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100" height="100">
        <style>
          {`
            .st3067 { fill: none; stroke: currentColor; stroke-width: 4pt; stroke-miterlimit: 10; }
          `}
        </style>
        <circle cx="500" cy="500" r="160" className="st3067" />
        <circle cx="500" cy="500" r="160" className="st3067" style={{ strokeLinecap: "square", strokeDasharray: "500,2013", strokeWidth: 20 }}>
          <animateTransform attributeName="transform" attributeType="xml" dur="5s" from="0 500 500" repeatCount="indefinite" to="-360 500 500" type="rotate" />
        </circle>
        <circle cx="500" cy="500" r="240" className="st3067" style={{ stroke: "rgba(255,255,255,0)" }} />
        <circle cx="500" cy="500" r="240" className="st3067" style={{ strokeLinecap: "square", strokeDasharray: "1000,1513", strokeWidth: 20 }}>
          <animateTransform attributeName="transform" attributeType="xml" dur="4s" from="0 500 500" repeatCount="indefinite" to="-360 500 500" type="rotate" />
        </circle>
        <circle cx="500" cy="500" r="320" className="st3067" />
        <circle cx="500" cy="500" r="320" className="st3067" style={{ strokeLinecap: "square", strokeDasharray: "320,320", strokeWidth: 20 }}>
          <animateTransform attributeName="transform" attributeType="xml" dur="2s" from="0 500 500" repeatCount="indefinite" to="-360 500 500" type="rotate" />
        </circle>
        <circle cx="500" cy="500" r="400" className="st3067" />
        <circle cx="500" cy="500" r="400" className="st3067" style={{ strokeLinecap: "square", strokeDasharray: "1500,1013", strokeWidth: 20 }}>
          <animateTransform attributeName="transform" attributeType="xml" dur="5s" from="0 500 500" repeatCount="indefinite" to="-360 500 500" type="rotate" />
        </circle>
        <circle cx="500" cy="500" r="480" className="st3067" />
        <circle cx="500" cy="500" r="480" className="st3067" style={{ strokeLinecap: "square", strokeDasharray: "2000,513", strokeWidth: 20 }}>
          <animateTransform attributeName="transform" attributeType="xml" dur="5s" from="0 500 500" repeatCount="indefinite" to="-360 500 500" type="rotate" />
        </circle>
      </svg>
    </div>
  );
};

export default Loading;
