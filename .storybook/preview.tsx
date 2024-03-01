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

const fontLoader = async () => ({
  fonts: await document.fonts.ready // Fixing Chromatic tests flakiness - taking snapshots after fonts are loaded
});

const colorThemeConfig = {
  light: {
    'brand-colors': {
      'brand-color': '#7822FF',
      'brand-hover-color': '#5605c0',
      'text-color-on-brand': '#ffffff',
    },
    'primary-color': '#7822FF',
    'primary-hover-color': '#5605c0',
    'primary-selected-color': '#cce5ff',
    'primary-selected-hover-color': '#aed4fc',
    'success-background-color': '#f0fff8',
    'text-color-on-primary': '#ffffff',
    'primary-text-color': '#10181b',
    'negative-color': '#FE4646',
    'negative-color-hover': '#ffe6e6',
    'warning-background-color': '#fff7e6',
    'ui-border-color': '#e3e9ef',
    'layout-border-color': '#e3e9ef',
    'link-color': '#1f76c2'
  },
  black: {
    'brand-colors': {
      'brand-color': '#7822FF',
      'brand-hover-color': '#0060b9',
      'text-color-on-brand': '#ffffff',
    },
    'primary-color': '#7822FF',
    'primary-hover-color': '#0060b9',
    'primary-selected-color': '#133774',
    'primary-selected-hover-color': '#0d2e65',
    'text-color-on-primary': '#ffffff',
    'ui-border-color': '#e3e9ef',
    'negative-color': '#FE4646',
    'negative-color-hover': '#FFE6E6'
  },
  dark: {
    'brand-colors': {
      'brand-color': '#7822FF',
      'brand-hover-color': '#0060b9',
      'text-color-on-brand': '#ffffff',
    },
    'primary-color': '#7822FF',
    'primary-hover-color': '#0060b9',
    'primary-selected-color': '#133774',
    'primary-selected-hover-color': '#0d2e65',
    'text-color-on-primary': '#ffffff',
    'ui-border-color': '#e3e9ef',
    'negative-color': '#FE4646',
    'negative-color-hover': '#FFE6E6'
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
