/**
 * SofAlert button config
 */
export class ButtonConfig {
    constructor(label) {
        /**
         * Material button type. Default: basic
         */
        this.type = 'basic';
        this.labelKey = label;
    }
    get basic() {
        this.type = "basic";
        return this;
    }
    get raised() {
        this.type = "raised";
        return this;
    }
    get stroked() {
        this.type = "stroked";
        return this;
    }
    get flat() {
        this.type = "flat";
        return this;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWNvbmZpZy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL3NvZi1hbGVydC9jbGFzc2VzL2J1dHRvbi1jb25maWcuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxNQUFNLE9BQU8sWUFBWTtJQVdyQixZQUFtQixLQUFhO1FBTGhDOztXQUVHO1FBQ0gsU0FBSSxHQUE0QyxPQUFPLENBQUM7UUFHcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQVcsS0FBSztRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxJQUFXLE1BQU07UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBTb2ZBbGVydCBidXR0b24gY29uZmlnXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29uZmlnIHtcclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNsYXRpb24ga2V5XHJcbiAgICAgKi9cclxuICAgIGxhYmVsS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXRlcmlhbCBidXR0b24gdHlwZS4gRGVmYXVsdDogYmFzaWNcclxuICAgICAqL1xyXG4gICAgdHlwZTogJ2Jhc2ljJyB8ICdyYWlzZWQnIHwgJ3N0cm9rZWQnIHwgJ2ZsYXQnID0gJ2Jhc2ljJztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubGFiZWxLZXkgPSBsYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGJhc2ljKCk6IEJ1dHRvbkNvbmZpZyB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJiYXNpY1wiO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmFpc2VkKCk6IEJ1dHRvbkNvbmZpZyB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJyYWlzZWRcIjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHN0cm9rZWQoKTogQnV0dG9uQ29uZmlnIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSBcInN0cm9rZWRcIjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGZsYXQoKTogQnV0dG9uQ29uZmlnIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSBcImZsYXRcIjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuIl19