SimpleImageHover
================

SimpleImageHover jQuery plugin

Usage:
$('.hoverimage').SimpleImageHover({placement:'outside'});

where .hoverimage is the selector for the images to be shown.

A minimalistic hover image plugin to show images in a larger size in a simple way.

The enlarged images are taken from the src of the original image. (So it basically uses the original image.)

Two modes: inside / outside (see "placement" option).

In "inside" mode the image itself is enlarged. This may cause troubles on your design, so it's better to set position "fixed" for the elements.

In "outside" mode a div is generated automatically which will float over the image on hover and will contain the enlarged image.

Possible options:

- "placement" : "inside" or "outside". "inside" to enlarge the image itself. You have to take care for css of the images in this case! Make "position:static;" and set top and left css attributes! Using "outside" you get a simple pop-over with the image enlarged. (This is the default.)

- "ratio" : how much times enlarge the images. (Default: 2)

- "originalpane": what shall be the id of the pop-over. (To avoid id conflict. Default: hoverimage_pane)

Have a good coding! :)

