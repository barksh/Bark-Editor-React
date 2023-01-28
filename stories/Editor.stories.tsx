/**
 * @author WMXPY
 * @namespace Editor
 * @description Editor
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BarkEditor } from "../src";

export default {
  title: "Editor",
  component: BarkEditor,
} as ComponentMeta<typeof BarkEditor>;

const Template: ComponentStory<typeof BarkEditor> = (args: any) => {

  return (
    <BarkEditor>
      {args.children}
    </BarkEditor>);
};

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
};
