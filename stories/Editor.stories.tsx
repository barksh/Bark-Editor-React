/**
 * @author WMXPY
 * @namespace Editor
 * @description Editor
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { BarkEditor } from "../src";

export default {
  title: "Editor",
  component: BarkEditor,
} as Meta<typeof BarkEditor>;

const Template: StoryFn<typeof BarkEditor> = (args: any) => {

  return (
    <BarkEditor>
      {args.children}
    </BarkEditor>);
};

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
};
