import useVibeMediaQuery from "..";
import "../../__stories__/general-hooks-stories.scss";
import styles from "./useVibeMediaQuery.modules.scss";

export default {
  title: "Hooks/useVibeMediaQuery"
};

export const Overview = {
  render: () => {
    const currentSize = useVibeMediaQuery();
    return <div className={`hooks-reference-element ${styles.container}`}>{currentSize}</div>;
  },

  name: "Overview"
};
