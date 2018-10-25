import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-colors',
  templateUrl: './system-colors.component.html',
  styleUrls: ['./system-colors.component.scss']
})
export class SystemColorsComponent implements OnInit {

  colors: any[] = [
    {
      "variableName": "--brand-primary",
      "colorCode": "#0071bc",
      "desc": "this defines the company's brand color which doubles as the primary color for the system"
    },
    {
      "variableName": "--brand-secondary",
      "colorCode": "#3fa9f5",
      "desc": "this defines the company's secondary brand color which doubles as a secondary brand color for the system"
    },
    {
      "variableName": "--success",
      "colorCode": "#22ce8b",
      "desc": "On success"
    },
    {
      "variableName": "--success-lite",
      "colorCode": "#e9faf3",
      "desc": "A lighter shade of the success color"
    },
    {
      "variableName": "--error",
      "colorCode": "#f46363",
      "desc": "On error"
    },
    {
      "variableName": "--error-lite",
      "colorCode": "#fef0f0",
      "desc": "A lighter shade of the error color"
    },
    {
      "variableName": "--warning",
      "colorCode": "#ffcd54",
      "desc": "the warning shade"
    },
    {
      "variableName": "--warning-lite",
      "colorCode": "#fff7ea",
      "desc": "A lighter shade of the warning color"
    },
    {
      "variableName": "--text-primary",
      "colorCode": "#040e28",
      "desc": "the primary font color"
    },
    {
      "variableName": "--text-secondary",
      "colorCode": "#646d82",
      "desc": "the secondary font color"
    },
    {
      "variableName": "--disabled",
      "colorCode": "#a6b1c2",
      "desc": "the shade that defines an element's disabled state"
    },
    {
      "variableName": "--shadow-color",
      "colorCode": "rgba(148, 148, 148, 0.25)",
      "desc": "the shade that defines an element's drop shadow"
    },
    {
      "variableName": "--bg-grey-dark",
      "colorCode": "#dce1ea",
      "desc": "shades of grey"
    },
    {
      "variableName": "--bg-grey-medium",
      "colorCode": "#e6eaf0",
      "desc": "shades of grey"
    },
    {
      "variableName": "--bg-grey-light",
      "colorCode": "#f0f2f7",
      "desc": "shades of grey"
    },
    {
      "variableName": "--bg-grey-lighter",
      "colorCode": "#f9fafc",
      "desc": "shades of grey"
    },
    {
      "variableName": "--main-bg-color",
      "colorCode": "#f0f2f7",
      "desc": "app background color"
    },
    {
      "variableName": "--table-row-hover",
      "colorCode": "#d8e5f1",
      "desc": "the table row on hover state"
    },
    {
      "variableName": "--primary-button-color",
      "colorCode": "#1F7FFF",
      "desc": "primary button"
    },
    {
      "variableName": "--input-disabled-bg",
      "colorCode": "#f9fafc",
      "desc": "disabled input field background color"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
