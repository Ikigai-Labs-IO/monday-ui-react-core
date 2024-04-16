import { useMemo } from "react";
import { RelatedComponent } from "storybook-components";
import BreadcrumbsBar from "../../../../components/BreadcrumbsBar/BreadcrumbsBar";
import BreadcrumbItem from "../../../../components/BreadcrumbsBar/BreadcrumbItem/BreadcrumbItem";
import { Group, Board, Workspace } from "../../../../components/Icon/Icons";

export const BreadcrumbsDescription = () => {
  const component = useMemo(() => {
    const style = {
      marginLeft: "-40px"
    };
    return (
      <div style={style}>
        <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
          <BreadcrumbItem text="Workspace" icon={Workspace} />
          <BreadcrumbItem text="Board" icon={Board} />
          <BreadcrumbItem text="Group" icon={Group} />
        </BreadcrumbsBar>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Breadcrumbs"
      href="/?path=/docs/navigation-breadcrumbsbar-breadcrumbsbar--docs"
      description="Helps users to keep track and maintain awareness of their location."
    />
  );
};
