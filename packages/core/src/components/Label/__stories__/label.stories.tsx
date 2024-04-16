import Label from "../Label";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { NOOP } from "../../../utils/function-utils";
import { createComponentTemplate, MultipleStoryElementsWrapper } from "storybook-components";
import "./label.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Label,
  enumPropNamesArray: ["kind", "color"]
});

export default {
  title: "Data display/Label",
  component: Label,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const labelTemplate = createComponentTemplate(Label);

export const Overview = {
  render: labelTemplate.bind({}),
  name: "Overview",
  args: {
    text: "label"
  },
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const Kinds = {
  render: () => (
    <>
      <div className="monday-storybook-label_group monday-storybook-label_states-gap">
        <Label text="label" />
        Fill
      </div>
      <div className="monday-storybook-label_group monday-storybook-label_states-gap">
        <Label text="label" kind={Label.kinds.LINE} />
        Outline
      </div>
    </>
  ),

  name: "Kinds",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const Colors = {
  render: () => (
    <>
      <div className="monday-storybook-label_group">
        <Label text="label" />
        <Label text="label" kind={Label.kinds.LINE} />
      </div>
      <div className="monday-storybook-label_group">
        <Label text="label" color={Label.colors.NEGATIVE} />
        <Label text="label" color={Label.colors.NEGATIVE} kind={Label.kinds.LINE} />
      </div>
      <div className="monday-storybook-label_group">
        <Label text="label" color={Label.colors.POSITIVE} />
        <Label text="label" color={Label.colors.POSITIVE} kind={Label.kinds.LINE} />
      </div>
      <div className="monday-storybook-label_group">
        <Label text="label" color={Label.colors.DARK} />
        <Label text="label" color={Label.colors.DARK} kind={Label.kinds.LINE} />
      </div>
    </>
  ),

  name: "Colors",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const Clickable = {
  render: () => (
    <>
      <div className="monday-storybook-label_group monday-storybook-label_states-gap">
        <Label text="label" onClick={NOOP} />
      </div>
      <div className="monday-storybook-label_group monday-storybook-label_states-gap">
        <Label text="label" kind={Label.kinds.LINE} onClick={NOOP} />
      </div>
    </>
  ),

  name: "Clickable",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const SecondaryLabel = {
  render: () => (
    <MultipleStoryElementsWrapper className="monday-storybook-label_column-block">
      <div className="monday-storybook-label_article">
        <h5 className="monday-storybook-label_title">Gannt</h5>
        <Label text="label" kind={Label.kinds.LINE} />
        <p>Plan, track and present your projects visually using the Gannt chart</p>
      </div>
      <div className="monday-storybook-label_article">
        <h5 className="monday-storybook-label_title">Apps</h5>
        <Label text="label" kind={Label.kinds.LINE} />
        <p>Enhance your dashboard with widgets built on the monday apps framework</p>
      </div>
    </MultipleStoryElementsWrapper>
  ),

  name: "Secondary label",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const Sizes = {
  render: () => (
    <>
      <div className="monday-storybook-label_group">
        <Label text="label" size={Label.size.TINY} />
        <Label text="label" kind={Label.kinds.LINE} size={Label.size.TINY} />
      </div>
      <div className="monday-storybook-label_group">
        <Label text="label" size={Label.size.SMALL} />
        <Label text="label" kind={Label.kinds.LINE} size={Label.size.SMALL} />
      </div>
      <div className="monday-storybook-label_group">
        <Label text="label" />
        <Label text="label" kind={Label.kinds.LINE} />
      </div>
      <div className="monday-storybook-label_group">
        <Label text="label" size={Label.size.LARGE} />
        <Label text="label" kind={Label.kinds.LINE} size={Label.size.LARGE} />
      </div>
    </>
  ),

  name: "Sizes",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const BorderRadius = {
  render: () => (
    <>
      <div className="monday-storybook-label_group">
        <Label text="label" size={Label.size.LARGE} />
        <Label text="label" size={Label.size.LARGE} kind={Label.kinds.LINE} />
      </div>
      <div className="monday-storybook-label_group">
        <Label text="label" size={Label.size.LARGE} isCornersRounded />
        <Label text="label" kind={Label.kinds.LINE} size={Label.size.LARGE} isCornersRounded />
      </div>
    </>
  ),

  name: "Border Radius",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};
