// eslint-disable-next-line
(function (window) {
  function myLibrary() {
    function fullName(firstName, lastName) {
      // eslint-disable-next-line
      return alert(firstName + ' ' + lastName + '!');
    }

    const myLibraryObject = {
      fullName
    };

    return myLibraryObject;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = myLibrary();
  } else if (typeof window.customWidget === 'undefined') {
    window.customWidget = myLibrary();
  }
}(window));
