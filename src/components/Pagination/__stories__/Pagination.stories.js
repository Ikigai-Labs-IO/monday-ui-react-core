import { ExtendedPaginationBox as Pagination } from "../Pagination";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { PAGINATION_SIZES } from "../PaginationConstants";

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

export const Variants = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "var(--spacing-xxl)" }}>
      <Pagination count={400} from={15} size={20} setPage={() => undefined} setSize={() => undefined} />
      <Pagination count={400} from={25} size={20} setPage={() => undefined} setSize={() => undefined} isItemPerPage />
    </div>
  ),

  name: "Variants"
};

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "var(--spacing-xxl)" }}>
      <Pagination
        count={400}
        from={0}
        size={20}
        setPage={() => undefined}
        setSize={() => undefined}
        paginationSizes={PAGINATION_SIZES.SMALL}
      />
      <Pagination count={400} from={0} size={20} setPage={() => undefined} setSize={() => undefined} />
      <Pagination
        count={400}
        from={0}
        size={20}
        setPage={() => undefined}
        setSize={() => undefined}
        paginationSizes={PAGINATION_SIZES.LARGE}
      />
    </div>
  ),

  name: "Sizes"
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
