import { Tree } from "../Tree";
import Flex from "../../Flex/Flex";
import { TreeFile, TreeFolder } from "../Component/TreeEntry";
import { createStoryMetaSettingsDecorator } from "../../../storybook";

const metaSettings = createStoryMetaSettingsDecorator({
    component: Tree,
    enumPropNamesArray: ["type", "name", "extra", "files"]
});

export default {
    title: "Components/Tree",
    component: Tree,
    argTypes: metaSettings.argTypes,
    decorators: metaSettings.decorators
};

export const Overview = {
    render: () => (
        <Flex>
            <Tree>
                <TreeFolder name="Components">
                    <TreeFile name="footer.js" />
                    <TreeFile name="layout.js" />
                    <TreeFile name="header.js" />
                </TreeFolder>
            </Tree>
        </Flex>
    ),
    name: "Overview"
};

export const Default = {
    render: () => (
        <Flex>
            <Tree>
                <TreeFile name="package.json" />
                <TreeFolder name="Components">
                    <TreeFile name="layout.js" />
                    <TreeFolder name="Footer">
                        <TreeFolder name="Mini footer">
                            <TreeFile name="footer.js" />
                        </TreeFolder>
                        <TreeFile name="footer.js" />
                        <TreeFile name="footer-text.js" />
                        <TreeFile name="footer-license.js" />
                    </TreeFolder>
                    <TreeFile name="header.js" />
                </TreeFolder>
                <TreeFile name="readme.md" />
            </Tree>
        </Flex>
    ),

    name: "default",
};

export const DisabledFolder = {
    render: () => (
        <Flex>
            <Tree>
                <TreeFile name="package.json" />
                <TreeFolder name="Components" disabled>
                    <TreeFile name="layout.js" />
                    <TreeFile name="header.js" />
                </TreeFolder>
                <TreeFile name="readme.md" />
            </Tree>
        </Flex>
    ),

    name: "disabled folder",
};

export const DisabledFile = {
    render: () => (
        <Flex>
            <Tree>
                <TreeFile name="package.json" disabled />
                <TreeFolder name="Components" >
                    <TreeFile name="layout.js" />
                    <TreeFile name="header.js" />
                </TreeFolder>
                <TreeFile name="readme.md" />
            </Tree>
        </Flex>
    ),

    name: "disabled file",
};
