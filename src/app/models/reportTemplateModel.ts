import { Column } from "./column";

export class ReportTemplateModel {
    title: string;
    description: string;
    id:string;
    columns: Column[];
}