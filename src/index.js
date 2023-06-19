import { MediaPlaceholder } from '@wordpress/block-editor';

wp.blocks.registerBlockType("ourplugin/upload-block", {
    title: "Upload Block",
    icon: "smiley",
    category: "common",
    attributes: {
        "url": {
            "type":"string"
        },
        "alt": {
            "type":"string"
        },
        "id": {
            "type":"number"
        }
    },

    edit:  ( { attributes, setAttributes }) => {
        const { url, alt, id } = attributes;

        return (
            
            <div>
                <MediaPlaceholder
                            onSelect={(media) => setAttributes({
                                url: media.url
                            })}
                            allowedTypes = { [ 'image' ] }
                            multiple = { false }
                            labels = { { title: 'The Image' } }
                />
                <img src={ url } placeholder='image' />
            </div>
        );
    },
    save: ({attributes}) => {
        const { url, alt, id } = attributes;

        return (
            <div>
                <img src={ url } alt={ alt } />
            </div>
        )
    },
});