import EditableHeading from "../EditableHeading";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "@ikigailabs/storybook-components";
import { overviewPlaySuite } from "../__tests__/EditableHeading-interactions";
import styles from "./EditableHeading.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: EditableHeading,
  enumPropNamesArray: ["weight", "type"],
  actionPropsArray: ["onChange"]
});

export default {
  title: "Inputs/EditableHeading",
  component: EditableHeading,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const editableHeadingTemplate = createComponentTemplate(EditableHeading);

export const Overview = {
  render: editableHeadingTemplate.bind({}),
  name: "Overview",
  args: {
    value: "This heading is an editable heading",
    type: EditableHeading.types.H1
  },
  play: overviewPlaySuite
};

export const Types = {
  render: () => (
    <div className={styles.typesContainer}>
      <div className={styles.typeContainer}>
        <EditableHeading
          type={EditableHeading.types.H1}
          weight={EditableHeading.weights.LIGHT}
          value="H1 Light"
          className={styles.editableHeading}
        />
        <EditableHeading
          type={EditableHeading.types.H1}
          weight={EditableHeading.weights.NORMAL}
          value="H1 Normal"
          className={styles.editableHeading}
        />
        <EditableHeading
          type={EditableHeading.types.H1}
          weight={EditableHeading.weights.BOLD}
          value="H1 Bold"
          className={styles.editableHeading}
        />
      </div>
      <div className={styles.typeContainer}>
        <EditableHeading
          type={EditableHeading.types.H2}
          weight={EditableHeading.weights.LIGHT}
          value="H2 Light"
          className={styles.editableHeading}
        />
        <EditableHeading
          type={EditableHeading.types.H2}
          weight={EditableHeading.weights.NORMAL}
          value="H2 Normal"
          className={styles.editableHeading}
        />
        <EditableHeading
          type={EditableHeading.types.H2}
          weight={EditableHeading.weights.BOLD}
          value="H2 Bold"
          className={styles.editableHeading}
        />
      </div>
      <div className={styles.typeContainer}>
        <EditableHeading
          type={EditableHeading.types.H3}
          weight={EditableHeading.weights.LIGHT}
          value="H3 Light"
          className={styles.editableHeading}
        />
        <EditableHeading
          type={EditableHeading.types.H3}
          weight={EditableHeading.weights.NORMAL}
          value="H3 Normal"
          className={styles.editableHeading}
        />
        <EditableHeading
          type={EditableHeading.types.H3}
          weight={EditableHeading.weights.BOLD}
          value="H3 Bold"
          className={styles.editableHeading}
        />
      </div>
    </div>
  ),
  name: "Types"
};
