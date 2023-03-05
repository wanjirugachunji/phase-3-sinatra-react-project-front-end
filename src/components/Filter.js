import React from 'react'

const Filter = ({ cats, filterBy, setFilterBy }) => {

  function handleFilterChange(e) {
    setFilterBy(e.target.value)
  }

  return (
    <div className="filter-container">
      <div>Filter by Category:</div>
      <div>
      <select
            value={filterBy}
            onChange={handleFilterChange}
          >
            <option value="none">All</option>
            {cats.map((cat) => (
              <option key={cat.id} value={cat.job_type}>
                {cat.job_type}
              </option>
            ))}
          </select>
      </div>
    </div>
  )
}

export default Filter