var myModule;
!function(){
"use strict"

	myModule = function(){
		return{
			init:function(){			
				this.pageLoad('#insurance', 'insurance.html')
			},
			pageLoad:function(conatiner, url){
				$(conatiner).load(url, function(response, status, xhr){
					(status === "success") ? console.log("Page Load Status " + status) : console.log("Page Load Status " + status)
				});
			}

		}

	}
()}(),
$(document).ready(function(){
	myModule.init();	
});