$Id: INSTALL.txt,v 1.1.4.1 2009/07/24 09:54:53 yhager Exp $

Drop shadow is a wrapper module around the round shadow jQuery plugin 
http://plugins.jquery.com/project/DropShadow

This module also provides an API function that allows adding javascript 
dropShadow() commands via PHP.

For example, copy this code snippet to your custom module (change the "foo" in 
the function name to be your module's name).

/**
 * Implementation of hook_init().
 *
 * Add drop shadows on the top of the message area.
 */
function foo_init() {
  $commands[] = array('selector' => '.messages');
  
  // Add the drop shadow.
  drop_shadow_add_shadow($commands);
  
  // Add an example message.
  drupal_set_message(t('This message should have the top with rounded corners.'));
}