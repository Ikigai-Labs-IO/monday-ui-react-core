import { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "../MenuItem";
import { SideNavigationBar } from "../SideNavigationBar";
import { SideNavigationBarHeader } from "../components/SideNavigationBarHeader";
import { SideNavigationBarFooter } from "../components/SideNavigationBarFooter";
import "./SideNavigationBar.stories.scss";
import { ScheduleIcon } from "../../../components/Icon/Icons/components/ScheduleIcon";
import { FacetsIcon } from "../../../components/Icon/Icons/components/FacetsIcon";
import { ConnectorIcon } from "../../../components/Icon/Icons/components/ConnectorIcon";
import { MarketPlaceIcon } from "../../../components/Icon/Icons/components/MarketPlaceIcon";
import { InProgressIcon } from "../../../components/Icon/Icons/components/InProgressIcon";
import { AppsIcon } from "../../../components/Icon/Icons/components/AppsIcon";
import { Dashboard, Settings } from "../../../components/Icon/Icons";
import { ApplicationIcon } from "../../../components/Icon/Icons/components/ApplicationIcon";
import { DashboardIcon } from "../../../components/Icon/Icons/components/DashboardIcon";
import { ChartAscendingIcon } from "../../../components/Icon/Icons/components/ChartAscendingIcon";
import { ReservedInstancesIcon } from "../../../components/Icon/Icons/components/ReservedInstancesIcon";
import { ArchiveIcon } from "../../../components/Icon/Icons/components/ArchiveIcon";
import { ResourceIcon } from "../../../components/Icon/Icons/components/ResourceIcon";
import { CloudIcon } from "../../../components/Icon/Icons/components/CloudIcon";

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
              <MenuItem caption="Apps" icon={AppsIcon} />
              <MenuItem caption="Schedules" icon={ScheduleIcon} />
              <MenuItem caption="Facets" icon={FacetsIcon} />
              <MenuItem caption="Connectors" icon={ConnectorIcon} />
              <MenuItem caption="Market Place" icon={MarketPlaceIcon} />
              <MenuItem caption="In Progress" icon={InProgressIcon} />
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
        <SideNavigationBar position="absolute" height="100%" expandable={false}>
          <div className="items-container">
            <ItemsSection>
              <MenuItem caption="Apps" icon={AppsIcon} />
              <MenuItem caption="Schedules" icon={ScheduleIcon} />
              <MenuItem caption="Facets" icon={FacetsIcon} />
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
              <MenuItem caption="Dashboard" icon={DashboardIcon} />
              <MenuItem caption="Applications" icon={ApplicationIcon} />
              <MenuItem caption="Settings" icon={Settings}>
                <ul
                  style={{
                    backgroundColor: "green",
                    padding: "0.5rem 1rem",
                    border: "solid 1px black"
                  }}
                >
                  <li>User settings</li>
                  <li>Application settings</li>
                </ul>
              </MenuItem>
            </ItemsSection>
            <ItemsSection>
              <MenuItem caption="KPIs" icon={ChartAscendingIcon} />
              <MenuItem caption="Reserved Instances" icon={ReservedInstancesIcon} />
              <MenuItem caption="Estate Records" icon={ResourceIcon} />
            </ItemsSection>
            <ItemsSection stickToBottom>
              <MenuItem caption="Archive" icon={ArchiveIcon} />
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
              <MenuItem caption="Dashboard" icon={Dashboard} />
              <MenuItem caption="Applications" icon={ApplicationIcon} />
              <MenuItem caption="Settings" icon={Settings}>
                <ul
                  style={{
                    backgroundColor: "green",
                    padding: "0.5rem 1rem",
                    border: "solid 1px black"
                  }}
                >
                  <li>User settings</li>
                  <li>Application settings</li>
                </ul>
              </MenuItem>
              <MenuItem caption="KPIs" icon={ChartAscendingIcon} />
              <MenuItem caption="Reserved Instances" icon={ReservedInstancesIcon} />
              <MenuItem caption="Estate Records" icon={ResourceIcon} />
              <MenuItem caption="Cloud Accounts" icon={CloudIcon} />
            </ItemsSection>
            <ItemsSection stickToBottom>
              <MenuItem caption="Archive" icon={ArchiveIcon} />
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
