# swalExtend

An extender for SweetAlert buttons. Allows you to add more than two buttons. 

3/17/2017 - Recent update. Need to reference a function which calls swal.

4/5/2017  - Fixed issue with click functions.

6/22/2017 - Added individual color options, new params for function parameters, removed hasCallBack.

## How to Use

    <script src="swalExtend.js"></script>
    <link rel="stylesheet" type="text/css" href="swalExtend.css">

1. Specify how many buttons you want
2. Give an array of button titles
3. If your SweetAlert has a cancel button mark hasCancelButton as true
4. Optional list of classNames for each button
5. Array of functions for each buttons' click

Note: SweetAlerts' callback function will still work for the original two buttons.

## Example
```javascript

var swalFunction = function(){ 
  swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false
    },
    function(){
      swal("Deleted!", "Your imaginary file has been deleted.", "success");
    });
};

$("button").click(function() {    
    swalExtend({
        swalFunction: swalFunction,
        hasCancelButton: true,
        buttonNum: 2,
        buttonColor: ["blue", "green"]
        buttonNames: ["maybe delete", "probably/partially delete"],
        clickFunctionList: [
            function() {
                console.debug('ONE BUTTON');
            }, 
            function() {
                console.debug('TWO BUTTON');
            }
        ]
    });
  });
