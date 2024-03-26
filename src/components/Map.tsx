import * as d3 from "d3";
import { FeatureCollection } from "geojson";
import React, { useState } from "react";
import "./Map.scss";
type MapProps = {
  width: number;
  height: number;
  data: FeatureCollection;
};

export const Map = ({ width, height, data }: MapProps) => {
  const projection = d3
    .geoMercator()
    .scale(width / 2 / Math.PI - 40)
    .center([10, 35]);

  const geoPathGenerator = d3.geoPath().projection(projection);
  const [hoveredCountry, setHoveredCountry] = useState<
    string | number | React.SetStateAction<null>
  >();

  const handleMouseEnter = (
    countryId: string | number | React.SetStateAction<null>
  ) => {
    setHoveredCountry(countryId);
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  const allSvgPaths = data.features
    .filter((shape) => shape.id !== "ATA")
    .map((shape) => {
      const isHovered = shape.id === hoveredCountry;
      return (
        <path
          key={shape.id}
          d={geoPathGenerator(shape)!}
          stroke="lightGrey"
          strokeWidth={0.5}
          fill={isHovered ? "darkGrey" : "grey"}
          fillOpacity={0.7}
          onMouseEnter={() => handleMouseEnter(shape.id!)}
          onMouseLeave={handleMouseLeave}
          className="map-path"
        />
      );
    });

  return (
    <div>
      <svg width={width} height={height}>
        {allSvgPaths}
      </svg>
    </div>
  );
};
