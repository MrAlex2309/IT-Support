import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState, useEffect, useMemo, useRef } from "react";
import React from "react";
import '../Report/DataTable.css'
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Preview = p => {
  const [stateTransfer, setStateTransfer] = useState({})
  const navigate = useNavigate()
  const show = useCallback(()=>setStateTransfer(p.data))
  useEffect(()=>{
    show()
  },[])
  console.log(stateTransfer)
  
  const clickhandler = useCallback(()=>{
    
    console.log(stateTransfer)
    navigate('/report/Detail',{
      state: stateTransfer
    })
  })
  return(
    // <Link to='/reporter/Detail'>view</Link>
    <span className="views" onClick={clickhandler}>view</span>
  )
}

function DataTable() {

  //  const RowClickHandler = useCallback(e =>{
  //   console.log("Row click ",e.data)
  //   setDetailPage(true)
  // })
  const gridRef = useRef()
  const columns = [
    { headerName: "No", field: "no" },
    { headerName: "Loaction", field: "location", minWidth: 150},
    { headerName: "Problem", field: 'problem'},
    { headerName: "Reporter", field: "reporter" },
    { headerName: "Option", field: "opt" },
    { headerName: "Status", field: "status" },
    { headerName: "Start time", field: "startTime", hide:true},
    { headerName: "Start Date", field: "startDate", filter: 'agDateColumnFilter'},
    { headerName: "End Date", field: "endDate" },
    {headerName: 'Action', field: 'action', cellRenderer: Preview},
    {headerName: 'Check', field: 'check', hide: true}
  ];

  const [data, setData] = useState([]);
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
      minWidth: 100,
      flex: 1,
    }),
    []
  );
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://it-support-39885-default-rtdb.firebaseio.com/info.json"
      );
      const responseData = await response.json();
      const loadData = [];
      for (const key in responseData) {
        loadData.push({
          no: key,
          opt: responseData[key].supportOpt,
          location: responseData[key].locationProblem,
          reporter: responseData[key].Reporter,
          status: responseData[key].status,
          startTime: responseData[key].StartTime,
          startDate: responseData[key].StartDate,
          problem: responseData[key].ProblemDetail,
          endDate: responseData[key].endDate,
          check: responseData[key].check
        });
      }
      setData(loadData);
    };
    getData();
  }, []);
 
  let gridApi
  const onBtExport = useCallback(() => {
    gridApi.exportDataAsCsv();
  }, []);
  const onGridReady = params => {
    gridApi=params.api
  }
  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('filter-text-box').value
    );
  }, []);

  return (
    <div>
      
      <div className="d-flex justify-content-end mt-2 mb-2 me-5 align-items-center">
        <div className="filterInput">
          <FontAwesomeIcon icon={faFilter} />
          <input
                type="text"
                id="filter-text-box"
                style={{fontFamily: 'Font Awesome 5 Free', fontWeight: '700px'}}
                placeholder="Filter..."
                onInput={onFilterTextBoxChanged}
                className="FilterSearch"
              >
                
              </input>
        </div>
        <button onClick={onBtExport} className="ms-2">
        <span className="me-2">Export</span>
        <FontAwesomeIcon icon={faFileExport} />
      </button>
      </div>
      <div className="ag-theme-alpine" style={{ height: '1000px', width:'100%' }}>
        <AgGridReact
          ref={gridRef}
          rowData={data}
          columnDefs={columns}
          rowSelection="multiple"
          animateRows={true}
          defaultColDef={defaultColDef}
          pagination={true}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
}

export default DataTable;
