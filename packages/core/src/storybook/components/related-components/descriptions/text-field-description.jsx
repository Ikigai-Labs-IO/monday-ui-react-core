import { useMemo } from "react";
import { RelatedComponent } from "storybook-components";
import TextField from "../../../../components/TextField/TextField";

export const TextFieldDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "80%"
    };
    return (
      <div style={style}>
        <TextField placeholder="Placeholder text here" size={TextField.sizes.MEDIUM} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="TextField"
      href="/?path=/docs/inputs-textfield--docs"
      description="Allows users take actions with a single click."
    />
  );
};
