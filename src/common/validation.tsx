
export function PhoneNumber(inputtxt: any) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputtxt.match(phoneno)) {
      return true;
    }
    else {
      return false;
    }
  }