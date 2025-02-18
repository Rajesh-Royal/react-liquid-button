export const HeroType = () => {
  return (
    <h2 style={{fontSize: '10vw'}}>Liquid Button</h2>
  )
}

export const PerspectiveGrid = ({ activeBeams }) => {
  return (
    <svg width="1889" height="546" viewBox="0 0 1889 546" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        {[
          "M672.481 0.981445L0.51955 545.125",
          "M750.216 0.981445L348.619 545.125",
          "M827.95 0.981445L609.679 545.125",
          "M905.686 0.981445L836.117 545.125",
          "M983.42 0.981445L1052.99 545.125",
          "M1061.16 0.981445L1279.43 545.125",
          "M1138.89 0.981445L1540.49 545.125",
          "M1216.62 0.981445L1888.59 545.125",
        ].map((d, i) => (
          <g key={i}>
            <path d={d} stroke="#B3B3B3" strokeWidth="1.36036" />
            {/* Animated beam */}
            {activeBeams.includes(i) && (
              <path
                className="beam"
                d={d}
                stroke="blue"
                strokeWidth="3"
              />
            )}
          </g>
        ))}

        {[
          "M665.011 7.03027H1224.09",
          "M618.978 44.1279L1270.48 44.128",
          "M566.178 87.0635H1322.93",
          "M521.831 122.975H1367.27",
          "M462.972 170.638H1426.13",
          "M386.005 232.965H1503.1",
          "M286.699 313.382H1602.41",
          "M160.111 415.89H1728.99",
          "M0.519531 545.125H1888.59",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="#B3B3B3"
            strokeWidth="1.36036"
          />
        ))}
      </g>
    </svg>
  )
}