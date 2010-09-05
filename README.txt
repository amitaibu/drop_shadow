$Id: INSTALL.txt,v 1.1.4.1 2009/07/24 09:54:53 yhager Exp $

Rounded corners is a wrapper module around the corner jQuery plugin 
http://www.malsup.com/jquery/corner/

This module also provides an API function that allows adding javascript corner()
commands via PHP.

For example, copy this code snippet to your custom module (change the "foo" in 
the function name to be your module's name).

/**
 * Implementation of hook_init().
 *
 * Add round corners on the top of the message area.
 */
function foo_corners_init() {
  $commands[] = array('selector' => '.messages');
  // Add the rounded corners.
  rounded_corners_add_corners($commands);
  
  // Add an example message.
  drupal_set_message(t('This message should have the top with rounded corners.'));
}