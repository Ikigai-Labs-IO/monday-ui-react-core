import { PageHeader } from "../PageHeader";
import { createComponentTemplate } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import BreadcrumbItem from "../../BreadcrumbsBar/BreadcrumbItem/BreadcrumbItem";

const metaSettings = createStoryMetaSettingsDecorator({
  component: PageHeader,
  iconPropNamesArray: [],
  actionPropsArray: []
});

const textTemplate = createComponentTemplate(PageHeader);

export default {
  title: "Navigation/Page Header",
  component: PageHeader,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
};

export const Overview = {
  render: textTemplate.bind({}),
  name: "Overview",

  args: {
    children: "Title",
  },
};

export const Default = {
  render: () => <PageHeader text="Title" />,

  name: "Default"
};

export const WithDescription = {
  render: () => <PageHeader text="Title" isDescription description="Short description can go here..." />,

  name: "With Description"
};

export const WithBreadcrumb = {
  render: () => {
    const BreadcrumbsItems = [
      <BreadcrumbItem text="Tab" />,
      <BreadcrumbItem text="Tab" isCurrent />
    ]
    return (
      <PageHeader text="Title" isBreadcrumb BreadcrumbsItems={BreadcrumbsItems} />
    )
  },

  name: "With Breadcrumb"
};

export const WithBreadcrumbAndDescription = {
  render: () => {
    const BreadcrumbsItems = [
      <BreadcrumbItem text="Tab" />,
      <BreadcrumbItem text="Tab" isCurrent />
    ]
    return (
      <PageHeader text="Title" isDescription description="Short description can go here..." isBreadcrumb BreadcrumbsItems={BreadcrumbsItems} />
    )
  },

  name: "With Breadcrumb and Description"
};
