import { Column } from "./column";

export class ReportTemplateModel {
    title: string;
    description: string;
    columns: Column[];
}