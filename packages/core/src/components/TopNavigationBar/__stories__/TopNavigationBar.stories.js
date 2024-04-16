import { TopNavigationBar } from "../TopNavigationBar";
import { createComponentTemplate } from "storybook-components";

export default {
  title: "Navigation/TopNavigationBar",
  component: TopNavigationBar,
};

const TopNavigationBarTemplate = createComponentTemplate(TopNavigationBar);

export const Overview = {
  render: TopNavigationBarTemplate.bind({}),
  name: "Overview",
  args: {}
};

export const WithTrialModal = {
  render: () => <TopNavigationBar isTrial />,
  name: "With trial modal"
}

export const ProjectOnly = {
  render: () => <TopNavigationBar state={TopNavigationBar.states.PROJECT} />,
  name: "Project Only"
}

export const OrganizationOnly = {
  render: () => <TopNavigationBar state={TopNavigationBar.states.ORGANIZATION} />,
  name: "Organization Only"
}

export const ProjectAndOrganization = {
  render: () => <TopNavigationBar state={TopNavigationBar.states.BOTH} />,
  name: "Project and Organization"
}
