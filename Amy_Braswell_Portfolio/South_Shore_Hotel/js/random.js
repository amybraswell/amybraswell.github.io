


var Quotation=new Array() // do not change this!
Quotation[0] = "First Article goes here...";
Quotation[1] = "Second Article goes here...";
Quotation[2] = "Third Article goes here...";
Quotation[3] = "Fourth Article goes here...";
Quotation[4] = "Fifth Article goes here..."
var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));
function showQuotation(){document.write(Quotation[whichQuotation]);}
showQuotation();