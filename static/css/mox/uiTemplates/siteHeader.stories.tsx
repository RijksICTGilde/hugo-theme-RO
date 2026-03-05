import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "MoxCSS/Templates/SiteHeader",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 170,
      },
      description: {
        component: `Een site-header voor Rijksoverheid websites. Het lint is 48px breed, zoals beschreven in de Rijkshuisstijl.
          
          Bekijk de full-screen versie door op de rechterbovenknop te klikken: ↗️`,
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
      <div className="mox-page-grid">
        <div className="mox-grid-item mox-gridColumn-page">
          <div className="mox-box mox-paddingBlockEnd-md">
            <div className="mox-grid mox-gridTemplateColumns-1fr-auto-1fr@mobileMin mox-gridTemplateColumns-1fr@mobileMax mox-justifyContent-center@mobileMax mox-alignItems-center mox-gap-2xs">
              <div className="mox-box mox-justifySelf-start@mobileMin mox-justifySelf-center@mobileMax mox-display-contents@mobileMax mox-order-auto@mobileMin mox-order-1@mobileMax"></div>
              <div className="mox-box mox-justifySelf-center mox-order-auto@mobileMin mox-order-0@mobileMax">
                <img
                  className="mox-image mox-site-header-logo-rijksoverheid mox-alignSelf-start"
                  alt="Rijkslint"
                  src="/moza-mox-nlds/public/logo-rijksoverheid.svg"
                />
              </div>
              <div className="mox-box mox-order-auto@mobileMin mox-order-2@mobileMax mox-justifySelf-start@mobileMin mox-justifySelf-center@mobileMax mox-display-contents@mobileMax"></div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
