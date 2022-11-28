/**
 * Bypass e-ujian.com modal alert
 * with removing the modal element
 * with class "stop_the_page" and class "blocking_the_page"
 *
 * @author: @IhsanDevs
 * @copyright: ihsandevs.com
 * @license: MIT
 * @version: 1.0.0
 */

function bypass() {
  try {
    // Get the modal element
    var modal = document.getElementsByClassName("stop_the_page")[0];
    var modal2 = document.getElementsByClassName("blocking_the_page")[0];

    // Remove the modal element
    modal.parentNode.removeChild(modal);
    modal2.parentNode.removeChild(modal2);
  } catch (error) {
    // console.error(error);
  }
}

// show alert
alert("Bypassed by Ihsan Devs!");
