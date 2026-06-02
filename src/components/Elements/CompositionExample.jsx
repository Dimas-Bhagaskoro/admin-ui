import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";

function GaugePointer(props) {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();
  const { theme: themeMode } = React.useContext(ThemeContext);

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill={themeMode.color} />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke={themeMode.color}
        strokeWidth={3}
      />
    </g>
  );
}

export default function CompositionExample(props) {
  const { data } = props;
  const { theme: themeMode } = React.useContext(ThemeContext);

  return (
    <GaugeContainer
      width={150}
      height={80}
      startAngle={-90}
      endAngle={90}
      value={data}
      sx={() => ({
        [`& .value-arc`]: {
          fill: "#299D91",
        },
      })}
    >
      <GaugeReferenceArc />
      <GaugeValueArc sx={{ fill: themeMode.color }} />
      <GaugePointer color={themeMode.color} />
    </GaugeContainer>
  );
}