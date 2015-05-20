/**
 * Created by gurushantu on 5/20/2015.
 */
angular.module('invoice')
    .controller('customerInvoiceCtrl', ['$scope', '$stateParams', 'invoiceFactory', 'customerFactory', function($scope, $stateParams, invoiceFactory, customerFactory){
        $scope.cid = $stateParams.custId;
        console.log( $scope.cid);
        $scope.customerinvoices = [];
        $scope.outstandingAmt = 0;
        $scope.invoices = invoiceFactory.invoiceList;
        console.log($scope.invoices);
        for(var i=0; i< $scope.invoices.length; i++){
            if($scope.invoices[i].custDetails.id == $scope.cid){
                $scope.customerinvoices.push($scope.invoices[i]);
                if($scope.invoices[i].paid != true)
                $scope.outstandingAmt = $scope.outstandingAmt + $scope.invoices[i].totalcost;
            }
        }

        console.log($scope.customerinvoices);
    }]);