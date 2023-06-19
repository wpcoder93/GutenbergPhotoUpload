<?php

/**
 * Plugin Name: Gutenberg Upload Image
 */
if ( !defined( 'ABSPATH' ) ) exit;

class UpLoaderPlugin {

    function __construct()
    {
        add_action( 'enqueue_block_editor_assets', array( $this, 'adminAssets'));
    }

    function adminAssets() 
    {
        wp_enqueue_script( 'uploaderplugin', plugin_dir_url( __FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    }
}

$areYouPayinAttention = new UpLoaderPlugin();