import React from "react";
import { Button } from "reactstrap";
import * as d3 from "d3-graphviz";
import SBEditor from "./SBEditor";
import saveAs from "file-saver";
import { sbToastError } from "./SBToast";

export const convertToGvSplitView = (data: any, height = 320, width = 920) => {
    d3.graphviz("#gv")
        .fit(true)
        .height(height)
        .width(width)
        .zoomScaleExtent([1, 10])
        .renderDot(data);
}

export const convertToGvFullView = (data: any) => {
    d3.graphviz("#fullGV")
        .fit(true)
        .renderDot(data);
}

export const onGVPopOutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    var newWindowContent = document.getElementById('fullGV')?.innerHTML;
    try {
        var newWindow = window.open("");
        newWindow?.document.write(newWindowContent);
    } catch {
        sbToastError('Error: Unable to open GraphViz in pop out.')
    }
}

export const onDownloadSVGClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const svg = document.getElementById("fullGV")?.innerHTML;
    try {
        if (svg) {
            var blob = new Blob([svg], { type: "image/svg+xml" });
            saveAs(blob, "graphViz.svg");
        }
    } catch {
        sbToastError('Error: Unable to download GraphViz file.')
    }
}

const SBGvPreviewer = (props: any) => {

    const { conversion, convertedSchema } = props;

    const onDiagramReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        d3.graphviz("#gv").resetZoom();
    }

    return (
        <>
            <SBEditor data={convertedSchema} isReadOnly={true} convertTo={conversion} height="20em"></SBEditor>

            <div id="content" className="card bg-secondary" style={{ 'height': "20em", overflow: 'hidden' }}>
                <Button id="diagramReset" title="Reset the View" color="info" className="btn-sm m-1" style={{ zIndex: '1', position: 'absolute' }} onClick={onDiagramReset}>Reset</Button>
                <div id="gv" style={{ 'height': "20em", textAlign: 'center', zIndex: '0' }}>
                </div>
                <div id="fullGV" style={{ visibility: 'hidden', overflow: 'hidden' }}>
                </div>
            </div>
        </>
    );
}
export default SBGvPreviewer;