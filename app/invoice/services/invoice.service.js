/**
 * Created by gurushantu on 5/19/2015.
 */

angular.module('invoice').factory('invoiceFactory', function(){
    return({
        invoiceList: [
            {
                id: 1001,
                custDetails: {id:100, name:'ABCD', city:'Pune'},
                itemList:[{name: 'Pen', cost: '15', qty: '2', costofItem: 30}],
                paid: true,
                totalcost: 30
            },
            {
                id: 1002,
                custDetails: {id:101, name:'XYZ', city:'Bombay'},
                itemList: [{name: 'Pen', cost: '20', qty: '10', costofItem: 200 }, {name: 'notebook', cost: '50', qty:'6', costofItem: 300}],
                paid: false,
                totalcost: 500
            }
        ],
        addInvoice : function(invoicelist){
            this.invoiceList.push(invoicelist);
        }
    })
});

angular.module('invoice').factory('itemlistFactory', function(){
    return({
        itemList: [],
        totalcst: 0,
        addItems : function(itemlist){
            this.itemList.push(itemlist);
        }
    })
});