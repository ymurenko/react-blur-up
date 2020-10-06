# "Blur-up" Image Loading React Hook
This simple component enables blurry loading of images, similar to Gatsby. 

A tiny, low resolution image is loaded in immediately, and is blurred with CSS filter, then is swapped out for the full-rez image once loading is complete, with the filter transitioned out.

Props:
- className: The class of the img element
- altText: descriptive image text for accessibility
- imgSmall: relative path to the low-res initial image (in the public folder)
- imgLarge: relative path to the high-res final image (in the public folder)

Fixed dimensions should be provided for the img element if imgSmall and imgLarge have different dimensions.
