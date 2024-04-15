import { InformationBox } from "@ikigailabs/storybook-components";
import styles from "./animation-information-box.module.scss";

export const AnimationInformationBox = ({ videoSrc, title, description }) => {
  const AnimationInformationBoxVideo = <video className={styles.video} controls loop src={videoSrc} />;
  return <InformationBox component={AnimationInformationBoxVideo} title={title} description={description} />;
};
