import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box } from "@chakra-ui/react";

import PreviewSwitch from "../../components/common/PreviewSwitch";
import Customize from "../../components/common/Customize";
import PreviewSlider from "../../components/common/PreviewSlider";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import PropTable from "../../components/common/PropTable";

import LiquidButtonJsComponent from "../../content/Components/LiquidButton/LiquidButton";
import { liquidButton } from "../../constants/code/Components/liquidButtonCode";
import LiquidButton from "../../ts-default/Components/LiquidButton/LiquidButton";

const TiltedCardDemo = () => {
  const propData = [
    {
      name: 'className',
      value: '',
      type: 'string',
      default: '',
      description: 'Custom CSS class name for the button.',
    },
    {
      name: 'width',
      value: '200',
      type: 'number',
      default: '200',
      description: 'Button width.',
    },
    {
      name: 'height',
      value: '50',
      type: 'number',
      default: '50',
      description: 'Button height.',
    },
    {
      name: 'label',
      value: 'Hover me!',
      type: 'string',
      default: 'Hover me!',
      description: 'The label of the button.',
    },
    {
      name: 'backgroundColor',
      value: '#ff6cb1',
      type: 'string',
      default: '#ff6cb1',
      description: 'Background color of the button.',
    },
    {
      name: 'primaryColor',
      value: '#00d9ff',
      type: 'string',
      default: '#00d9ff',
      description: 'Primary color for the liquid effect.',
    },
    {
      name: 'secondaryColor',
      value: '#ff9034',
      type: 'string',
      default: '#ff9034',
      description: 'Secondary color for the liquid effect.',
    },
    {
      name: 'forceFactor',
      value: "0.1",
      type: 'number',
      default: "0.1",
      description: 'Controls the overall force applied to the liquid effect.',
    },
    {
      name: 'layerOneViscosity',
      value: "0.5",
      type: 'number',
      default: "0.5",
      description: 'Viscosity of the first liquid layer.',
    },
    {
      name: 'layerTwoViscosity',
      value: "0.4",
      type: 'number',
      default: "0.4",
      description: 'Viscosity of the second liquid layer.',
    },
    {
      name: 'layerOneMouseForce',
      value: "400",
      type: 'number',
      default: "400",
      description: 'Mouse force applied to the first liquid layer.',
    },
    {
      name: 'layerTwoMouseForce',
      value: "500",
      type: 'number',
      default: "500",
      description: 'Mouse force applied to the second liquid layer.',
    },
    {
      name: 'layerOneForceLimit',
      value: "1",
      type: 'number',
      default: "1",
      description: 'Force limit for the first liquid layer.',
    },
    {
      name: 'layerTwoForceLimit',
      value: "2",
      type: 'number',
      default: "2",
      description: 'Force limit for the second liquid layer.',
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={500} overflow="hidden">
          <LiquidButton
            primaryColor="#00d9ff"
            backgroundColor="#ff6cb1"
            secondaryColor="#ff9034"
            label="Hover me!"
            className="liquid-button"
            height={50}
            width={200}
            forceFactor={0.1}
            layerOneViscosity={0.4}
            layerTwoViscosity={0.5}
            layerOneMouseForce={400}
            layerTwoMouseForce={500}
            layerOneForceLimit={1}
            layerTwoForceLimit={2}
          />
        </Box>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={liquidButton} />
      </CodeTab>
    </TabbedLayout>
  );
};

export default TiltedCardDemo;
