import { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "../MenuItem";
import { SideNavigationBar } from "../SideNavigationBar";
import { SideNavigationBarHeader } from "../components/SideNavigationBarHeader";
import { SideNavigationBarFooter } from "../components/SideNavigationBarFooter";
import "./SideNavigationBar.stories.scss";
import { Settings, CustomIcon } from "../../../components/Icon/Icons";

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
              <MenuItem caption="Apps" icon={()=> <CustomIcon name="apps"/>} />
              <MenuItem caption="Schedules" icon={()=> <CustomIcon name="schedule"/>} />
              <MenuItem caption="Facets" icon={()=> <CustomIcon name="facets"/>} />
              <MenuItem caption="Connectors" icon={()=> <CustomIcon name="connector"/>} />
              <MenuItem caption="Market Place" icon={()=> <CustomIcon name="marketPlace"/>} />
              <MenuItem caption="In Progress" icon={()=> <CustomIcon name="inProgress"/>} />
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
              <MenuItem caption="Apps" icon={()=> <CustomIcon name="apps"/>} />
              <MenuItem caption="Schedules" icon={()=> <CustomIcon name="schedule"/>} />
              <MenuItem caption="Facets" icon={()=> <CustomIcon name="facets"/>} />
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
              <MenuItem caption="Dashboard" icon={()=> <CustomIcon name="dashboard"/>} />
              <MenuItem caption="Applications" icon={()=> <CustomIcon name="application"/>} />
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
              <MenuItem caption="KPIs" icon={()=> <CustomIcon name="chartAscending"/>} />
              <MenuItem caption="Reserved Instances" icon={()=> <CustomIcon name="reservedInstances"/>} />
              <MenuItem caption="Estate Records" icon={()=> <CustomIcon name="resource"/>} />
            </ItemsSection>
            <ItemsSection stickToBottom>
              <MenuItem caption="Archive" icon={()=> <CustomIcon name="archive"/>} />
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
              <MenuItem caption="Dashboard" icon={()=> <CustomIcon name="dashboard"/>} />
              <MenuItem caption="Applications" icon={()=> <CustomIcon name="application"/>} />
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
              <MenuItem caption="KPIs" icon={()=> <CustomIcon name="chartAscending"/>} />
              <MenuItem caption="Reserved Instances" icon={()=> <CustomIcon name="reservedInstances"/>} />
              <MenuItem caption="Estate Records" icon={()=> <CustomIcon name="resource"/>} />
              <MenuItem caption="Cloud Accounts" icon={()=> <CustomIcon name="cloud"/>} />
            </ItemsSection>
            <ItemsSection stickToBottom>
              <MenuItem caption="Archive" icon={()=> <CustomIcon name="archive"/>} />
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
