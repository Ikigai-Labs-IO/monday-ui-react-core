import Flex from "../../Flex/Flex";
import Chips from "../Chips";
import Text from "../../Text/Text";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "storybook-components";
import Search from "../../Search/Search";
import Avatar from "../../Avatar/Avatar";
import DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";
import { Email } from "../../Icon/Icons";
import person1 from "./assets/person1.png";
import rotem from "./assets/rotem.png";
import { NOOP } from "../../../utils/function-utils";
import styles from "./chips.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Chips,
  enumPropNamesArray: ["color"],
  iconPropNamesArray: ["rightIcon", "leftIcon"],
  actionPropsArray: ["onDelete", "onMouseDown", "onClick"]
});

const chipsTemplate = createComponentTemplate(Chips);

export default {
  title: "Data display/Chips",
  component: Chips,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: chipsTemplate.bind({}),
  name: "Overview",

  args: {
    label: "label",
    onMouseDown: undefined,
    onClick: undefined
  }
};

export const ChipsWithReadOnlyState = {
  render: () => <Chips label="Read only chip" readOnly />,
  name: "Chips with read only state"
};

export const ChipsWithIcons = {
  render: () => (
    <>
      <Chips label="Chip with left icon" leftIcon={Email} />
      <Chips label="Chip with right icon" rightIcon={Email} />
    </>
  ),
  name: "Chips with icons"
};

export const ChipsWithAvatars = {
  render: () => (
    <>
      <Chips label="Chip with left avatar" leftAvatar={person1} />
      <Chips label="Chip with right avatar" rightAvatar={person1} />
    </>
  ),
  name: "Chips with avatars"
};

export const Themes = {
  render: () => (
    <>
      <Chips label="This is a long chip" />
      <Chips label="Error Chip" color={Chips.colors.Error} />
    </>
  ),
  name: "Themes"
};

export const DisabledChips = {
  render: () => {
    return (
      <Flex direction={Flex.directions.ROW} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>
        <Chips label="Disabled" disabled />
        <Chips label="Disabled error chips" color={Chips.colors.Error} disabled />
      </Flex>
    );
  },

  name: "Disabled Chips"
};

export const ChipsGroup = {
  render: () => {
    return (
      <Flex direction={Flex.directions.ROW} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>
        <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.LARGE} align={Flex.align.START}>
          <Flex direction={Flex.directions.ROW} gap={Flex.gaps.XS} align={Flex.align.START}>
            <Chips label="label" />
          </Flex>
          <Flex direction={Flex.directions.ROW} gap={Flex.gaps.XS} align={Flex.align.START}>
            <Chips label="label" />
            <Chips label="label" />
          </Flex>
          <Flex direction={Flex.directions.ROW} gap={Flex.gaps.XS} align={Flex.align.START}>
            <Chips label="label" />
            <Chips label="label" />
            <Chips label="label" />
          </Flex>
          <Flex direction={Flex.directions.ROW} gap={Flex.gaps.XS} align={Flex.align.START}>
            <Chips label="label" />
            <Chips label="label" />
            <Chips label="label" />
            <Chips label="label" />
          </Flex>
        </Flex>
        <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>
          <Chips label="label" color={Chips.colors.Error} />
        </Flex>
        <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>
          <Chips label="label" color={Chips.colors.Error} />
          <Chips label="label" color={Chips.colors.Error} />
        </Flex>
        <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>
          <Chips label="label" color={Chips.colors.Error} />
          <Chips label="label" color={Chips.colors.Error} />
          <Chips label="label" color={Chips.colors.Error} />
        </Flex>
        <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>
          <Chips label="label" color={Chips.colors.Error} />
          <Chips label="label" color={Chips.colors.Error} />
          <Chips label="label" color={Chips.colors.Error} />
          <Chips label="label" color={Chips.colors.Error} />
        </Flex>
      </Flex>
    );
  },

  name: "Chips group"
};

export const Clickable = {
  render: () => {
    return (
      <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.LARGE} align={Flex.align.START}>
        <Flex direction={Flex.directions.ROW} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>
          <Chips label="Clickable default chip" readOnly onClick={NOOP} />
          <Chips label="Clickable removable chip" onClick={NOOP} />
        </Flex>
        <Flex direction={Flex.directions.ROW} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>
          <Chips label="Clickable error chip" readOnly onClick={NOOP} color={Chips.colors.Error} />
          <Chips label="Clickable removable chip" onClick={NOOP} color={Chips.colors.Error} />
        </Flex>
      </Flex>
    );
  },

  name: "Clickable"
};

export const ChipsInAPersonPickerComboBox = {
  render: () => (
    <DialogContentContainer className={styles.searchBar}>
      <Search placeholder="Search names, positions, or a team" />
      <Flex align={Flex.align.CENTER} justify={Flex.justify.CENTER}>
        <Chips label="Esther Schanler" leftAvatar={person1} />
        <Chips label="Rotem Dekel" leftAvatar={rotem} />
      </Flex>
      <Text type={Text.types.TEXT2} className={styles.lable}>
        Suggested people
      </Text>
      <div className={styles.search}>
        <Flex align={Flex.align.CENTER} justify={Flex.justify.CENTER} key="cont-1">
          <Avatar size={Avatar.sizes.SMALL} src={person1} type={Avatar.types.IMG} />
          <Text type={Text.types.TEXT2} className={styles.name}>
            May Kishon <span>(UX/UI Product Designer)</span>
          </Text>
        </Flex>
        <Flex align={Flex.align.CENTER} justify={Flex.justify.CENTER} key="cont-2">
          <Avatar
            size={Avatar.sizes.SMALL}
            backgroundColor={Avatar.colors.DARK_PURPLE}
            text="LC"
            type={Avatar.types.TEXT}
          />
          <Text type={Text.types.TEXT2} className={styles.name}>
            Liron Cohen <span>(Customer Experience)</span>
          </Text>
        </Flex>
        <Flex align={Flex.align.CENTER} justify={Flex.justify.CENTER} key="cont-3">
          <Avatar size={Avatar.sizes.SMALL} text="AL" type={Avatar.types.TEXT} />
          <Text type={Text.types.TEXT2} className={styles.name}>
            Amanda Lawrence <span>(Customer Experience Designer)</span>
          </Text>
        </Flex>
        <Flex align={Flex.align.CENTER} justify={Flex.justify.CENTER} key="cont-4">
          <Avatar size={Avatar.sizes.SMALL} text="DY" type={Avatar.types.TEXT} backgroundColor={Avatar.colors.PEACH} />
          <Text type={Text.types.TEXT2} className={styles.name}>
            Dor Yehuda <span>(Customer Experience Designer)</span>
          </Text>
        </Flex>
      </div>
    </DialogContentContainer>
  ),

  name: "Chips in a person picker combo box"
};
