// $Id:$

/**
 * Add drop shadows.
 */ 
Drupal.behaviors.dropShadows = function() {
  dropShadows = Drupal.settings.drop_shadow;

  // Add the drop shadows to the page.
  for (var key in dropShadows) {
    var options = {
      'left' : dropShadows[key]['left'],
      'top' : dropShadows[key]['top'],
      'blur' : dropShadows[key]['blur'],
      'opacity' : dropShadows[key]['opacity'],
      'color' : dropShadows[key]['color'],
      'swap' : dropShadows[key]['swap'],
    };
    $(dropShadows[key]['selector']).dropShadow(options);
  }
}
