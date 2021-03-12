## Property Info Widget
Displays the property information for the selected property.  Built using the Feature widget from the ArcGIS JavaScript API.  The PropertyInfoTemplate.ts file contains popup template for the feature widget.

### Properties
#### view
The map view
#### propertyFeature
The selected property feature graphic.  This is watched for changes and triggers the propertyUpdated() function.
### Functions
#### getPhotos()
Builds the media content for the popup template by retrieving the photos for the select property.
#### propertyUpdated()
Triggered when the propertyFeature property is updated.
