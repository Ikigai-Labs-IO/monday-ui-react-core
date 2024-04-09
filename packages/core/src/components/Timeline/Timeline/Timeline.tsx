import React from "react";
import styles from './Timeline.module.scss'
import TimelineRow from "../TimelineRow/TimelineRow";

interface TimelineItem {
  title: string;
  user: string;
  date: string | Date;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <TimelineRow
          key={index}
          title={item.title}
          user={item.user}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Timeline;
