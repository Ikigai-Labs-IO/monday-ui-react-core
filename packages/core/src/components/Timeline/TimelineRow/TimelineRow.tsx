import React from "react";
import Text from "../../Text/Text";
import Icon from "../../Icon/Icon";
import Flex from "../../Flex/Flex";
import styles from "./TimelineRow.module.scss";
import Bullet from "../../Icon/Icons/components/Bullet";
import { CustomIcon } from "../../../components/Icon/Icons";

interface TimelineRowProps {
  title: string;
  user: string;
  date: string | Date;
}

const TimelineRow: React.FC<TimelineRowProps> = ({
  title,
  user,
  date
}) => {
  const formattedDate =
    typeof date === "string" ? date : date.toLocaleDateString();

  return (
    <div className={styles.timeline_row}>
      <Flex align={Flex.align.START} gap={4}>
        <div>
          <Icon icon={Bullet} iconSize="30" />
        </div>
        <div className={styles.side_line}>
          <Flex align={Flex.align.CENTER} gap={3}>
            <CustomIcon name="success" iconSize="18" viewBox="0 -3 27 30" fillColor="var(--divider-selected)" />
            <Text
              type={Text.types.TEXT1}
              color={Text.colors.PRIMARY}
              weight={Text.weights.MEDIUM}
              style={{ fontSize: "15px" }}
            >
              {title}
            </Text>
          </Flex>
          <Flex
            direction={Flex.directions.ROW}
            align={Flex.align.START}
            gap={2}
          >
            <Text type={Text.types.TEXT2} style={{ fontSize: "12px", lineHeight: "15px", color: "var(--type-secondary)" }}>
              by
            </Text>
            <Text type={Text.types.TEXT2} className={styles.user_name}>
              {user}
            </Text>
          </Flex>
          <Text type={Text.types.TEXT2} style={{ fontSize: "12px", lineHeight: "15px", color: "var(--type-secondary)" }}>
            {formattedDate}
          </Text>
        </div>
      </Flex>
    </div>
  );
};

export default TimelineRow;
