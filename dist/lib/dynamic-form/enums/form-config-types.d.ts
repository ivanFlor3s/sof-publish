/**
 * Representa el tipo de campo de un formulario
 */
export declare enum FormConfigTypes {
    Text = "text",
    DenseText = "dense-text",
    TextArea = "text-area",
    Number = "number",
    Checkbox = "checkbox",
    Radio = "radio",
    Select = "select",
    Autocomplete = "autocomplete",
    Time = "time",
    Date = "date",
    File = "file",
    Phone = "phone",
    Password = "password",
    EmptyCol = "empty-col",
    CheckboxGroup = "checkbox-group"
}
export declare type FieldControlType = FormConfigTypes.Text | FormConfigTypes.DenseText | FormConfigTypes.TextArea | FormConfigTypes.Number | FormConfigTypes.Checkbox | FormConfigTypes.Radio | FormConfigTypes.Select | FormConfigTypes.Autocomplete | FormConfigTypes.Date | FormConfigTypes.Time | FormConfigTypes.File | FormConfigTypes.Phone | FormConfigTypes.Password | FormConfigTypes.CheckboxGroup;
