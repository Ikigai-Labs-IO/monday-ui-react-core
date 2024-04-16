import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Container, Row, Col } from "react-awesome-styled-grid";
import { useDisclosure } from "../hooks/useDisclosure";
import Button from "../../Button/Button";
import Text from "../../Text/Text";
import { Panel, PanelHeader, PanelFooter } from "../Panel";
import { PANEL_SIZES } from "../PanelConstants";
import { createComponentTemplate } from "@ikigailabs/storybook-components";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Panel,
  enumPropNamesArray: [
    "title",
    "caption",
    "isOpen",
    "side",
    "width",
    "reverse",
    "onClick",
    "footer",
    "header",
    "headerStyles",
    "contentStyles"
  ],
  actionPropsArray: ["onClick"]
});

export default {
  title: "Layout/Panel",
  component: Panel,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const panelTemplate = createComponentTemplate(Panel);

export const Overview = {
  render: panelTemplate.bind({}),
  name: "Overview"
};

export const Default = {
  render: () => {
    const { isOpen, open, close } = useDisclosure();

    return (
      <Container>
        <Row justify="center">
          <Button onClick={open}>Click button to open sidebar</Button>
        </Row>
        <Panel
          caption="Default sidebar caption"
          isOpen={isOpen}
          onClick={close}
          header={<PanelHeader title="Title" onClick={close} />}
        >
          Panel Content
        </Panel>
      </Container>
    );
  },

  name: "default",
  parameters: {
    docs: {
      story: {
        height: "400px"
      }
    }
  }
};

export const Footer = {
  render: () => {
    const { isOpen, open, close } = useDisclosure();

    return (
      <Container>
        <Row justify="center">
          <Button onClick={open}>Click button to open sidebar</Button>
        </Row>
        <Panel
          isOpen={isOpen}
          header={<PanelHeader title="Title" onClick={close} />}
          footer={<PanelFooter />}
          onClick={close}
        >
          Panel Content
        </Panel>
      </Container>
    );
  },

  name: "footer",
  parameters: {
    docs: {
      story: {
        height: "400px"
      }
    }
  }
};

export const Side = {
  render: () => {
    const { isOpen: isOpenLeft, open: openLeft, close: closeLeft } = useDisclosure();
    const { isOpen: isOpenRight, open: openRight, close: closeRight } = useDisclosure();

    return (
      <Container>
        <Row justify="center">
          <Text type={Text.types.TEXT1} element="div">
            Click button to open sidebar.
          </Text>
        </Row>
        <Row justify="space-around">
          <Col md={2}>
            <Button onClick={openLeft}>← Left sidebar</Button>
          </Col>
          <Col md={2}>
            <Button onClick={openRight}>Right Panel →</Button>
          </Col>
        </Row>
        <Panel isOpen={isOpenRight} onClick={closeRight} header={<PanelHeader title="Title" onClick={closeRight} />}>
          Panel Content
        </Panel>
        <Panel
          side="onLeft"
          isOpen={isOpenLeft}
          onClick={closeLeft}
          header={<PanelHeader title="Title" onClick={closeLeft} />}
        >
          Panel Content
        </Panel>
      </Container>
    );
  },

  name: "side",
  parameters: {
    docs: {
      story: {
        height: "400px"
      }
    }
  }
};

export const SmallPanel = {
  render: () => {
    const { isOpen: isOpenLeftSmallPanel, open: openLeftSmallPanel, close: closeLeftSmallPanel } = useDisclosure();
    const { isOpen: isOpenRightSmallPanel, open: openRightSmallPanel, close: closeRightSmallPanel } = useDisclosure();

    return (
      <Container>
        <Row justify="space-around">
          <Col md={2}>
            <Button onClick={openLeftSmallPanel}>← Small Panel(on Left)</Button>
          </Col>
          <Col md={2}>
            <Button onClick={openRightSmallPanel}>Small Panel(on Right) →</Button>
          </Col>
        </Row>

        <Panel
          size={PANEL_SIZES.SMALL}
          side="onLeft"
          header={<PanelHeader title="Title" onClick={closeLeftSmallPanel} />}
          footer={<PanelFooter />}
          isOpen={isOpenLeftSmallPanel}
          onClick={closeLeftSmallPanel}
        >
          Small panel content on left.
        </Panel>
        <Panel
          size={PANEL_SIZES.SMALL}
          header={<PanelHeader title="Title" onClick={closeRightSmallPanel} />}
          footer={<PanelFooter />}
          isOpen={isOpenRightSmallPanel}
          onClick={closeRightSmallPanel}
        >
          Small panel content on right.
        </Panel>
      </Container>
    );
  },

  name: "SmallPanel",
  parameters: {
    docs: {
      story: {
        height: "300px"
      }
    }
  }
};

export const MediumPanel = {
  render: () => {
    const { isOpen: isOpenLeftMediumPanel, open: openLeftMediumPanel, close: closeLeftMediumPanel } = useDisclosure();
    const {
      isOpen: isOpenRightMediumPanel,
      open: openRightMediumPanel,
      close: closeRightMediumPanel
    } = useDisclosure();

    return (
      <Container>
        <Row justify="space-around">
          <Col md={2}>
            <Button onClick={openLeftMediumPanel}>← Medium Panel(on Left)</Button>
          </Col>
          <Col md={2}>
            <Button onClick={openRightMediumPanel}>Medium Panel(on Right) →</Button>
          </Col>
        </Row>

        <Panel
          size={PANEL_SIZES.MEDIUM}
          side="onLeft"
          header={<PanelHeader title="Title" onClick={closeLeftMediumPanel} />}
          footer={<PanelFooter />}
          isOpen={isOpenLeftMediumPanel}
          onClick={closeLeftMediumPanel}
        >
          Medium panel content on left.
        </Panel>
        <Panel
          size={PANEL_SIZES.MEDIUM}
          header={<PanelHeader title="Title" onClick={closeRightMediumPanel} />}
          footer={<PanelFooter />}
          isOpen={isOpenRightMediumPanel}
          onClick={closeRightMediumPanel}
        >
          Medium panel content on right.
        </Panel>
      </Container>
    );
  },

  name: "MediumPanel",
  parameters: {
    docs: {
      story: {
        height: "350px"
      }
    }
  }
};

export const LargePanel = {
  render: () => {
    const { isOpen: isOpenLeftLargePanel, open: openLeftLargePanel, close: closeLeftLargePanel } = useDisclosure();
    const { isOpen: isOpenRightLargePanel, open: openRightLargePanel, close: closeRightLargePanel } = useDisclosure();

    return (
      <Container>
        <Row justify="space-around">
          <Col md={2}>
            <Button onClick={openLeftLargePanel}>← Large Panel(on Left)</Button>
          </Col>
          <Col md={2}>
            <Button onClick={openRightLargePanel}>Large Panel(on Right) →</Button>
          </Col>
        </Row>

        <Panel
          size={PANEL_SIZES.LARGE}
          side="onLeft"
          header={<PanelHeader title="Title" onClick={closeLeftLargePanel} />}
          footer={<PanelFooter />}
          isOpen={isOpenLeftLargePanel}
          onClick={closeLeftLargePanel}
        >
          Large panel content on left.
        </Panel>
        <Panel
          size={PANEL_SIZES.LARGE}
          header={<PanelHeader title="Title" onClick={closeRightLargePanel} />}
          footer={<PanelFooter />}
          isOpen={isOpenRightLargePanel}
          onClick={closeRightLargePanel}
        >
          Large panel content on right.
        </Panel>
      </Container>
    );
  },

  name: "LargePanel",
  parameters: {
    docs: {
      story: {
        height: "400px"
      }
    }
  }
};
