// libraries
import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDropzone } from "react-dropzone";
import { alpha, Box, Stack, Typography } from "@mui/material";

// utils
// import { formattedSize, generateFilesSize } from "@/utils/functions";

const FileInput = ({
  name,
  value,
  preview,
  onChange,
  maxFiles = 1,
  accept,
  shape,
  showPreview = true,
}) => {
//   const { t } = useTranslation();

  const [files, setFiles] = useState([]);

    console.log("files00", files);
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
        if (acceptedFiles.length > 0) {
          console.log(
            "acceptedFiles",
            acceptedFiles,
            acceptedFiles[0]?.preview
          );
        onChange(maxFiles > 1 ? acceptedFiles : acceptedFiles[0].preview.slice(5));
      }
    },
  });

    
    console.log("files1",files);
  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);
console.log("files2", files);
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
          {/* {t("input.file")} */}
          فایل
        </Typography>
      )}

      {/* {(acceptedFiles?.length > 0 || preview) &&
        maxFiles === 1 &&
        showPreview && (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <LazyLoadImage
              src={files[0]?.preview || preview}
            //   alt={files[0]?.title || "preview"}
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          
          </Box>
        )} */}

      <LazyLoadImage
        src={files[0]?.preview}
        //   alt={files[0]?.title || "preview"}
        width="50%"
        height="50%"
        style={{ objectFit: "cover" }}
      />
    </Stack>
  );
};

 const formattedSize = (bytes: number) => {
  if (!bytes) return "0 Bytes";

  const k = 1024;
  const sizes = [
    "Bytes",
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB",
  ];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

 const generateFilesSize = (files) => {
  return files.reduce(
    (accumulator, currentValue) => accumulator + currentValue.size,
    0
  );
};

export default FileInput;
