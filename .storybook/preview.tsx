import React from "react";
import * as VibeComponents from "../src/components/index";
import * as VibeComponentsNext from "../src/next";
import * as VibeIcons from "../src/components/Icon/Icons/index";
import { Preview } from "@storybook/react";
import isChromatic from "chromatic/isChromatic";
import { DocsContainer, DocsPage, Unstyled } from "@storybook/blocks";
import { withThemeByClassName } from "@storybook/addon-themes";
import {
  AnchorListItem,
  AlphaWarning,
  DeprecatedWarning,
  ComponentRules,
  DocFooter,
  Frame,
  FunctionArgument,
  FunctionArguments,
  Link,
  Paragraph,
  SectionName,
  Tip,
  Title,
  UnstyledList,
  UnstyledListItem,
  UsageGuidelines,
  withMemoryStats,
  RelatedComponent,
  MultipleStoryElementsWrapper,
  StorybookLink
} from "vibe-storybook-components";
import { ComponentNameDecorator, PropsTable, RelatedComponentsDecorator } from "../src/storybook";
import "monday-ui-style/dist/index.min.css";
import "vibe-storybook-components/dist/index.css";
import introCode from "../src/storybook/stand-alone-documentaion/playground/playground-helpers";
import ThemeProvider from "../src/components/ThemeProvider/ThemeProvider";
import '../src/styles/global.css';
import { palette } from "../src/styles/palette";

const fontLoader = async () => ({
  fonts: await document.fonts.ready // Fixing Chromatic tests flakiness - taking snapshots after fonts are loaded
});

const colorThemeConfig = {
  light: {
    'brand-colors': {
      'brand-color': palette.purple.purple500,
      'brand-hover-color': palette.purple.purple600,
      'text-color-on-brand': palette.white,
    },
    'primary-color': palette.purple.purple500,
    'primary-hover-color': palette.purple.purple600,
    'primary-selected-color': palette.blue.blue100,
    'primary-selected-hover-color': palette.blue.blue200,
    'text-color-on-primary': palette.white,
    'ui-border-color': palette.grey.grey200,
    'negative-color': palette.red.red500,
    'negative-color-hover': palette.red.red100,
    'divider-selected': palette.grey.grey900,
    'surface-alt': palette.grey.grey700,
    "color-american_gray-selected": palette.grey.grey75,
    'warning-background-color': palette.orange.orange100,
    'layout-border-color': palette.grey.grey200,
    'link-color':palette.blue.blue600,
  },
  black: {
    'brand-colors': {
      'brand-color': palette.purple.purple500,
      'brand-hover-color': palette.blue.blue500,
      'text-color-on-brand': palette.white,
    },
    'primary-color': palette.purple.purple500,
    'primary-hover-color': palette.blue.blue500,
    'primary-selected-color': palette.navy.navy500,
    'primary-selected-hover-color': palette.darkBlue.darkBlue500,
    'text-color-on-primary': palette.white,
    'ui-border-color': palette.grey.grey200,
    'negative-color': palette.red.red500,
    'negative-color-hover': palette.red.red100
  },
  dark: {
    'brand-colors': {
      'brand-color': palette.purple.purple500,
      'brand-hover-color': palette.blue.blue500,
      'text-color-on-brand': palette.white,
    },
    'primary-color': palette.purple.purple500,
    'primary-hover-color': palette.blue.blue500,
    'primary-selected-color': palette.navy.navy500,
    'primary-selected-hover-color': palette.darkBlue.darkBlue500,
    'text-color-on-primary': palette.white,
    'ui-border-color': palette.grey.grey200,
    'negative-color': palette.red.red500,
    'negative-color-hover': palette.red.red100
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      sort: "alpha"
    },
    docs: {
      container: ({ children, context }: { children: any; context: any }) => (
        <ThemeProvider
          themeConfig={{
            colors: colorThemeConfig,
            name: 'Ikigai-Theme'
          }}
        >
          <DocsContainer context={context}>
            <Unstyled>
              {children}
              {<DocFooter feedbackFormLink="https://forms.monday.com/forms/213ebddcb0d423ae5b6178fb6e8f7b3d?r=use1" />}
            </Unstyled>
          </DocsContainer>
        </ThemeProvider>
      ),
      page: DocsPage,
      components: {
        Controls: PropsTable,
        PropsTable,
        h1: ComponentNameDecorator,
        ComponentName: ComponentNameDecorator,
        h2: SectionName,
        h3: Title,
        li: AnchorListItem,
        p: Paragraph,
        AlphaWarning,
        DeprecatedWarning,
        SectionName,
        Link,
        ComponentRules,
        UsageGuidelines,
        FunctionArguments,
        FunctionArgument,
        RelatedComponent,
        RelatedComponents: RelatedComponentsDecorator,
        Frame,
        StorybookLink,
        Tip,
        UnstyledList,
        UnstyledListItem
      }
    },
    options: {
      storySort: {
        order: [
          "Welcome",
          "Catalog",
          "Change Log",
          "Typography Migration Guide",
          "Foundations",
          "Buttons",
          "Inputs",
          "Data display",
          "Media",
          "Popover",
          "Pickers",
          "*",
          "Accessibility",
          "Hooks"
        ]
      }
    },
    playground: {
      storyId: "playground",
      components: { ...VibeComponents, VibeIcons, VibeNext: VibeComponentsNext },
      introCode
    }
  },
  decorators: [
    (Story, { className }: { className: string }) => {
      return (
        <MultipleStoryElementsWrapper className={className}>
          <Story />
        </MultipleStoryElementsWrapper>
      );
    },
    withMemoryStats,
    // Should always be the last decorator (stories hooks issues otherwise) - bug in the addon
    withThemeByClassName({
      themes: {
        Light: "light-app-theme",
        Dark: "dark-app-theme",
        Black: "black-app-theme"
      },
      defaultTheme: "Light"
    })
  ],
  globalTypes: {
    memoryStats: {
      name: "Memory Stats",
      description: "Add Memory Stat tracker",
      defaultValue: "no",
      toolbar: {
        icon: "memory",
        items: [
          { value: "no", right: "🚫", title: "Hide Memory Stat" },
          { value: "yes", right: "✅", title: "Show Memory Stat" }
        ]
      }
    }
  },
  loaders: isChromatic() && document.fonts ? [fontLoader] : []
};

export default preview;
