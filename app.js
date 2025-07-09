(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of items to buy - pre-populated with 5 items
    var toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "apples", quantity: 5 },
      { name: "bread", quantity: 2 },
      { name: "milk", quantity: 1 },
      { name: "chocolate", quantity: 3 }
    ];

    // List of bought items - initially empty
    var boughtItems = [];

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

    service.buyItem = function (itemIndex) {
      // Remove item from toBuyItems
      var item = toBuyItems.splice(itemIndex, 1)[0];
      // Add it to boughtItems
      boughtItems.push(item);
    };
  }

})();
