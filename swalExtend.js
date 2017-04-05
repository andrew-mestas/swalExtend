    // Andrew Mestas 2016

    function swalExtend(params){
        params.classNames = params.classNames || [];
        if(params.swalFunction === undefined) {
          swal("swalExtend", "No sweetalert function specified.", "error");
          return;
        }
        if(params.buttonNum < 1){
          swal("swalExtend", "Need at least one more button. Got a number less than 1.", "error" );
          return;
        }
        if(params.buttonNames.length == 0){
           swal("swalExtend", "No button names specified.", "warning");
          return;
        }
        if(params.buttonNames.length != params.buttonNum){
           swal("swalExtend", "Number of buttons wanted does not match button names length.", "error");
          return;
        }
        if(params.classNames.length > params.buttonNames.length){
          swal("swalExtend", "Number of classNames in list is longer that intended buttons", "error");
          return;
        }
        if(params.hasCallback === undefined){
          swal("swalExtend", "hasCallback property is not defined.", "error");
          return;
        }
        params.swalFunction();

        $(".confirm").on('click', function(){
          $(".swalExtendButton").hide();
        })

        if(params.hasCancelButton){
          var container = document.querySelector(".sa-button-container");
          var cancel = document.querySelector(".cancel");
          var c = container.removeChild(cancel);
        }

        for(var i=0;i<params.buttonNum; i++){
         if(document.getElementsByClassName("confirm").length < params.buttonNum+1){
            var itm = document.getElementsByClassName("sa-confirm-button-container")[0];
            var cln = itm.cloneNode(true);
            document.getElementsByClassName("sa-button-container")[0].appendChild(cln);

            var t = document.getElementsByClassName("confirm")[i+1];
            var div = document.createElement("div");
            div.className = t.className;
            div.style.cssText = t.style.cssText;
            div.innerHTML = t.innerHTML;
            t.parentNode.replaceChild(div, t);
             
            if(div!= undefined){
              div.innerHTML = params.buttonNames[i] || div.innerHTML;
              var cl = div.className;
              var add = params.classNames[i] == undefined ? "" : params.classNames[i];
              div.className = cl + " divbutton " + add + " swalExtendButton";
            }

            if(params.clickFunctionList[i]){
              div.addEventListener("click", params.clickFunctionList[i]);
              div.addEventListener("click", function(){
                sweetAlert.close();
                $(".swalExtendButton").hide();
              })
            }
        }
       if(params.hasCancelButton){
          container.appendChild(c);
        }
      };
      params.swalFunction();
      $(".swalExtendButton").show();
    };

