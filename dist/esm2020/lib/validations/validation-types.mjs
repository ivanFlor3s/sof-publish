/**
 * Todos los disntintos tipos de validacion
 */
export var ValidationTypes;
(function (ValidationTypes) {
    ValidationTypes["Required"] = "required";
    ValidationTypes["Min"] = "min";
    ValidationTypes["Max"] = "max";
    ValidationTypes["Function"] = "function";
    ValidationTypes["MinLength"] = "minLength";
    ValidationTypes["MaxLength"] = "maxLength";
    ValidationTypes["Pattern"] = "pattern";
    ValidationTypes["MinDate"] = "minDate";
    ValidationTypes["MaxDate"] = "maxDate";
    ValidationTypes["AfterOrEqualTo"] = "afterOrEqualTo";
    ValidationTypes["BeforeOrEqualTo"] = "beforeOrEqualTo";
    ValidationTypes["MaxFileSize"] = "maxFileSize";
    ValidationTypes["AcceptedTypes"] = "AcceptedTypes";
    ValidationTypes["Email"] = "email";
    // Cross Field Validations (requires fieldTarget)
    ValidationTypes["RequiredIf"] = "requiredIf";
    ValidationTypes["RequiredIfFieldIsEmpty"] = "requiredIfFieldIsEmpty";
    ValidationTypes["RequiredIfFieldIsNotEmpty"] = "requiredIfFieldIsNotEmpty";
    ValidationTypes["LessOrEqualTo"] = "lessOrEqualTo";
    ValidationTypes["MoreOrEqualTo"] = "moreOrEqualTo";
})(ValidationTypes || (ValidationTypes = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvdmFsaWRhdGlvbnMvdmFsaWRhdGlvbi10eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLGVBcUJUO0FBckJILFdBQVksZUFBZTtJQUN2Qix3Q0FBcUIsQ0FBQTtJQUNyQiw4QkFBVyxDQUFBO0lBQ1gsOEJBQVcsQ0FBQTtJQUNYLHdDQUFxQixDQUFBO0lBQ3JCLDBDQUF1QixDQUFBO0lBQ3ZCLDBDQUF1QixDQUFBO0lBQ3ZCLHNDQUFtQixDQUFBO0lBQ25CLHNDQUFtQixDQUFBO0lBQ25CLHNDQUFtQixDQUFBO0lBQ25CLG9EQUFpQyxDQUFBO0lBQ2pDLHNEQUFtQyxDQUFBO0lBQ25DLDhDQUEyQixDQUFBO0lBQzNCLGtEQUErQixDQUFBO0lBQy9CLGtDQUFlLENBQUE7SUFDZixpREFBaUQ7SUFDakQsNENBQXlCLENBQUE7SUFDekIsb0VBQWlELENBQUE7SUFDakQsMEVBQXVELENBQUE7SUFDdkQsa0RBQStCLENBQUE7SUFDL0Isa0RBQStCLENBQUE7QUFDakMsQ0FBQyxFQXJCUyxlQUFlLEtBQWYsZUFBZSxRQXFCeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVG9kb3MgbG9zIGRpc250aW50b3MgdGlwb3MgZGUgdmFsaWRhY2lvblxyXG4gKi9cclxuZXhwb3J0IGVudW0gVmFsaWRhdGlvblR5cGVzIHtcclxuICAgIFJlcXVpcmVkID0gJ3JlcXVpcmVkJyxcclxuICAgIE1pbiA9ICdtaW4nLFxyXG4gICAgTWF4ID0gJ21heCcsXHJcbiAgICBGdW5jdGlvbiA9ICdmdW5jdGlvbicsXHJcbiAgICBNaW5MZW5ndGggPSAnbWluTGVuZ3RoJyxcclxuICAgIE1heExlbmd0aCA9ICdtYXhMZW5ndGgnLFxyXG4gICAgUGF0dGVybiA9ICdwYXR0ZXJuJyxcclxuICAgIE1pbkRhdGUgPSAnbWluRGF0ZScsXHJcbiAgICBNYXhEYXRlID0gJ21heERhdGUnLCBcclxuICAgIEFmdGVyT3JFcXVhbFRvID0gJ2FmdGVyT3JFcXVhbFRvJyxcclxuICAgIEJlZm9yZU9yRXF1YWxUbyA9ICdiZWZvcmVPckVxdWFsVG8nLFxyXG4gICAgTWF4RmlsZVNpemUgPSAnbWF4RmlsZVNpemUnLFxyXG4gICAgQWNjZXB0ZWRUeXBlcyA9ICdBY2NlcHRlZFR5cGVzJyxcclxuICAgIEVtYWlsID0gJ2VtYWlsJyxcclxuICAgIC8vIENyb3NzIEZpZWxkIFZhbGlkYXRpb25zIChyZXF1aXJlcyBmaWVsZFRhcmdldClcclxuICAgIFJlcXVpcmVkSWYgPSAncmVxdWlyZWRJZicsXHJcbiAgICBSZXF1aXJlZElmRmllbGRJc0VtcHR5ID0gJ3JlcXVpcmVkSWZGaWVsZElzRW1wdHknLFxyXG4gICAgUmVxdWlyZWRJZkZpZWxkSXNOb3RFbXB0eSA9ICdyZXF1aXJlZElmRmllbGRJc05vdEVtcHR5JyxcclxuICAgIExlc3NPckVxdWFsVG8gPSAnbGVzc09yRXF1YWxUbycsXHJcbiAgICBNb3JlT3JFcXVhbFRvID0gJ21vcmVPckVxdWFsVG8nXHJcbiAgfSJdfQ==