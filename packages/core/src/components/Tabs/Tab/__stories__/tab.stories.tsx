import { createComponentTemplate } from "vibe-storybook-components";
import Tab from "../../Tab/Tab";
import { Email } from "../../../Icon/Icons";
import styles from "../Tab.module.scss";

export default {
  title: "Navigation/Tabs/Tab",
  component: Tab
};

const tabTemplate = createComponentTemplate(Tab);

export const Overview = {
  render: tabTemplate.bind({}),
  args: {
    children: "Tab"
  },
  name: "Overview"
};

export const States = {
  render: () => (
    <>
      <Tab>Default</Tab>
      <Tab hover>Hover</Tab>
      <Tab active>Active</Tab>
      <Tab active hover>
        Active Hover
      </Tab>
      <Tab disabled>Disabled</Tab>
    </>
  ),

  name: "States"
};

export const Variants = {
  render: () => (
    <>
      <div className={styles.container}>
        <Tab>Tab</Tab>
        Text Only
      </div>
      <div className={styles.container}>
        <Tab icon={Email} />
        Icon Only
      </div>
      <div className={styles.container}>
        <Tab icon={Email}>Tab</Tab>
        Icon + Text
      </div>
    </>
  ),

  name: "Variants"
};

export const Icons = {
  render: () => (
    <>
      <div className={styles.container}>
        <Tab icon={Email} iconSide="left">
          Tab
        </Tab>
        Icon on left
      </div>
      <div className={styles.container}>
        <Tab icon={Email} iconSide="right">
          Tab
        </Tab>
        Icon on Right
      </div>
    </>
  ),

  name: "Icons"
};
