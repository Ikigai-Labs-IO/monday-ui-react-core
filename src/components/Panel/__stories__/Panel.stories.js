import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Container, Row, Col } from "react-awesome-styled-grid";
import { useDisclosure } from "../hooks/useDisclosure";
import Button from "../../Button/Button";
import Text from "../../Text/Text";
import { Panel, PanelHeader, PanelFooter } from "../Panel";
import { createComponentTemplate } from "vibe-storybook-components";

const metaSettings = createStoryMetaSettingsDecorator({
    component: Panel,
    enumPropNamesArray: ["title","caption","isOpen","side","width","reverse","onClick","footer","header","headerStyles","contentStyles"],
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
            title="Default sidebar"
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
          height: "450px"
        },
      },
    },
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
            title="Default sidebar"
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
          height: "450px",
        },
      },
    },
};

export const Side = {
    render: () => {
      const {
        isOpen: isOpenLeft,
        open: openLeft,
        close: closeLeft,
      } = useDisclosure();
  
      const {
        isOpen: isOpenRight,
        open: openRight,
        close: closeRight,
      } = useDisclosure();
  
      return (
        <Container>
          <Row justify="center">
            <Text type={Text.types.TEXT1} element="div">Click button to open sidebar.</Text>
          </Row>
          <Row justify="space-around">
            <Col md={2}>
              <Button onClick={openLeft}>← Left sidebar</Button>
            </Col>
            <Col md={2}>
              <Button onClick={openRight}>Right Panel →</Button>
            </Col>
          </Row>
          <Panel
            title="Default sidebar"
            isOpen={isOpenRight}
            onClick={closeRight}
            header={<PanelHeader title="Title" onClick={closeRight} />}
          >
            Panel Content
          </Panel>
          <Panel
            side="onLeft"
            title="Left sidebar"
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
          height: "450px",
        },
      },
    },
};
  
export const CustomWidth = {
    render: () => {
      const {
        isOpen: isOpenPercent,
        open: openPercent,
        close: closePercent,
      } = useDisclosure();
  
      const {
        isOpen: isOpenRem,
        open: openRem,
        close: closeRem,
      } = useDisclosure();
  
      const { isOpen: isOpenPx, open: openPx, close: closePx } = useDisclosure();
  
      return (
        <Container>
          <Row justify="space-around">
            <Col md={2}>
              <Button onClick={openPercent}>50% Panel</Button>
            </Col>
            <Col md={2}>
              <Button onClick={openRem}>50rem sidebar on Left</Button>
            </Col>
            <Col md={2}>
              <Button onClick={openPx}>700px sidebar</Button>
            </Col>
          </Row>
          <Panel
            title="Width: 50%"
            width="50%"
            header={<PanelHeader title="Title" onClick={closePercent} />}
            isOpen={isOpenPercent}
            onClick={closePercent}
          >
            Panel Content
          </Panel>
          <Panel
            title="Width: 50rem"
            width="50rem"
            side="onLeft"
            header={<PanelHeader title="Title" onClick={closeRem} />}
            isOpen={isOpenRem}
            onClick={closeRem}
          >
            Panel Content on Left
          </Panel>
          <Panel
            title="Width: 700px"
            width="700px"
            header={<PanelHeader title="Title" onClick={closePx} />}
            isOpen={isOpenPx}
            onClick={closePx}
          >
            Panel Content
          </Panel>
        </Container>
      );
    },
  
    name: "custom width",
    parameters: {
      docs: {
        story: {
          height: "450px",
        },
      },
    },
};
  