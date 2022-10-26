import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useState, useEffect } from 'react'
import Header from "../../components/Header"
import OppoLeads from "./OppoLeads"

const Opportunities = () => {
  const [data, setData] = useState([
    {
        "id": "1",
        "title": "3+ months",
         "leads": "2 leads",
         "price": 4,
        "tasks": [
            {
                "id": 1,
                "name": "Dale roberts",
                "num": 324,
                "client" :"post client- john & deo "
            }
        ]
    },
    {
        "id": "2",
        "title": "New Opportunities",
        "leads": "3 leads",
        "price": 10,
        "tasks": [
            
        ]
    },
    {
        "id": "3",
        "title": "follow up",
        "leads": "5 leads",
        "price": 8.05,
        "tasks": [
            {
                "id": 2,
                "name": "jess king",
                "num": 324,
                "client" :"post client- john & deo "
            },
            {
                "id": 3,
                "name": "john Doe",
                "num": 324,
                "client" :"post client- john & deo "
            },
            {
                "id": 4,
                "name": "steve",
                "num": 324,
                "client" :"post client- john & deo "
            },
            {
                "id": 5,
                "name": "jackson hart",
                "num": 324,
                "client" :"post client- john & deo "
            }
        ]
    },
    {
        "id": "4",
        "title": "phone contact ",
        "leads": "6 leads",
        "price": 4.40,
        "tasks": [
           
        ]
    },
    {
        "id": "5",
        "title": "no deal ",
        "leads": "3 leads",
        "price": 0.00,
        "tasks": [
            {
                "id": 6,
                "name": "Donald Gonzales",
                "num": 324,
                "client" :"post client- john & deo "
            },
            {
                "id": 7,
                "name": "oberts",
                "num": 324,
                "client" :"post client- john & deo "
            }
        ]
    },
    {
        "id": "6",
        "title": "deal started",
        "leads": "2 leads",
        "price": 2.20,
        "tasks": [
           
        ]
    },
    {
        "id": "7",
        "title": "underWriten",
        "leads": "2 leads",
        "price": 2,
        "tasks": [
           
        ]
    }
])
const [searchTitle, setSearchTitle] = useState("")
  useEffect(() => {
   
      setData(data)

    
  }, []);

  const onDragEnd = (result) => {

    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
      const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

      const sourceCol = data[sourceColIndex]
      const destinationCol = data[destinationColIndex]

      let sourceTask = [...sourceCol.tasks]
      let destinationTask = [...destinationCol.tasks]

      const [add] = sourceTask.splice(source.index, 1)
      destinationTask.splice(destination.index, 0, add)

      data[sourceColIndex].tasks = sourceTask
      data[destinationColIndex].tasks = destinationTask

      setData(data)
    }
  }


  return (
    <>
      <div className="content-wrapper">
        <Header />
        <div className="container-fluid py-3 ps-lg-3 pe-lg-4 px-3">
          <div className="card rounded-5 border-0 shadow mb-4 mb-xl-3">
            <div className="card-body">
              <div className="d-flex justify-content-center opportunity-filter flex-wrap">
                <div className="col-custom-1 col-custom">
                  <select className="form-select bg-light border-light mb-3" aria-label="Select date & time">
                    <option value="1">Select date & time</option>
                  </select>
                </div>
                <div className="col-custom-1 col-custom">
                  <select className="form-select bg-light border-light mb-3" aria-label="Date Added (DESC)">
                    <option value="1">Date Added (DESC)</option>
                  </select>
                </div>
                <div className="col-custom-1 col-custom">
                  <select className="form-select bg-light border-light mb-3" aria-label="Refinance Leads">
                    <option value="1">Refinance Leads</option>
                  </select>
                </div>
                <div className="col-custom-2 col-custom">
                  <select className="form-select bg-light border-light mb-3" aria-label="Campaign">
                    <option value="1">Campaign</option>
                  </select>
                </div>
                <div className="col-custom-2 col-custom">
                  <select className="form-select bg-light border-light mb-3" aria-label="Open">
                    <option value="1">Open</option>
                  </select>
                </div>
                <div className="col-custom-3 col-custom">
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-light border-light" id="search-icon"><i className="fa-solid fa-sm fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control bg-light border-light ps-0"  onChange={(e) => setSearchTitle(e.target.value)} placeholder="Search" aria-label="Search" aria-describedby="search-icon" />
                  </div>
                </div>
                <div className="col-custom">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <button type="button" data-bs-toggle="modal" data-bs-target="#addOpportunityModal" className="btn btn-success text-capitalize btn-small">Add new</button>
                    </li>
                    <li className="list-inline-item">
                      <button type="button" className="btn btn-primary">
                        <input className="form-check-input" type="checkbox" id="checkboxNoLabel" aria-label="..." /><i className="fa-solid fa-chevron-down ms-2"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
              <div className="row w-auto flex-nowrap opportunity-row overflow-auto gx-xl-4">
          
                {
                  data.map(section => (
                    <Droppable
                      key={section.id}
                      droppableId={section.id}
                    >
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          className='col'
                          ref={provided.innerRef}
                        >
                          <h5 className="mb-0 text-capitalize"> {section.title}</h5>
                          <div className="ff-primary fw-medium fs-14 mb-lg-5 mb-4">{section.leads} <span className="text-success">$0.00</span></div>
                        
                            {
                              section.tasks.filter((val) => {
                                if (searchTitle === "") {
                                    return val
                                } else if (val.name.toLowerCase().includes(searchTitle.toLocaleLowerCase())) {
                                    return val;
                                }
                             }).map((task, index) => (
                                <Draggable
                                  key={task.id}
                                  draggableId={task.name}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}

                                    >
                                      <OppoLeads >
                                        <div className="card border-0 shadow rounded-4 mb-lg-4 mb-3">
                                          <div className="card-body p-2">
                                            <div className="d-flex align-items-center mb-lg-3 mb-2">
                                              <span style={{backgroundColor: "#35A9AF"}} className="d-flex align-items-center flex-shrink-0 justify-content-center wh-40 text-uppercase rounded-circle me-1 me-xl-2 text-white lh-1">
                                              {task.name.charAt(0)}
                                              </span>
                                              <span className="ff-primary fw-medium">{task.name}</span>
                                              <span className="fs-14 text-black-50 ms-auto">{task.num}</span>
                                            </div>
                                            <span className="bg-light rounded py-1 px-2 fs-14 d-inline-flex my-1">{task.client}</span>
                                            <div className="mt-2 mt-lg-3 d-flex align-items-center flex-wrap pt-xl-1">
                                              <button type="button" className="btn btn-light btn-sm text-primary me-2"><i className="fa-solid fa-envelope"></i></button>
                                              <button type="button" className="btn btn-light btn-sm text-primary me-2"><i className="fa-solid fa-phone"></i></button>
                                              <button type="button" className="btn btn-light bg-primary bg-opacity-10 border-primary border-opacity-10 btn-sm text-primary ms-auto"><i className="fa-solid fa-plus"></i> Task</button>
                                            </div>
                                          </div>
                                        </div>

                                      </OppoLeads>
                                    </div>
                                  )}
                                </Draggable>
                              ))
                            }
                            {provided.placeholder}
                         
                        </div>
                      )}
                    </Droppable>
                  ))
                }
              </div>
          
          </DragDropContext>
        </div>
      </div>
    </>
  )
}

export default Opportunities