import { ExtendedPaginationBox as Pagination } from "../Pagination";
import { createStoryMetaSettingsDecorator } from "../../../storybook";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Pagination,
  enumPropNamesArray: ["count", "size", "from"]
});

export default {
  title: "Layout/Pagination",
  component: Pagination,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const paginationTemplate = args => <Pagination {...args} />;

export const Overview = {
  render: paginationTemplate.bind({}),
  name: "Overview",
  args: {
    count: 400,
    from: 0,
    size: 10,
    setPage: () => undefined,
    setSize: () => undefined
  }
};

export const FirstPage = {
  render: () => <Pagination count={400} from={0} size={20} setPage={() => undefined} setSize={() => undefined} />,

  name: "first-page"
};

export const SecondPage = {
  render: () => <Pagination count={400} from={20} size={20} setPage={() => undefined} setSize={() => undefined} />,

  name: "second-page"
};

export const Middle = {
  render: () => <Pagination count={400} from={240} size={20} setPage={() => undefined} setSize={() => undefined} />,

  name: "middle"
};

export const SecondToLastPage = {
  render: () => <Pagination count={400} from={360} size={20} setPage={() => undefined} setSize={() => undefined} />,

  name: "second-to-last-page"
};

export const LastPage = {
  render: () => <Pagination count={400} from={380} size={20} setPage={() => undefined} setSize={() => undefined} />,

  name: "last-page"
};

export const EdgeCases = {
  render: () => <Pagination count={400} from={80} size={20} setPage={() => undefined} setSize={() => undefined} />,

  name: "edge-cases"
};

export const Short = {
  render: () => <Pagination count={60} from={0} size={20} setPage={() => undefined} setSize={() => undefined} />,

  name: "short"
};

export const Small = {
  render: () => <Pagination small count={400} from={0} size={20} setPage={() => undefined} setSize={() => undefined} />,

  name: "small"
};
