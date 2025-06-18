import React from "react";
import useImages from "./useImages";
import { Typography, Paper, IconButton, Stack } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function ImageCarrousel() {
  const [currImage, setCurrImage] = React.useState<number>(3);
  const { loading, images } = useImages();
  let interval: NodeJS.Timeout;

  React.useEffect(() => {
    interval = setInterval(() => {
      setCurrImage((prev) => (prev === images.length ? 0 : prev + 1));
    }, 10000);
  }, []);

  function showPreviousImage() {
    const prevImage = currImage === 0 ? images.length - 1 : currImage - 1;
    setCurrImage(prevImage);
    interval.refresh();
  }

  function showNextImage() {
    const nextImage = currImage === images.length - 1 ? 0 : currImage + 1;
    setCurrImage(nextImage);
    interval.refresh();
  }

  return (
    <Paper>
      {loading && <Typography>Image Loading...</Typography>}
      {!loading && (
        <>
          {images.map((image: string, index: number) =>
            currImage === index ? (
              <Stack
                direction="row"
                key={index}
                alignItems="center"
                justifyContent="center"
              >
                <IconButton onClick={showPreviousImage}>
                  <ArrowBack />
                </IconButton>
                <img
                  src={image}
                  style={{
                    width: "auto",
                    height: "500px",
                    objectFit: "contain",
                  }}
                  alt={`carousel-img-${index}`}
                />
                <IconButton onClick={showNextImage}>
                  <ArrowForward />
                </IconButton>
              </Stack>
            ) : null
          )}
        </>
      )}
    </Paper>
  );
}
