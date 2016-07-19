# swalExtend

An extender for SweetAlert buttons. Allows you to add more than two buttons. 

## How to Use

1. Specify how many buttons you want
2. Give an array of button titles
3. If your SweetAlert has a cancel button mark hasCancelButton as true
4. Optional list of classNames for each button
5. Array of functions for each buttons' click

Note: SweetAlerts' callback function will still work for the original two buttons.

## Example
```javascript

 swalExtend({
    buttonNum: 2,
    buttonNames: ["Another Option", "Cool button"],
    className: ["redButton", "blueButton"],
    hasCancelButton: true,
    clickFunctionList: [ 
      function(){
        some cool red button function...
      }, 
      function(){
        some cool button function...
      }]
    });
