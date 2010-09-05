// $Id:$

/**
 * Add rounded corners.
 */ 
Drupal.behaviors.roundedcorners = function() {
  roundedCorners = Drupal.settings.rounded_corners;

  // Add the rounded corners to the page.
  for (var key in roundedCorners) {
    $(roundedCorners[key]['selector']).corner(roundedCorners[key]['effect'] + ' ' + roundedCorners[key]['corners'] + ' ' + roundedCorners[key]['effect']);
  }
}
