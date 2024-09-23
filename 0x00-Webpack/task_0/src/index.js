// Importing jQuery
import $ from 'jquery';

// Adding three different paragraphs to the body
$(document).ready(function() {
    const paragraphs = [
        '<p>This is the first paragraph.</p>',
        '<p>This is the second paragraph.</p>',
        '<p>This is the third paragraph.</p>'
    ];

    paragraphs.forEach(paragraph => {
        $('body').append(paragraph);
    });
});
