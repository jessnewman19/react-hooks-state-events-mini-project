import React from "react";

function CategoryFilter({categories, onSetSelectedCategory, selectedCategory}) {

  console.log(selectedCategory)
    const filteredCategories = categories.map(category => {
    const className = selectedCategory === category ? "selected" : null;
    return (<button 
        key={category} 
        className={className}
        onClick={() => onSetSelectedCategory(category)}>
        {category}
    </button>)

  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
        {filteredCategories}
    </div>
  );
}

export default CategoryFilter;
