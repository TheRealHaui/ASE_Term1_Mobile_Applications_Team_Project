var args = arguments[0] || {};

/* no close button for iOS as described in   http://docs.appcelerator.com/titanium/3.0/#!/guide/Alloy_Controllers
 * because iOS is not a targed
 */

// initialize the labels
$.lblFirstname.text = args.firstname || '';
$.lblLastname.text = args.lastname || '';
$.lblAddress.text = args.address || '';
$.lblEmail.text = args.emailAddress || '';
$.lblTelefonNo.text = args.telephonNumber || '';


