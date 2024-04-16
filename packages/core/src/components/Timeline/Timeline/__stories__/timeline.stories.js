import Timeline from "../Timeline";
import { createStoryMetaSettingsDecorator } from "../../../../storybook";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Timeline,
  enumPropNamesArray: ["title", "user", "date"]
});

export default {
  title: "Data display/Timeline",
  component: Timeline,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const timelineItems = [
  {
    title: "Flow started",
    user: "Thomas Finster",
    date: "12/5/2020 at 12:15"
  },
  {
    title: "Name changed",
    user: "Thomas Finster",
    date: "12/5/2020 at 12:15"
  },
  {
    title: "Edit made",
    user: "Alex Hales",
    date: "17/8/2020 at 13:15"
  },
  {
    title: "App created",
    user: "Thomas Finster",
    date: "11/8/2020 at 05:05"
  }
];

export const Overview = {
  render: () => <Timeline items={timelineItems.slice(1, 3)} />,

  name: "Overview"
};

export const TimelineItems = {
  render: () => <Timeline items={timelineItems} />,

  name: "Timeline Items"
};
