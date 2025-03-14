import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  const onaddCategory = (newCategory) => {

    const lowerValue = newCategory.trim().toLowerCase();

    const exists = categories.some(categories => categories.toLowerCase() === lowerValue);

    if (exists) {
      alert("ERROR: La catergoria ya existe")
    } else {
      setCategories([newCategory, ...categories]);
    }

    // if( categories.includes(newCategory)) return;

    // setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={ setCategories }
        // esto es lo mismo que hacer esto onNewCategory = { event => onaddCategory(event) }, el de abajo, no necesariamente se debe llamar evento si no algun otro nombre como value o algun otro

        onNewCategory={onaddCategory}
      />


      {
        categories.map((category) => (
          <GiftGrid
            key={category}
            category={category}
          />
        ))

      }
  </>
  );
};
