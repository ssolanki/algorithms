// for objects
var myMap = function ( obj, callback ) {
    var result = {};
    for ( var key in obj ) {
        if ( obj.hasOwnProperty(key ) ) {
            if ( typeof callback === 'function' ) {
                result[ key ] = callback.call( obj, obj[ key ], key, obj );
            }
        }
    }
    return result;
};
// for arrays
var myMap2 = function(arr,callback){
	var result = [];
	for(var i=0;i<arr.length;i++){
		//
		if ( typeof callback === 'function' ) {
      result[ i ] = callback.call( arr, arr[ i ] );
    }
	}
	return result;
}
var myObject = { 'a': 1, 'b': 2, 'c': 3 };

var newObject = myMap( myObject, function ( value, key ) {
    return value * value;
});
console.log(newObject,myObject);

var arr = [1,2,3,4,5];
var sqArr = myMap2(arr, function(val){
	return val*val;
});

 
Array.prototype.myMap = function(callback) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(callback(this[i]))
  }
  return result;
}

var square = function(n) {
  return n * n;
};

var b = arr.myMap(square);
console.log(b)