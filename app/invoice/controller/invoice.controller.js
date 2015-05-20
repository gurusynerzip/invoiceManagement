/**
 * Created by gurushantu on 5/19/2015.
 */

angular.module('invoice').controller('invoiceController',['$scope', 'invoiceFactory','itemlistFactory','customerFactory', '$stateParams', function($scope, invoiceFactory, itemlistFactory, customerFactory, $stateParams){
    $scope.id = $stateParams.invoiceId;
    $scope.customerList = customerFactory.customers;
    $scope.singalInvoice = [];
    $scope.itemslst = [];
    $scope.success = false;
    $scope.createInvoice = function(){
        $scope.calid = invoiceFactory.invoiceList.length + 1001;
        $scope.invoiceObj = {
                    'id': $scope.calid,
                    'custDetails': {'id':$scope.invoiceCust.id, 'name': $scope.invoiceCust.name, 'city': $scope.invoiceCust.city},
                    'itemList': itemlistFactory.itemList,
                    'paid': $scope.paid,
                    'totalcost': itemlistFactory.totalcst
        };

        invoiceFactory.addInvoice($scope.invoiceObj);
        $scope.success = true;
        $('#msgpanel').delay(1500).fadeOut();
        $scope.itemslst = [];
        itemlistFactory.itemList = [];
        itemlistFactory.totalcst = 0;
        $scope.totalCost = 0;
        $scope.itemName = '';
        $scope.itemCost = '';
        $scope.itemQuantity = '';
        $scope.invoiceCust = '';
        $scope.paid = false;
    }

    $scope.totalCost = 0;
    $scope.AddItem = function(){
        //if($scope.itemCost != '' && $scope.itemQuantity != ''){ }
        $scope.itemObj = {'name': $scope.itemName, 'cost': $scope.itemCost, 'qty': $scope.itemQuantity, 'costofItem': ($scope.itemCost * $scope.itemQuantity) };
        itemlistFactory.addItems($scope.itemObj);
        itemlistFactory.totalcst = itemlistFactory.totalcst + ($scope.itemCost * $scope.itemQuantity);
        //$scope.success = true;
        $scope.itemName = '';
        $scope.itemCost = '';
        $scope.itemQuantity = '';
        $scope.totalCost = itemlistFactory.totalcst;
        $scope.itemslst = itemlistFactory.itemList;
    }
   // $scope.itemslst = itemlistFactory.itemList;

    $scope.invoices = invoiceFactory.invoiceList;

    for(var i=0; i < $scope.invoices.length; i++){
        if($scope.invoices[i].id == $scope.id){
            $scope.singalInvoice = $scope.invoices[i];
              if($scope.singalInvoice.paid == true){
                  $scope.totalamount = 0;
              }else { $scope.totalamount = $scope.singalInvoice.totalcost}
        }
    }
}]);