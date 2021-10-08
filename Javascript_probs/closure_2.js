var add= (function(){
      var counter=0;
      return function(){counter+=1; return counter}
})();
document.write("<br> 1st time: "+add());
document.write("<br> 2nd time: "+add());
document.write("<br> 3rd time: "+add());