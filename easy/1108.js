/**
 * 1108. Defanging an IP Address
 */

var defangIPaddr = function (address) {
    let splitAddress = address.split(".");
    return splitAddress.join("[.]");
};

