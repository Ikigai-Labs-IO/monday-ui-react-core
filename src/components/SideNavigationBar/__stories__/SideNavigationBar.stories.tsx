import { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "../MenuItem";
import { SideNavigationBar } from "../SideNavigationBar";
import { SideNavigationBarHeader } from "../components/SideNavigationBarHeader";
import { SideNavigationBarFooter } from "../components/SideNavigationBarFooter";
import "./SideNavigationBar.stories.scss";

const meta: Meta = {
  title: "Components/SideNavigationBar",
  component: SideNavigationBar
};

export default meta;

interface ItemsSectionProps {
  stickToBottom?: boolean;
  children?: React.ReactNode;
}

const ItemsSection: React.FC<ItemsSectionProps> = ({ stickToBottom, children }) => {
  return <div className={`items-section ${stickToBottom ? "stick-to-bottom" : ""}`}>{children}</div>;
};

export const Default: StoryObj = {
  render: () => {
    return (
      <div
        style={{
          height: "800px",
          position: "relative"
        }}
      >
        <SideNavigationBar
          header={<SideNavigationBarHeader title="Builder" />}
          footer={<SideNavigationBarFooter />}
          position="absolute"
          height="100%"
        >
          <div className="items-container">
            <ItemsSection>
              <MenuItem caption="Apps" iconName="apps" />
              <MenuItem caption="Schedules" iconName="schedule" />
              <MenuItem caption="Facets" iconName="facets" />
              <MenuItem caption="Connectors" iconName="connector" />
              <MenuItem caption="Market Place" iconName="marketPlace" />
              <MenuItem caption="In Progress" iconName="inProgress" />
            </ItemsSection>
          </div>
        </SideNavigationBar>
      </div>
    );
  },

  name: "default",
  parameters: {
    docs: {
      story: {
        height: "450px"
      }
    }
  }
};

export const NonExpandable: StoryObj = {
  render: () => {
    return (
      <div
        style={{
          height: "400px",
          position: "relative"
        }}
      >
        <SideNavigationBar position="absolute" height="100%">
          <div className="items-container">
            <ItemsSection>
              <MenuItem caption="Apps" iconName="apps" iconSize="20" />
              <MenuItem caption="Schedules" iconName="schedule" iconSize="20" />
              <MenuItem caption="Facets" iconName="facets" iconSize="20" />
            </ItemsSection>
          </div>
        </SideNavigationBar>
      </div>
    );
  },

  name: "non-expandable",
  parameters: {
    docs: {
      story: {
        height: "450px"
      }
    }
  }
};

export const MultipleSectionsWithStickToBottom: StoryObj = {
  render: () => {
    return (
      <div
        style={{
          height: "550px",
          position: "relative"
        }}
      >
        <SideNavigationBar position="absolute" height="100%">
          <div className="items-container">
            <ItemsSection>
              <MenuItem caption="Dashboard" iconName="dashboard" iconSize="30" />
              <MenuItem caption="Applications" iconName="application" iconSize="30" />
            </ItemsSection>
            <ItemsSection>
              <MenuItem caption="KPIs" iconName="chartAscending" iconSize="30" />
              <MenuItem caption="Reserved Instances" iconName="reservedInstances" iconSize="30" />
              <MenuItem caption="Estate Records" iconName="resource" iconSize="30" />
            </ItemsSection>
            <ItemsSection stickToBottom>
              <MenuItem caption="Archive" iconName="archive" iconSize="30" />
            </ItemsSection>
          </div>
        </SideNavigationBar>
      </div>
    );
  },

  name: "multiple-sections-with-stick-to-bottom",
  parameters: {
    docs: {
      story: {
        height: "55px"
      }
    }
  }
};

export const Scrollable: StoryObj = {
  render: () => {
    return (
      <div
        style={{
          height: "400px",
          position: "relative"
        }}
      >
        <SideNavigationBar position="absolute" height="100%">
          <div className="items-container">
            <ItemsSection>
              <MenuItem caption="Dashboard" iconName="dashboard" iconSize="25" />
              <MenuItem caption="Applications" iconName="application" iconSize="25" />
              <MenuItem caption="KPIs" iconName="chartAscending" iconSize="25" />
              <MenuItem caption="Reserved Instances" iconName="reservedInstances" iconSize="25" />
              <MenuItem caption="Estate Records" iconName="resource" iconSize="25" />
              <MenuItem caption="Cloud Accounts" iconName="cloud" iconSize="25" />
            </ItemsSection>
            <ItemsSection stickToBottom>
              <MenuItem caption="Archive" iconName="archive" iconSize="25" />
            </ItemsSection>
          </div>
        </SideNavigationBar>
      </div>
    );
  },

  name: "scrollable",
  parameters: {
    docs: {
      story: {
        height: "450px"
      }
    }
  }
};
