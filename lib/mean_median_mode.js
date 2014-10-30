var MeanMedianMode = function() {
  //your code here

  this.mean = function() {

    var sum = 0,
        numInputs = 0,
        i = 0;

    //Checks arguments for an array of arguments
    //Or for multiple arguments
    if(arguments.length > 1) {

      numInputs = arguments.length;

      for(i = 0; i < numInputs; i++) {

        sum += arguments[i];
      }

    } else {

      numInputs = arguments[0].length;

      for(i = 0; i < numInputs; i++) {

        sum += arguments[0][i];
      }
    }

    return (sum / numInputs);
  };
  //End mean function

  this.median = function() {

    var listMedian = 0,
        listLength = 0,
        sortedList = [];

    //Checks arguments for an array of arguments
    //Or for multiple arguments
    if(arguments.length > 1) {

      //Splices, sorts, and inserts arguments into a new array sortedList
      sortedList = Array.prototype.slice.call(arguments).sort();

    } else {

      //Splices, sorts, and inserts arguments into a new array sortedList
      sortedList = Array.prototype.slice.call(arguments[0]).sort();
    }

    listLength = sortedList.length;

    //Checks for an even number of items to check
    if(listLength % 2 === 0) {

      //If the list has an even number of items
      //Takes the average of the center 2 items as the median
      listMedian = (sortedList[listLength / 2] + sortedList[(listLength / 2) + 1]) / 2;

    } else {

      //If the list has an odd number of items
      //Takes the center item, Math.floor is used to get an integer
      listMedian = sortedList[Math.floor(listLength / 2)];

    }

    return listMedian;

  };
  //End median function

  this.mode = function() {

    var listMode,
        currMode,
        highCount = 0,
        currCount = 0,
        sortedList = [];

    //Checks arguments for an array of arguments
    //Or for multiple arguments
    if(arguments.length > 1) {

      sortedList = Array.prototype.slice.call(arguments).sort();

    } else {

      sortedList = Array.prototype.slice.call(arguments[0]).sort();
    }

    for(var i = 0; i < sortedList.length; i++){

      //On first loop, sets current Mode to the first item
      if(i === 0) {

        currMode = sortedList[i];
      }

      //Compares the item with the current Mode
      //if they are equal, increments the current Count
      if(currMode === sortedList[i]) {

        currCount++;

      //If not, it resets the current Count
      //sets current Mode
      } else {
        currMode = sortedList[i];
        currCount = 0;
      }

      //At the end of the loop if the current Count is higher
      //than the high Count, sets the list Mode to the current Mode
      //and the high Count to the current Count
      if(currCount > highCount) {

        highCount = currCount;
        listMode = currMode;
      }

    }

    return listMode;
  };
  //End mode function

};

var mmm = new MeanMedianMode();
module.exports = mmm;
