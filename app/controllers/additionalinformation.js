var args = arguments[0] || {};

/* no close button for iOS as described in   http://docs.appcelerator.com/titanium/3.0/#!/guide/Alloy_Controllers
 * because iOS is not a targed
 */

// initialize the labels
$.lblFirstname.text = args.get("firstname") || '';
$.lblLastname.text = args.get("lastname") || '';
$.lblAddress.text = args.get("address") || '';
$.lblEmail.text = args.get("emailAddress") || '';
$.lblTelefonNo.text = args.get("telephonNumber") || '';