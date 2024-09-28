// libraries
import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDropzone } from "react-dropzone";
import { alpha, Box, Stack, Typography } from "@mui/material";

// utils
// import { formattedSize, generateFilesSize } from "@/utils/functions";

const FileInputPrp = ({
  name,
  value,
  preview,
  onChange,
  maxFiles = 1,
  accept,
  shape,
  showPreview = true,
}) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    maxFiles: maxFiles,
    accept: accept,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      // Pass the actual file object instead of the preview URL
      if (acceptedFiles.length > 0) {
        onChange(maxFiles > 1 ? acceptedFiles : acceptedFiles[0]); // Pass the file object here
      }
    },
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: shape === "square" ? "50%" : "100%",
        height: shape === "square" ? "50%" : 60,
        minHeight: 120,
        bgcolor: "background.paper",
        border: `1px solid ${alpha("#1e293b", 0.25)}`,
        borderRadius: 1,
        cursor: "pointer",
        overflow: "hidden",
        "&:hover": {
          border: "1px solid #1e293b",
        },
      }}
      {...getRootProps({ className: "dropzone" })}
    >
      <input {...getInputProps({ name: name })} />

      {acceptedFiles?.length === 0 && !preview && (
        <Typography variant="body2" color="textSecondary">
          فایل
        </Typography>
      )}

      <LazyLoadImage
        src={files[0]?.preview}
        width="50%"
        height="50%"
        style={{ objectFit: "cover" }}
      />
    </Stack>
  );
};

// const formattedSize = (bytes: number) => {
//   if (!bytes) return "0 Bytes";

//   const k = 1024;
//   const sizes = [
//     "Bytes",
//     "KiB",
//     "MiB",
//     "GiB",
//     "TiB",
//     "PiB",
//     "EiB",
//     "ZiB",
//     "YiB",
//   ];

//   const i = Math.floor(Math.log(bytes) / Math.log(k));

//   return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
// };

// const generateFilesSize = (files) => {
//   return files.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.size,
//     0
//   );
// };

export default FileInputPrp;
