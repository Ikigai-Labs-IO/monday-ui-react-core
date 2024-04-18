import Text from "../Text/Text";
import Flex from "../Flex/Flex";
import Divider from "../Divider/Divider";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import styles from "./UploadDropzone.module.scss";
import { CustomIcon } from "../Icon/Icons/components/CustomIcon";

export default function DropZone() {
  const [selectedImages, setSelectedImages] = useState([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      setSelectedImages((prevState) => [...prevState, file]);
    });
  }, []);

  const handleDelete = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedImages((prevState) =>
      prevState.filter((_, i) => i !== index)
    );
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({ onDrop });

  return (
    <div className={styles.container}>
      <div style={selectedImages.length > 0 ? { padding: "var(--spacing-medium)" } : {}} className={styles.dropzone} {...getRootProps()}>
        <input {...getInputProps()} />
        <div style={{ padding: selectedImages.length > 0 ? "var(--spacing-large) 80px 0" : "var(--spacing-large) 80px", cursor: "pointer" }}>
          {isDragActive ? (
            <Text style={{ color: "var(--type-secondary)" }} type={Text.types.TEXT2} align={Text.align.CENTER} >Drop file(s) here...</Text>
          ) : (
            <Flex direction={Flex.directions.COLUMN}>
              <CustomIcon name="arrowLineTopCenter" fillColor="var(--type-secondary)" iconSize={24} />
              <Text style={{ color: "var(--type-secondary)" }} type={Text.types.TEXT2} align={Text.align.CENTER} >Click to select a file<br />or drag and drop a file</Text>
            </Flex>
          )}
        </div>
        {selectedImages.length > 0 && <Divider />}
        {selectedImages.map((file, index) => (
          <Flex
            key={index}
            gap={Flex.gaps.SMALL}
            direction={Flex.directions.ROW}
            justify={Flex.justify.SPACE_BETWEEN}
          >
            <CustomIcon
              iconSize={16}
              viewBox="0 0 16 16"
              name="filePaperClip"
              fillColor="var(--type-secondary)"
            />
            <Flex
              key={index}
              gap={Flex.gaps.SMALL}
              direction={Flex.directions.ROW}
              justify={Flex.justify.SPACE_BETWEEN}
            >
              <Text
                type={Text.types.TEXT2}
                style={{ color: "var(--primary-color)" }}
              >
                {file.name}
              </Text>
              <CustomIcon
                name="trash"
                iconSize={16}
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
                fillColor="var(--divider-tertiary)"
                onClick={(event) => handleDelete(index, event)}
              />
            </Flex>
          </Flex>
        ))}
      </div>
    </div>
  );
}
