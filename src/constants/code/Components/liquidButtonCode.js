import { generateCliCommands } from "@/utils/utils";

import code from "@content/Components/LiquidButton/LiquidButton.jsx?raw";
import tailwind from "@tailwind/Components/LiquidButton/LiquidButton.jsx?raw";
import tsCode from '@ts-default/Components/LiquidButton/LiquidButton.tsx?raw';
import tsTailwind from "@ts-tailwind/Components/LiquidButton/LiquidButton.tsx?raw";

export const liquidButton = {
  ...(generateCliCommands("Components/LiquidButton")),
  usage: `import LiquidButton from './LiquidButton'

<LiquidButton
  label="Hover me!"
  // All the properties below are optional
  primaryColor="#00d9ff"
  backgroundColor="#ff6cb1"
  secondaryColor="#ff9034"
  className="liquid-button"
  height={50}
  width={200}
  forceFactor={0.1}
  layerOneViscosity={0.5}
  layerTwoViscosity={0.4}
  layerOneMouseForce={400}
  layerTwoMouseForce={500}
  layerOneForceLimit={1}
  layerTwoForceLimit={2}
/>`,
  code,
  tailwind,
  tsTailwind,
  tsCode,
};
