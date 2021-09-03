import React from "react";

export default function Cart({ images }) {
  return (
    <div>
      <>{images.map((image) => console.log(image.tags.split(",")))}</>
    </div>
  );
}
