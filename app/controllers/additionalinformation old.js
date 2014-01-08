//var args = arguments[0] || {};


// Create Table Data
var tableData = [];
tableData.push(createRow('VCF001', 'Test product one - this is a really really really really long description.',   4, 2.99));
tableData.push(createRow('VCF002', 'Test product two',   1, 12.99));
tableData.push(createRow('VCF003', 'Test product three', 3, 1.50));
 
// Set Table Data
$.myTable.setData(tableData);
 
// Resource Clean-Up
tableData = null;
 
// Open Index
//$.index.open();


function createRow(Sku, Name, Qty, Price)
{
    // Create Table Row
    var tableRow = Ti.UI.createTableViewRow({ height: 50 });
 
    // Create Table Row Columns
    var skuView   = Ti.UI.createView({ left : 0,     width : "25%", height: Ti.UI.Size, backgroundColor : "blue"   });
    var nameView  = Ti.UI.createView({ left : "25%", width : "25%", height: Ti.UI.Size, backgroundColor : "red"    });
    var qtyView   = Ti.UI.createView({ left : "50%", width : "25%", height: Ti.UI.Size, backgroundColor : "green"  });
    var priceView = Ti.UI.createView({ left : "75%", width : "25%", height: Ti.UI.Size, backgroundColor : "yellow" });
 
    // Create Table Row Column Labels
    skuView.add(Ti.UI.createLabel({   top: 5, right: 5, bottom: 5, left: 5, text: Sku   }));
    nameView.add(Ti.UI.createLabel({  top: 5, right: 5, bottom: 5, left: 5, text: Qty   }));
    qtyView.add(Ti.UI.createLabel({   top: 5, right: 5, bottom: 5, left: 5, text: Name  }));
    priceView.add(Ti.UI.createLabel({ top: 5, right: 5, bottom: 5, left: 5, text: Price }));
 
    // Add Columns To Table Row
    tableRow.add(skuView);
    tableRow.add(nameView);
    tableRow.add(qtyView);
    tableRow.add(priceView);
 
    // Resource Clean-Up
    skuView = nameView = qtyView = priceView = null;
 
    // Finished
    return tableRow;
}
 

