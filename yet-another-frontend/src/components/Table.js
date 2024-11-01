import React from "react";
import DownloadIcon from "../svg/DownloadIcon";
import HamburgerIcon from "../svg/HamburgerIcon";
import TrashIcon from "../svg/TrashIcon";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export default function Table({
    gridRef,
    colDefs,
    setColDefs,
    rowData,
    onGridReady,
    charts = false,
}) {
    const defaultColDef = React.useMemo(() => {
        return {
            filter: true,
            // flex: 1,
            floatingFilter: true,
            suppressHeaderMenuButton: true,
        };
    }, []);

    const pinnedTopRowData = React.useMemo(() => {
        return [{ id: "stats" }];
    }, []);

    const getRowHeight = (params) => {
        if (params.node.rowPinned) return 80;
        else return 30;
    };

    const autoSizeStrategy = React.useMemo(
        () => ({
            type: "fitCellContents",
        }),
        []
    );

    function handleColumns(event) {
        const { name, checked } = event.target;
        setColDefs((prevCols) =>
            prevCols.map((col) =>
                col["field"] === name ? { ...col, hide: !checked } : col
            )
        );
    }

    const onBtnExport = React.useCallback(() => {
        gridRef.current.api.exportDataAsCsv();
    }, [gridRef]);

    const onBtnResetFilter = React.useCallback(() => {
        gridRef.current.api.setFilterModel(null);
    }, [gridRef]);

    return (
        <div className="w-full h-full">
            <div className="p-2 bg-gray-100 rounded-t-lg border-x border-t border-[#e5e7eb] flex gap-5">
                <div className="dropdown dropdown-bottom">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-sm btn-ghost p-2"
                    >
                        <HamburgerIcon />
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-40 menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {colDefs.map((col) => (
                            <li key={col.field}>
                                <label className="label cursor-pointer">
                                    <span className="label-text">
                                        {col.headerName}
                                    </span>
                                    <input
                                        type="checkbox"
                                        id={col.field}
                                        name={col.field}
                                        defaultChecked={!col.hide}
                                        className="checkbox checkbox-sm checkbox-primary"
                                        onChange={handleColumns}
                                    />
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="btn btn-sm" onClick={onBtnExport}>
                    <DownloadIcon />
                    <span className="hidden md:block">Download</span>
                </button>
                <button className="btn btn-sm" onClick={onBtnResetFilter}>
                    <TrashIcon />
                    <span className="hidden md:block">Reset Filters</span>
                </button>
            </div>
            <div
                className="ag-theme-quartz max-w-[100vw] z-0"
                style={{
                    "--ag-header-background-color": "#f3f4f6",
                    // "--ag-border-color": "#f3f4f6",
                    "--ag-wrapper-border-radius": "none",
                    "--ag-cell-horizontal-border": "solid #e5e7eb",
                }}
            >
                <AgGridReact
                    // table api ref
                    ref={gridRef}
                    // table data
                    rowData={rowData}
                    columnDefs={colDefs}
                    // col filters enabled
                    defaultColDef={defaultColDef}
                    // display sort icon
                    unSortIcon={true}
                    // table height
                    domLayout={"autoHeight"}
                    // pagination
                    pagination={true}
                    paginationPageSize={50}
                    // selectable text inside table
                    enableCellTextSelection={true}
                    ensureDomOrder={true}
                    // enable pinned row for graphs
                    pinnedTopRowData={charts ? pinnedTopRowData : undefined}
                    // for pinned row height
                    getRowHeight={getRowHeight}
                    // column sizing
                    autoSizeStrategy={autoSizeStrategy}
                    onGridReady={onGridReady}
                    // getRowStyle={getRowStyle}
                />
            </div>
            {/* )} */}
        </div>
    );
}
