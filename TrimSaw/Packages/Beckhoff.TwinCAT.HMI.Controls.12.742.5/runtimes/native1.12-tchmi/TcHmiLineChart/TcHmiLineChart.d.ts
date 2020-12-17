declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiLineChart extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Linechart element' */
                protected __lineChart: TcHmiCharting.LineChart | null;
                /** member variables */
                /** Reference to the root dom element of the current control template as  jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** Reference to the div element used as chart container as jquery object. */
                protected __elementChart: JQuery;
                /** Reference to the div element used as tooltip as jquery object. */
                protected __elementTooltip: JQuery;
                /** Reference to the div element used as tooltip as jquery object. */
                protected __elementTooltipText: JQuery;
                /** Reference to the div element used as tooltip arrow as jquery object. */
                protected __elementTooltipArrow: JQuery;
                /** Internal reference to the attribute 'data-tchmi-y-axis-width' */
                protected __sectionsBackgroundColor: TcHmi.Color | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-axis-width' */
                protected __yAxisWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-family' */
                protected __yLabelFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-size' */
                protected __yLabelFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-size-unit' */
                protected __yLabelFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-label-font-weight' */
                protected __yLabelFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-main-tick-steps' */
                protected __yMainTickSteps: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-y-sub-ticks' */
                protected __showYSubTicks: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-y-sub-tick-steps' */
                protected __ySubTickSteps: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-x-axis' */
                protected __showXAxis: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-show-labels' */
                protected __xShowLabels: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-main-tick-start-value' */
                protected __xMainTickMinValue: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-main-tick-max-width' */
                protected __xMainTickMaxValue: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-main-tick-steps' */
                protected __xMainTickSteps: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-x-sub-ticks' */
                protected __showXSubTicks: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-sub-tick-steps' */
                protected __xSubTickSteps: number | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-family' */
                protected __xLabelFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-size' */
                protected __xLabelFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-size-unit' */
                protected __xLabelFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-weight'  */
                protected __xLabelFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-label-font-color' */
                protected __xLabelFontColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-width' */
                protected __xAxisWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-color' */
                protected __xAxisColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-x-axis-name' */
                protected __showXAxisName: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-name' */
                protected __xAxisName: string | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-family' */
                protected __xAxisNameFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-size' */
                protected __xAxisNameFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-size-unit' */
                protected __xAxisNameFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-weight' */
                protected __xAxisNameFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-font-color' */
                protected __xAxisNameFontColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-decimal-places' */
                protected __xAxisDecimalPlaces: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-unit' */
                protected __xAxisUnit: string | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-x-axis-auto-scaling' */
                protected __xAxisAutoScaling: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-value-format' */
                protected __xAxisFormat: TcHmi.IFunction | null | undefined;
                /**  Internal reference to the attribute 'data-tchmi-y-axis'  */
                protected __yAxis: TcHmiLineChart.YAxis[] | null | undefined;
                /**  Internal reference to the attribute 'data-tchmi-line-graph-descriptions'
                */
                protected __lineGraphDescriptions: TcHmiLineChart.lineGraphDescription[] | null | undefined;
                /**  Internal reference to the attribute 'data-tchmi-line-graph-data' */
                protected __lineGraphData: TcHmiLineChart.Point[][] | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-grid' */
                protected __showGrid: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-background-color' */
                protected __gridBackgroundColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-show-horizontal-lines' */
                protected __gridShowHorizontalLines: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-show-vertical-lines' */
                protected __gridShowVerticalLines: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-line-width' */
                protected __gridLineWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-line-style' */
                protected __gridLineStyle: string | undefined;
                /** Internal reference to the attribute 'data-tchmi-grid-line-color' */
                protected __gridLineColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-show-horizontal-lines' */
                protected __subgridShowHorizontalLines: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-show-vertical-lines' */
                protected __subgridShowVerticalLines: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-line-width' */
                protected __subgridLineWidth: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-line-style' */
                protected __subgridLineStyle: string | undefined;
                /** Internal reference to the attribute 'data-tchmi-subgrid-line-color' */
                protected __subgridLineColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-show-tooltip' */
                protected __showTooltip: boolean | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-format' */
                protected __tooltipFormat: TcHmi.IFunction | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-family' */
                protected __tooltipFontFamily: FontFamily | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-size' */
                protected __tooltipFontSize: number | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-size-unit' */
                protected __tooltipFontSizeUnit: FontSizeUnit | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-weight' */
                protected __tooltipFontWeight: FontWeight | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-font-color' */
                protected __tooltipFontColor: TcHmi.SolidColor | null | undefined;
                /** Internal reference to the attribute 'data-tchmi-tooltip-background-color' */
                protected __tooltipBackgroundColor: TcHmi.Color | null | undefined;
                /** Internal tooltip information */
                protected __tooltipInformation: {
                    show: boolean;
                    isActive: boolean;
                    lineGraph: null | TcHmiCharting.LineGraph;
                    point: {
                        x: number;
                        y: number;
                    };
                };
                /** Event destroyer... */
                private __resizedEventDestroyEvent;
                protected __themeDataLoadedEventDestroyEvent: DestroyFunction | null;
                /** Event handlers */
                protected __mousemoveHandler: (event: MouseEvent) => void;
                protected __mousedownHandler: (event: MouseEvent) => void;
                protected __touchstartHandler: (event: TouchEvent) => void;
                protected __touchmoveHandler: (event: TouchEvent) => void;
                protected __touchendHandler: (event: TouchEvent) => void;
                /** Touch and hold timer */
                protected __holdTimer: number;
                protected __holdTimerDuration: number;
                protected __manipulationInfo: {
                    mousePosition: {
                        x: number;
                        y: number;
                    };
                    offset: {
                        left: number;
                        top: number;
                    };
                };
                /** Helper to avoid unnecessary drawing after resume from detach in case of keepalive. */
                protected __lastDrawnRenderedWidth: number | null | undefined;
                protected __lastDrawnRenderedHeight: number | null | undefined;
                /**
                 * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                 * Call attribute processor functions here to initialize default values!
                 * @function __previnit
                 */
                __previnit(): void;
                /**
                * If raised, all attributes have been set to it's default or dom values.
                * @function __init
                */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                * @function
                */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                * @function
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                * @function
                */
                destroy(): void;
                /**
                * Is raised if the control are resized.
                * @function
                */
                protected __rebuild(): (evt: EventProvider.Event, ctrl: Controls.System.TcHmiControl) => void;
                /**
                * Is called initial and and if size changed.
                * @function
               */
                __drawLineChart(): void;
                /**
                * Is raised if mouseDown on canvasDrawing.
                * @function
                * @callback
                * @param {MouseEvent} e - The event of mouseDown.
                */
                protected __onMouseDown(): (e: MouseEvent) => void;
                /**
               * Is raised if mouseMove on canvasDrawing.
               * @function
               * @callback
               * @param {MouseEvent} e - The event of mouseMove.
               */
                protected __onMouseMoveTooltip(): (e: MouseEvent) => void;
                /**
               * Make the tooltip invisible.
               * @function
               */
                private __invisibleTooltip;
                /**
                * Is raised if touchStart on canvasDrawing.
                * @function
                * @callback
                * @param {TouchEvent} e - The event of touchStart.
                */
                protected __onTouchStart(): (e: TouchEvent) => void;
                /**
                * Is raised if touchMove on document.
                * @function
                * @callback
                * @param {TouchEvent} e - The event of touchMove.
                */
                protected __onTouchMove(): (e: TouchEvent) => void;
                /**
                * Is raised if touchEnd on document.
                * @function
                * @callback
                * @param {TouchEvent} e - The event of touchEnd.
                */
                protected __onTouchEnd(): (e: TouchEvent) => void;
                /**
                * Create a tooltip if the offsetX and offsetY value is on a point.
                * @function
                * @param   {number}    offsetX     -   The x coordinate of the mouse or touch.
                * @param   {number}    offsetY     -   The y coordinate of the mouse or touch.
                */
                protected __createTooltipFromTouch(offsetX: number, offsetY: number): void;
                /**
                * Sets the background value and calls the associated process function.
                * @function
                * @param   {string}    valueNew    -   The new value for the background attribute as json string.
                */
                setSectionsBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the sectionsBackgroundColor object resolver.
                 */
                protected __onResolverForSectionsBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current background value.
                * @function
                * @returns      {string}    The current value of the background member variable as json in string format.
                */
                getSectionsBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
              * Processes the current border-color attribute.
              * @function
              */
                protected __processSectionsBackgroundColor(): void;
                /**
                 * Sets the value of yAxisWidth
                 * @param valueNew The new value for yAxisWidth
                 */
                setYAxisWidth(valueNew: number | null): void;
                /**
                 * Gets the value of yAxisWidth
                 * @returns The current value of yAxisWidth
                 */
                getYAxisWidth(): number | undefined;
                /**
                 * Processes yAxisWidth
                 */
                protected __processYAxisWidth(): void;
                /**
                 * Sets the value of yLabelFontFamily
                 * @param valueNew The new value for yLabelFontFamily
                 */
                setYLabelFontFamily(valueNew: FontFamily | null): void;
                /**
                 * Gets the value of yLabelFontFamily
                 * @returns The current value of yLabelFontFamily
                 */
                getYLabelFontFamily(): string | undefined;
                /**
                 * Processes yLabelFontFamily
                 */
                protected __processYLabelFontFamily(): void;
                /**
                 * Sets the value of yLabelFontSize
                 * @param valueNew The new value for yLabelFontSize
                 */
                setYLabelFontSize(valueNew: number | null): void;
                /**
                 * Gets the value of yLabelFontSize
                 * @returns The current value of yLabelFontSize
                 */
                getYLabelFontSize(): number | undefined;
                /**
                 * Processes yLabelFontSize
                 */
                protected __processYLabelFontSize(): void;
                /**
                 * Sets the value of yLabelFontSizeUnit
                 * @param valueNew The new value for yLabelFontSizeUnit
                 * Possible Values: px, %
                 */
                setYLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Gets the value of yLabelFontSizeUnit
                 * @returns The current value of yLabelFontSizeUnit
                 */
                getYLabelFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Processes yLabelFontSizeUnit
                 */
                protected __processYLabelFontSizeUnit(): void;
                /**
                 * Sets the value of yLabelFontWeight
                 * @param valueNew The new value for yLabelFontWeight
                 * Possible Values: normal, bold
                 */
                setYLabelFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Gets the value of yLabelFontWeight
                 * @returns The current value of yLabelFontWeight
                 */
                getYLabelFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                 * Processes yLabelFontWeight
                 */
                protected __processYLabelFontWeight(): void;
                /**
                 * Sets the value of yMainTickSteps
                 * @param valueNew The new value for yMainTickSteps
                 */
                setYMainTickSteps(valueNew: number | null): void;
                /**
                 * Gets the value of yMainTickSteps
                 * @returns The current value of yMainTickSteps
                 */
                getYMainTickSteps(): number | undefined;
                /**
                 * Processes yMainTickSteps
                 */
                protected __processYMainTickSteps(): void;
                /**
                * Sets the value of showYSubTicks
                * @param valueNew The new value for showYSubTicks
                */
                setShowYSubTicks(valueNew: boolean | null): void;
                /**
                 * Gets the value of showYSubTicks
                 * @returns The current value of showYSubTicks
                 */
                getShowYSubTicks(): boolean | undefined;
                /**
                 * Processes showYSubTicks
                 */
                protected __processShowYSubTicks(): void;
                /**
                 * Sets the value of ySubTickSteps
                 * @param valueNew The new value for ySubTickSteps
                 */
                setYSubTickSteps(valueNew: number | null): void;
                /**
                 * Gets the value of ySubTickSteps
                 * @returns The current value of ySubTickSteps
                 */
                getYSubTickSteps(): number | null | undefined;
                /**
                 * Processes ySubTickSteps
                 */
                protected __processYSubTickSteps(): void;
                /**
                * Sets the value of showXAxis
                * @param valueNew The new value for showXAxis
                */
                setShowXAxis(valueNew: boolean | null): void;
                /**
                 * Gets the value of showXAxis
                 * @returns The current value of showXAxis
                 */
                getShowXAxis(): boolean | undefined;
                /**
                 * Processes showXAxis
                 */
                protected __processShowXAxis(): void;
                /**
                * Sets the value of xShowLabels
                * @param valueNew The new value for xShowLabels
                */
                setXShowLabels(valueNew: boolean | null): void;
                /**
                 * Gets the value of xShowLabels
                 * @returns The current value of xShowLabels
                 */
                getXShowLabels(): boolean | undefined;
                /**
                 * Processes xShowLabels
                 */
                protected __processXShowLabels(): void;
                /**
                 * Sets the value of xMainTickMinValue
                 * @param valueNew The new value for xMainTickMinValue
                 */
                setXMainTickMinValue(valueNew: number | null): void;
                /**
                 * Gets the value of xMainTickMinValue
                 * @returns The current value of xMainTickMinValue
                 */
                getXMainTickMinValue(): number | null | undefined;
                /**
                 * Processes xMainTickMinValue
                 */
                protected __processXMainTickMinValue(): void;
                /**
                 * Sets the value of xMainTickMaxValue
                 * @param valueNew The new value for xMainTickMaxValue
                 */
                setXMainTickMaxValue(valueNew: number | null): void;
                /**
                 * Gets the value of xMainTickMaxValue
                 * @returns The current value of xMainTickMaxValue
                 */
                getXMainTickMaxValue(): number | null | undefined;
                /**
                 * Processes xMainTickMaxValue
                 */
                protected __processXMainTickMaxValue(): void;
                /**
                 * Sets the value of xMainTickSteps
                 * @param valueNew The new value for xMainTickSteps
                 */
                setXMainTickSteps(valueNew: number | null): void;
                /**
                 * Gets the value of xMainTickSteps
                 * @returns The current value of xMainTickSteps
                 */
                getXMainTickSteps(): number | undefined;
                /**
                 * Processes xMainTickSteps
                 */
                protected __processXMainTickSteps(): void;
                /**
                * Sets the value of showXSubTicks
                * @param valueNew The new value for showXSubTicks
                */
                setShowXSubTicks(valueNew: boolean | null): void;
                /**
                 * Gets the value of showXSubTicks
                 * @returns The current value of showXSubTicks
                 */
                getShowXSubTicks(): boolean | undefined;
                /**
                 * Processes showXSubTicks
                 */
                protected __processShowXSubTicks(): void;
                /**
                 * Sets the value of xSubTickSteps
                 * @param valueNew The new value for xSubTickSteps
                 */
                setXSubTickSteps(valueNew: number | null): void;
                /**
                 * Gets the value of xSubTickSteps
                 * @returns The current value of xSubTickSteps
                 */
                getXSubTickSteps(): number | null | undefined;
                /**
                 * Processes xSubTickSteps
                 */
                protected __processXSubTickSteps(): void;
                /**
                 * Sets the value of xLabelFontFamily
                 * @param valueNew The new value for xLabelFontFamily
                 */
                setXLabelFontFamily(valueNew: FontFamily | null): void;
                /**
                 * Gets the value of xLabelFontFamily
                 * @returns The current value of xLabelFontFamily
                 */
                getXLabelFontFamily(): string | undefined;
                /**
                 * Processes xLabelFontFamily
                 */
                protected __processXLabelFontFamily(): void;
                /**
                 * Sets the value of xLabelFontSize
                 * @param valueNew The new value for xLabelFontSize
                 */
                setXLabelFontSize(valueNew: number | null): void;
                /**
                 * Gets the value of xLabelFontSize
                 * @returns The current value of xLabelFontSize
                 */
                getXLabelFontSize(): number | undefined;
                /**
                 * Processes xLabelFontSize
                 */
                protected __processXLabelFontSize(): void;
                /**
                 * Sets the value of xLabelFontSizeUnit
                 * @param valueNew The new value for xLabelFontSizeUnit
                 * Possible Values: px, %
                 */
                setXLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Gets the value of xLabelFontSizeUnit
                 * @returns The current value of xLabelFontSizeUnit
                 */
                getXLabelFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Processes xLabelFontSizeUnit
                 */
                protected __processXLabelFontSizeUnit(): void;
                /**
                 * Sets the value of xLabelFontWeight
                 * @param valueNew The new value for xLabelFontWeight
                 * Possible Values: normal, bold
                 */
                setXLabelFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Gets the value of xLabelFontWeight
                 * @returns The current value of xLabelFontWeight
                 */
                getXLabelFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                 * Processes xLabelFontWeight
                 */
                protected __processXLabelFontWeight(): void;
                /**
                * Sets the xLabelFontColor value and calls the associated process function (processXLabelFontColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the xLabelFontColor attribute as json string.
                */
                setXLabelFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the xLabelFontColor object resolver.
                 */
                protected __onResolverForXLabelFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current xLabelFontColor value.
                * @function
                * @returns      {string}    The current value of the xLabelFontColor member variable as json in string format.
                */
                getXLabelFontColor(): SolidColor | null | undefined;
                /**
              * Processes the current xLabelFontColor attribute.
              * @function
              */
                protected __processXLabelFontColor(): void;
                /**
                 * Sets the value of xAxisWidth
                 * @param valueNew The new value for xAxisWidth
                 */
                setXAxisWidth(valueNew: number | null): void;
                /**
                 * Gets the value of xAxisWidth
                 * @returns The current value of xAxisWidth
                 */
                getXAxisWidth(): number | undefined;
                /**
                 * Processes xAxisWidth
                 */
                protected __processXAxisWidth(): void;
                /**
                * Sets the xAxisColor value and calls the associated process function (processXAxisColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the xAxisColor attribute as json string.
                */
                setXAxisColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the xAxisColor object resolver.
                 */
                protected __onResolverForXAxisColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current xAxisColor value.
                * @function
                * @returns      {string}    The current value of the xAxisColor member variable as json in string format.
                */
                getXAxisColor(): SolidColor | null | undefined;
                /**
              * Processes the current xAxisColor attribute.
              * @function
              */
                protected __processXAxisColor(): void;
                /**
                * Sets the value of showXAxisName
                * @param valueNew The new value for showXAxisName
                */
                setShowXAxisName(valueNew: boolean | null): void;
                /**
                 * Gets the value of showXAxisName
                 * @returns The current value of showXAxisName
                 */
                getShowXAxisName(): boolean | undefined;
                /**
                 * Processes showXAxisName
                 */
                protected __processShowXAxisName(): void;
                /**
                 * Sets the value of xAxisName
                 * @param valueNew The new value for xAxisName
                 */
                setXAxisName(valueNew: string | null): void;
                /**
                 * Gets the value of xAxisName
                 * @returns The current value of xAxisName
                 */
                getXAxisName(): string | null | undefined;
                /**
                 * Processes xAxisName
                 */
                protected __processXAxisName(): void;
                /**
                 * Sets the value of xAxisNameFontFamily
                 * @param valueNew The new value for xAxisNameFontFamily
                 */
                setXAxisNameFontFamily(valueNew: FontFamily | null): void;
                /**
                 * Gets the value of xAxisNameFontFamily
                 * @returns The current value of xAxisNameFontFamily
                 */
                getXAxisNameFontFamily(): string | undefined;
                /**
                 * Processes xAxisNameFontFamily
                 */
                protected __processXAxisNameFontFamily(): void;
                /**
                 * Sets the value of xAxisNameFontSize
                 * @param valueNew The new value for xAxisNameFontSize
                 */
                setXAxisNameFontSize(valueNew: number | null): void;
                /**
                 * Gets the value of xAxisNameFontSize
                 * @returns The current value of xAxisNameFontSize
                 */
                getXAxisNameFontSize(): number | undefined;
                /**
                 * Processes xAxisNameFontSize
                 */
                protected __processXAxisNameFontSize(): void;
                /**
                 * Sets the value of xAxisNameFontSizeUnit
                 * @param valueNew The new value for xAxisNameFontSizeUnit
                 * Possible Values: px, %
                 */
                setXAxisNameFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Gets the value of xAxisNameFontSizeUnit
                 * @returns The current value of xAxisNameFontSizeUnit
                 */
                getXAxisNameFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Processes xAxisNameFontSizeUnit
                 */
                protected __processXAxisNameFontSizeUnit(): void;
                /**
                 * Sets the value of xAxisNameFontWeight
                 * @param valueNew The new value for xAxisNameFontWeight
                 * Possible Values: normal, bold
                 */
                setXAxisNameFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Gets the value of xAxisNameFontWeight
                 * @returns The current value of xAxisNameFontWeight
                 */
                getXAxisNameFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                 * Processes xAxisNameFontWeight
                 */
                protected __processXAxisNameFontWeight(): void;
                /**
                * Sets the xAxisNameFontColor value and calls the associated process function (processXAxisNameFontColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the xAxisNameFontColor attribute as json string.
                */
                setXAxisNameFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the xAxisNameFontColor object resolver.
                 */
                protected __onResolverForXAxisNameFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current xAxisNameFontColor value.
                * @function
                * @returns      {string}    The current value of the xAxisNameFontColor member variable as json in string format.
                */
                getXAxisNameFontColor(): SolidColor | null | undefined;
                /**
              * Processes the current xAxisNameFontColor attribute.
              * @function
              */
                protected __processXAxisNameFontColor(): void;
                /**
                 * Sets the value of xAxisDecimalPlaces
                 * @param valueNew The new value for xAxisDecimalPlaces
                 */
                setXAxisDecimalPlaces(valueNew: number | null): void;
                /**
                 * Gets the value of xAxisDecimalPlaces
                 * @returns The current value of xAxisDecimalPlaces
                 */
                getXAxisDecimalPlaces(): number | undefined;
                /**
                 * Processes xAxisDecimalPlaces
                 */
                protected __processXAxisDecimalPlaces(): void;
                /**
                 * Sets the value of xAxisUnit
                 * @param valueNew The new value for xAxisUnit
                 */
                setXAxisUnit(valueNew: string | null): void;
                /**
                 * Gets the value of xAxisUnit
                 * @returns The current value of xAxisUnit
                 */
                getXAxisUnit(): string | null | undefined;
                /**
                 * Processes xAxisUnit
                 */
                protected __processXAxisUnit(): void;
                /**
                * Sets the value of xAxisAutoScaling
                * @param valueNew The new value for xAxisAutoScaling
                */
                setXAxisAutoScaling(valueNew: boolean | null): void;
                /**
                 * Gets the value of xAxisAutoScaling
                 * @returns The current value of xAxisAutoScaling
                 */
                getXAxisAutoScaling(): boolean | undefined;
                /**
                 * Processes xAxisAutoScaling
                 */
                protected __processXAxisAutoScaling(): void;
                /**
                * Sets the xAxis of the xAxisFormat order attribute.
                * @param {Function} xAxis The new xAxisFormat method.
                * @function
                */
                setXAxisFormat(valueNew: TcHmi.IFunction | null): void;
                /**
                 * The watch callback for the xAxisFormat object resolver.
                 */
                protected __onResolverForXAxisFormatWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IFunction>) => void;
                /**
                 * Gets the current xAxisFormat method.
                 * @returns {Function} the current xAxisFormat method.
                 * @function
                 */
                getXAxisFormat(): IFunction | null | undefined;
                /**
                 * Processes the current xAxisFormat method
                 * @function
                 */
                protected __processXAxisFormat(): void;
                /**
                 * Executes the current xAxisFormat function.
                 * @param first The first message to compare.
                 * @param second The second message to compare.
                 */
                private __executeXAxisFormatFunction;
                /**
                * Sets the value of the member variable 'yAxis' if the new value is not equal to the current value
                * and calls the associated process function (processYAxis) after that.
                * @function
                * @attributeSetter
                * @param   {Array.<ChartYAxisDefinitionList>}    valueNew     -   The new value for yAxis.

                */
                setYAxis(valueNew: TcHmiLineChart.YAxis[] | null): void;
                /**
                 * The watch callback for the yAxis object resolver.
                 */
                protected __onResolverForYAxisWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiLineChart.YAxis[]>) => void;
                /**
               * Returns the current value of the member variable yAxis.
               * @function
               * @attributeGetter
               * @returns {Array.<ChartYAxisDefinitionList>}
               */
                getYAxis(): TcHmiLineChart.YAxis[] | null | undefined;
                /**
                * Processes the current value of yAxis.
                * @function
                */
                protected __processYAxis(): void;
                /**
                * Sets the value of the member variable 'lineGraphDescriptions' if the new value is not equal to the current value
                * and calls the associated process function (processlineGraphDescriptions) after that.
                * @function
                * @attributeSetter
                * @param   {Array.<ChartLineGraphDescriptionDefinitionList>}    valueNew     -   The new value for lineGraphDescriptions.
                */
                setLineGraphDescriptions(valueNew: TcHmiLineChart.lineGraphDescription[] | null): void;
                /**
                 * The watch callback for the lineGraphDescriptions object resolver.
                 */
                protected __onResolverForLineGraphDescriptionsWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiLineChart.lineGraphDescription[]>) => void;
                /**
               * Returns the current value of the member variable lineGraphDescriptions.
               * @function
               * @attributeGetter
               * @returns {Array.<ChartLineGraphDescriptionDefinitionList>}
               */
                getLineGraphDescriptions(): TcHmiLineChart.lineGraphDescription[] | null | undefined;
                /**
                * Processes the current value of lineGraphDescriptions.
                * @function
                */
                protected __processLineGraphDescriptions(): void;
                /**
                * Sets the value of the member variable 'lineGraphData' if the new value is not equal to the current value
                * and calls the associated process function (processLineGraphData) after that.
                * @function
                * @attributeSetter
                * @param   {Array.<ChartLineGraphDataDefinitionList>}    valueNew     -   The new value for lineGraphData.
                */
                setLineGraphData(valueNew: TcHmiLineChart.Point[][] | null): void;
                /**
                 * The watch callback for the lineGraphData object resolver.
                 */
                protected __onResolverForLineGraphDataWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiLineChart.Point[][]>) => void;
                /**
               * Returns the current value of the member variable lineGraphData.
               * @function
               * @attributeGetter
               * @returns {Array.<ChartLineGraphDataDefinitionList>}
               */
                getLineGraphData(): TcHmiLineChart.Point[][] | null | undefined;
                /**
                * Processes the current value of lineGraphData.
                * @function
                */
                protected __processLineGraphData(): void;
                /**
                * Sets the value of showGrid
                * @param valueNew The new value for showGrid
                */
                setShowGrid(valueNew: boolean | null): void;
                /**
                 * Gets the value of showGrid
                 * @returns The current value of showGrid
                 */
                getShowGrid(): boolean | undefined;
                /**
                 * Processes showGrid
                 */
                protected __processShowGrid(): void;
                /**
                * Sets the gridBackgroundColor value and calls the associated process function (processGridBackgroundColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the gridBackgroundColor attribute as json string.
                */
                setGridBackgroundColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the gridBackgroundColor object resolver.
                 */
                protected __onResolverForGridBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current gridBackgroundColor value.
                * @function
                * @returns      {string}    The current value of the gridBackgroundColor member variable as json in string format.
                */
                getGridBackgroundColor(): SolidColor | null | undefined;
                /**
              * Processes the current gridBackgroundColor attribute.
              * @function
              */
                protected __processGridBackgroundColor(): void;
                /**
                * Sets the value of gridShowHorizontalLines
                * @param valueNew The new value for gridShowHorizontalLines
                */
                setGridShowHorizontalLines(valueNew: boolean | null): void;
                /**
                 * Gets the value of gridShowHorizontalLines
                 * @returns The current value of gridShowHorizontalLines
                 */
                getGridShowHorizontalLines(): boolean | undefined;
                /**
                 * Processes gridShowHorizontalLines
                 */
                protected __processGridShowHorizontalLines(): void;
                /**
                * Sets the value of gridShowVerticalLines
                * @param valueNew The new value for gridShowVerticalLines
                */
                setGridShowVerticalLines(valueNew: boolean | null): void;
                /**
                 * Gets the value of gridShowVerticalLines
                 * @returns The current value of gridShowVerticalLines
                 */
                getGridShowVerticalLines(): boolean | undefined;
                /**
                 * Processes gridShowVerticalLines
                 */
                protected __processGridShowVerticalLines(): void;
                /**
                 * Sets the value of gridLineWidth
                 * @param valueNew The new value for gridLineWidth
                 */
                setGridLineWidth(valueNew: number | null): void;
                /**
                 * Gets the value of gridLineWidth
                 * @returns The current value of gridLineWidth
                 */
                getGridLineWidth(): number | undefined;
                /**
                 * Processes gridLineWidth
                 */
                protected __processGridLineWidth(): void;
                /**
                * Sets the value of gridLineStyle
                * @function
                * @param {string} valueNew The new value for gridLineStyle
                */
                setGridLineStyle(valueNew: string | null): void;
                /**
                * Gets the value of gridLineStyle
                * @function
                * @returns {string}
                */
                getGridLineStyle(): string | undefined;
                /**
                * Processes gridLineStyle
                * @function
                */
                protected __processGridLineStyle(): void;
                /**
                * Sets the gridLineColor value and calls the associated process function (processGridLineColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the gridLineColor attribute as json string.
                */
                setGridLineColor(valueNew: TcHmi.SolidColor | null): void;
                /**
                 * The watch callback for the gridLineColor object resolver.
                 */
                protected __onResolverForGridLineColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current gridLineColor value.
                * @function
                * @returns      {string}    The current value of the gridLineColor member variable as json in string format.
                */
                getGridLineColor(): SolidColor | null | undefined;
                /**
              * Processes the current gridLineColor attribute.
              * @function
              */
                protected __processGridLineColor(): void;
                /**
                * Sets the value of subgridShowHorizontalLines
                * @param valueNew The new value for subgridShowHorizontalLines
                */
                setSubgridShowHorizontalLines(valueNew: boolean | null): void;
                /**
                 * Gets the value of subgridShowHorizontalLines
                 * @returns The current value of subgridShowHorizontalLines
                 */
                getSubgridShowHorizontalLines(): boolean | undefined;
                /**
                 * Processes subgridShowHorizontalLines
                 */
                protected __processSubgridShowHorizontalLines(): void;
                /**
                * Sets the value of subgridShowVerticalLines
                * @param valueNew The new value for subgridShowVerticalLines
                */
                setSubgridShowVerticalLines(valueNew: boolean | null): void;
                /**
                 * Gets the value of subgridShowVerticalLines
                 * @returns The current value of subgridShowVerticalLines
                 */
                getSubgridShowVerticalLines(): boolean | undefined;
                /**
                 * Processes subgridShowVerticalLines
                 */
                protected __processSubgridShowVerticalLines(): void;
                /**
                 * Sets the value of subgridLineWidth
                 * @param valueNew The new value for subgridLineWidth
                 */
                setSubgridLineWidth(valueNew: number | null): void;
                /**
                 * Gets the value of subgridLineWidth
                 * @returns The current value of subgridLineWidth
                 */
                getSubgridLineWidth(): number | undefined;
                /**
                 * Processes subgridLineWidth
                 */
                protected __processSubgridLineWidth(): void;
                /**
               * Sets the value of subgridLineStyle
               * @function
               * @param {string} valueNew The new value for subgridLineStyle
               */
                setSubgridLineStyle(valueNew: TcHmiLineChart.LineStyle | null): void;
                /**
                * Gets the value of subgridLineStyle
                * @function
                * @returns {TcHmiTrendLineChart.LineStyle }
                */
                getSubgridLineStyle(): string | undefined;
                /**
                * Processes subgridLineStyle
                * @function
                */
                protected __processSubgridLineStyle(): void;
                /**
                * Sets the subgridLineColor value and calls the associated process function (processSubgridLineColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the subgridLineColor attribute as json string.
                */
                setSubgridLineColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the subgridLineColor object resolver.
                 */
                protected __onResolverForSubgridLineColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current subgridLineColor value.
                * @function
                * @returns      {string}    The current value of the subgridLineColor member variable as json in string format.
                */
                getSubgridLineColor(): SolidColor | null | undefined;
                /**
              * Processes the current subgridLineColor attribute.
              * @function
              */
                protected __processSubgridLineColor(): void;
                /**
                * Sets the value of showTooltip
                * @function
                * @param {boolean} valueNew The new value for showTooltip
                */
                setShowTooltip(valueNew: boolean | null): void;
                /**
                * Gets the value of showTooltip
                * @function
                * @returns {boolean}
                */
                getShowTooltip(): boolean | undefined;
                /**
                * Processes showTooltip
                * @function
                */
                protected __processShowTooltip(): void;
                /**
                * Sets the value of the tooltipFormat order attribute.
                * @param {Function} value The new tooltipFormat method.
                * @function
                */
                setTooltipFormat(valueNew: TcHmi.IFunction | null): void;
                /**
                 * The watch callback for the tooltipFormat object resolver.
                 */
                protected __onResolverForTooltipFormatWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IFunction>) => void;
                /**
                 * Gets the current tooltipFormat method.
                 * @returns {Function} the current tooltipFormat method.
                 * @function
                 */
                getTooltipFormat(): IFunction | null | undefined;
                /**
                 * Processes the current tooltipFormat method
                 * @function
                 */
                protected __processTooltipFormat(): void;
                /**
                * Executes the current tooltipFormat function.
                * @param first The first message to compare.
                * @param second The second message to compare.
                */
                private __executeTooltipFormatFunction;
                /**
                * Sets the value of tooltipFontFamily
                * @function
                * @param {string} valueNew The new value for tooltipFontFamily
                */
                setTooltipFontFamily(valueNew: FontFamily | null): void;
                /**
                * Gets the value of tooltipFontFamily
                * @function
                * @returns {string}
                */
                getTooltipFontFamily(): string | undefined;
                /**
                * Processes tooltipFontFamily
                * @function
                */
                protected __processTooltipFontFamily(): void;
                /**
                * Sets the value of tooltipFontSize
                * @function
                * @param {number} valueNew The new value for tooltipFontSize
                */
                setTooltipFontSize(valueNew: number | null): void;
                /**
                * Gets the value of tooltipFontSize
                * @function
                * @returns {number}
                */
                getTooltipFontSize(): number | undefined;
                /**
                * Processes tooltipFontSize
                * @function
                */
                protected __processTooltipFontSize(): void;
                /**
                * Sets the value of tooltipFontSizeUnit
                * @function
                * @param {string} valueNew The new value for tooltipFontSizeUnit
                * Possible Values: px, %
                */
                setTooltipFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Gets the value of tooltipFontSizeUnit
                * @function
                * @returns {string}
                */
                getTooltipFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                * Processes tooltipFontSizeUnit
                * @function
                */
                protected __processTooltipFontSizeUnit(): void;
                /**
                * Sets the value of tooltipFontWeight
                * @function
                * @param {string} valueNew The new value for tooltipFontWeight
                * Possible Values: normal, bold
                */
                setTooltipFontWeight(valueNew: FontWeight | null): void;
                /**
                * Gets the value of tooltipFontWeight
                * @function
                * @returns {string}
                */
                getTooltipFontWeight(): "Normal" | "Bold" | "Auto" | undefined;
                /**
                * Processes tooltipFontWeight
                * @function
                */
                protected __processTooltipFontWeight(): void;
                /**
                * Sets the tooltipFontColor value and calls the associated process function (processTooltipFontColor).
                * @function
                * @param   {string}    valueNew    -   The new value for the tooltipFontColor attribute as json string.
                */
                setTooltipFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the tooltipFontColor object resolver.
                 */
                protected __onResolverForTooltipFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current tooltipFontColor value.
                * @function
                * @returns {string}
                */
                getTooltipFontColor(): SolidColor | null | undefined;
                /**
                * Processes the current tooltipFontColor attribute.
                * @function
                */
                protected __processTooltipFontColor(): void;
                /**
                * Sets the background value and calls the associated process function.
                * @function
                * @param   {string}    valueNew    -   The new value for the background attribute as json string.
                */
                setTooltipBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the tooltipBackgroundColor object resolver.
                 */
                protected __onResolverForTooltipBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                * Returns the current background value.
                * @function
                * @returns      {string}    The current value of the background member variable as json in string format.
                */
                getTooltipBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
              * Processes the current border-color attribute.
              * @function
              */
                protected __processTooltipBackgroundColor(): void;
            }
            module TcHmiLineChart {
                interface YAxis {
                    id: number;
                    position: TcHmiLineChart.Position;
                    mainTickMinValue?: number;
                    mainTickMaxValue?: number;
                    showLabels?: boolean;
                    labelFontColor?: TcHmi.SolidColor;
                    axisColor?: TcHmi.SolidColor;
                    showAxisName?: boolean;
                    axisName?: string;
                    axisNameFontFamily?: string;
                    axisNameFontSize?: number;
                    axisNameFontSizeUnit?: TcHmi.FontSizeUnit;
                    axisNameFontWeight?: TcHmi.FontWeight;
                    axisNameFontColor?: TcHmi.SolidColor;
                    decimalPlaces?: number;
                    unit?: string;
                    autoScaling?: boolean;
                }
                interface lineGraphDescription {
                    yAxisId: number;
                    lineWidth?: number;
                    lineColor?: TcHmi.SolidColor;
                    pointDot?: boolean;
                    pointDotRadius?: number;
                    pointDotFillColor?: TcHmi.SolidColor;
                    pointDotStrokeWidth?: number;
                    pointDotStrokeColor?: TcHmi.SolidColor;
                }
                enum Position {
                    Left = 0,
                    Right = 1
                }
                interface Point {
                    x: number;
                    y: number;
                }
                enum LineStyle {
                    Dotted = 0,
                    Dashed = 1,
                    Solid = 2
                }
            }
        }
    }
}