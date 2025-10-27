import React from "react";

import FlowerSort from "./FlowerSort";


import productData from "./ProductData";
import sortData from "./SortData";

function ApartmentSortSection() {
  

  console.log(productData)
  

  const apartmentProducts = productData.filter((p) => p.code.startsWith("APT"));

 
  const caseInfo = sortData.filter((item) => item.englishName === "House Plants");
  const sortValue = caseInfo[0].sort;
 const name=caseInfo[0].name
 const enName=caseInfo[0].englishName
  return (
    <FlowerSort
    sort={sortValue}
      titleFa={name}
      titleEn={enName}
      products={apartmentProducts}
    />
  );
}

export default ApartmentSortSection;
