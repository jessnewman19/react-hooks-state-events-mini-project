import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formItem, setFormItem] = useState({
    text: "", 
    category: "",
  })

  function handleChange(e) { 
    const {name, value} = e.target
    setFormItem({...formItem, [name]: value})
  }

  function handleSubmit(e) { 
    e.preventDefault()
    onTaskFormSubmit(formItem)
    setFormItem({
      text: "", 
      category: "",
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formItem.text} onChange={(e) => handleChange(e)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={formItem.category}>
          {categories.map(category => {
            if (category !== "All") 
            return <option key={category}>{category}</option>
          }
        )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
