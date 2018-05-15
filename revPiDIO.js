var ffi = require('ffi');
var appRoot = require('app-root-path');

var lib2 = ffi.Library(appRoot + '/lib/libPiTest.so',{
    'getBit': ['int', [ 'uint32', 'uint32']],
    'setBit': ['int', [ 'uint32', 'uint32', 'uint32']]
});

function piGetBit(offset, bit){

	return lib2.getBit(offset,bit);
	}

function piSetBit(offset, bit, value){
	return lib2.setBit(offset,bit,value);
}


exports.read = function(offset, bit) {
    var result = piGetBit(offset, bit);
    return result; 
}


exports.write = function(offset, bit, value) {
    piSetBit(offset, bit, value);
}
