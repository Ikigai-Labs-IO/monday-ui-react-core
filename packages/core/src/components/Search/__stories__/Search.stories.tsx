import { createComponentTemplate, StoryDescription } from "@ikigailabs/storybook-components";
import Search from "../Search";
import { useMemo } from "react";
import { DialogContentContainer, Dropdown } from "../../index";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Combobox from "../../Combobox/Combobox";
import "./Search.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Search,
  enumPropNamesArray: ["type", "size"],
  iconPropNamesArray: ["secondaryIconName", "iconName"]
});

const searchTemplate = createComponentTemplate(Search);

export default {
  title: "Inputs/Search",
  component: Search,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: searchTemplate.bind({}),
  name: "Overview",

  args: {
    placeholder: "Search...",
    wrapperClassName: "monday-storybook-search_size"
  }
};

export const Sizes = {
  render: () => (
    <div className="monday-storybook-search_box">
      <Search placeholder="Small" />
      <Search placeholder="Medium" size={Search.sizes.MEDIUM} />
      <Search placeholder="Large" size={Search.sizes.LARGE} />
    </div>
  ),

  name: "Sizes"
};

export const DisabledSearchFields = {
  render: () => (
    <div className="monday-storybook-search_box">
      <Search placeholder="Small" disabled />
      <Search placeholder="Medium" size={Search.sizes.MEDIUM} disabled />
      <Search placeholder="Large" size={Search.sizes.LARGE} disabled />
    </div>
  ),

  name: "Disabled Search Fields"
};

export const LabelPositions = {
  render: () => (
    <div className="monday-storybook-search_box">
      <Search placeholder="Placeholder text..." title="Label" labelPosition="left" />
      <Search placeholder="Placeholder text..." title="Label" />
    </div>
  ),

  name: "Label Positions"
};

export const SearchFieldWithTokens = {
  render: () => {
    const options = useMemo(
      () => [
        {
          value: "Rotem",
          label: "Rotem Dekel"
        },
        {
          value: "Hadas",
          label: "Hadas Farhi"
        },
        {
          value: "Netta",
          label: "Netta Muller"
        },
        {
          value: "Dor",
          label: "Dor Yehuda"
        }
      ],
      []
    );

    const dropdownProps = {
      placeholder: "Single line multi state",
      defaultValue: [options[0]],
      options: { options },
      multi: true
    }

    return (
      <StoryDescription description="Single line" vertical>
        <div
          style={{
            width: "400px"
          }}
        >
          <Dropdown {...(dropdownProps) as any} />
        </div>
      </StoryDescription>
    );
  },

  name: "Search field with Tokens",
  parameters: {
    docs: {
      story: {
        height: "200px"
      }
    }
  }
};

export const FilterInCombobox = {
  render: () => {
    const option = [
      {
        id: "1",
        label: "Cheese Cake"
      },
      {
        id: "2",
        label: "Muffin"
      },
      {
        id: "3",
        label: "Cookie"
      },
      {
        id: "4",
        label: "Cup cake"
      },
      {
        id: "5",
        label: "Banana lottie"
      }
    ];

    return (
      <DialogContentContainer className="monday-storybook-search_wrapper">
        <Combobox
          placeholder="Placeholder text here"
          options={option}
          size={Combobox.sizes.SMALL}
          optionLineHeight={28}
        />
      </DialogContentContainer>
    );
  },

  name: "Filter in combobox"
};
