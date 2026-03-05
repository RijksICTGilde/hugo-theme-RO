import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "MoxCSS/Atoms/Typography/TextBlock",
  tags: ["autodocs"],
  args: {},
  parameters: {
    docs: {
      source: {
        source: {
          type: "dynamic",
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <style></style>
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <section>
        <p className="mox-text-block" style={{ borderBlock: "1px dashed red" }}>
          Deze tekst is nu het formaat 'md' (dit groeit/krimpt mee met de
          schermgrootte). Dit is wat text waar de text-box getrimmed is tot de
          maat van een hoofdletter (zie de rode lijnen). Voor de redenen om dit
          te doen, zie het hoofdstukje{" "}
          <a
            href="/?path=/docs/moxcss-text-box-trim--docs"
            className="mox-underline-underline"
          >
            Text-box trim.
          </a>
        </p>
      </section>
    );
  },
};
